import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import data from '../../data/question'
import { arrow, orang, white_wallpaper } from '../../assets/image'
import Modal from 'react-native-modal'
import * as Progress from 'react-native-progress';

const styles = StyleSheet.create({

    // #8AAE92 -> hijau tua
    // #C4E3CB -> hijau muda
    // #F4F9F4 -> putih
    // #626262 -> hitam

    container: {
        flex: 1,
        paddingVertical: 60,
        paddingHorizontal: 16,
        backgroundColor: "#F4F9F4",
        position: 'relative'
    },
    option: {
        height: 60,
        // backgroundColor: '#C4E3CB',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 20,
        borderColor: '#8AAE92',
        borderWidth: 3
    },
    modal: {
        paddingHorizontal: 30,
        paddingHorizontal: 30,
        borderRadius: 6,
        backgroundColor: 'white',
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
    },
    modalText: {
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20
    },
    modalButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        gap: 10,
        right: 30,
        bottom: 20,
    },
    modalButtonValue: {
        width: 70,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    backButton: {
        position: 'absolute',
        top: 23,
        left: -265
    },
    progressBar: {
        width: '100%',
        height: 20,
        backgroundColor: '#626262',
        borderRadius: 20,
        marginVertical: 10
    },
    progress: {
        width: '0%',
        height: '100%',
        backgroundColor: '#C4E3CB',
        borderRadius: 20
    }
})

const Test1 = ({ navigation, route }) => {

    const allQuestions = data;
    const [visible, setVisible] = useState(false);

    const [optionColor1, setOptionColor1] = useState('#C4E3CB');
    const [optionColor2, setOptionColor2] = useState('#C4E3CB');
    const [optionColor3, setOptionColor3] = useState('#C4E3CB');
    const [optionColor4, setOptionColor4] = useState('#C4E3CB');
    const [optionColor5, setOptionColor5] = useState('#C4E3CB');

    const renderQuestion = () => {
        return (
            <>
                <View>
                    {/* question counter */}
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 22 }} >1</Text>
                        <Text style={{ fontSize: 18 }}> / {allQuestions.length}</Text>
                    </View>

                    {/* question */}
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{allQuestions[0]?.question}</Text>
                </View>
            </>
        )

    }

    const checkedOption1 = () => {
        setOptionColor1('#F4F9F4')

        setOptionColor2('#C4E3CB')
        setOptionColor3('#C4E3CB')
        setOptionColor4('#C4E3CB')
        setOptionColor5('#C4E3CB')

        navigation.navigate('Test2', { next: 0.1 })
    }

    const checkedOption2 = () => {
        setOptionColor2('#F4F9F4')

        setOptionColor1('#C4E3CB')
        setOptionColor3('#C4E3CB')
        setOptionColor4('#C4E3CB')
        setOptionColor5('#C4E3CB')

        navigation.navigate('Test2', { next: 0.1 })
    }

    const checkedOption3 = () => {
        setOptionColor3('#F4F9F4')

        setOptionColor2('#C4E3CB')
        setOptionColor1('#C4E3CB')
        setOptionColor4('#C4E3CB')
        setOptionColor5('#C4E3CB')

        navigation.navigate('Test2', { next: 0.1 })
    }

    const checkedOption4 = () => {
        setOptionColor4('#F4F9F4')

        setOptionColor2('#C4E3CB')
        setOptionColor3('#C4E3CB')
        setOptionColor1('#C4E3CB')
        setOptionColor5('#C4E3CB')

        navigation.navigate('Test2', { next: 0.1 })
    }

    const checkedOption5 = () => {
        setOptionColor5('#F4F9F4')

        setOptionColor2('#C4E3CB')
        setOptionColor3('#C4E3CB')
        setOptionColor4('#C4E3CB')
        setOptionColor1('#C4E3CB')

        navigation.navigate('Test2', { next: 0.1 })
    }

    const renderOption = () => {
        return (
            <View>
                <TouchableOpacity style={[styles.option, { backgroundColor: optionColor1, borderColor: '#8AAE92' }]} onPress={checkedOption1} >
                    <Text style={{ fontSize: 18 }}>Iya, saya mengikuti semua</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.option, { backgroundColor: optionColor2 }]} onPress={checkedOption2}>
                    <Text style={{ fontSize: 18 }}>Saya mengikuti beberapa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.option, { backgroundColor: optionColor3 }]} onPress={checkedOption3}>
                    <Text style={{ fontSize: 18 }}>Saya mengikuti yang trending</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.option, { backgroundColor: optionColor4 }]} onPress={checkedOption4}>
                    <Text style={{ fontSize: 18 }}>Saya mengikuti sedikit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.option, { backgroundColor: optionColor5 }]} onPress={checkedOption5}>
                    <Text style={{ fontSize: 18 }}>Saya tidak mengikuti</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const backButton = () => {
        return (
            <TouchableOpacity style={styles.backButton} onPress={() => setVisible(true)} >
                <Image source={arrow} style={{ resizeMode: 'contain', height: 25 }} />
            </TouchableOpacity>
        )
    }

    const [bar, setBar] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setBar(0)
        }, 200)
    }, [])

    const progressBar = () => {
        return (
            <Progress.Bar progress={bar} width={360} animated={true} borderWidth={0} unfilledColor='#626262' height={20} color='#C4E3CB' style={{ borderRadius: 20, marginVertical: 10 }} />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={white_wallpaper} style={styles.container}>

                {progressBar()}
                {backButton()}
                {renderQuestion()}
                {renderOption()}

                <Image style={{ resizeMode: 'contain', height: 150, position: 'absolute', bottom: -20, left: -155 }} source={orang} />
                <Modal isVisible={visible}>
                    <View style={styles.modal}>
                        <View style={styles.modalText}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }} >Anda sedang menjalankan test</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }} >Apakah anda yakin ingin keluar?</Text>
                        </View>
                        <View style={styles.modalButton}>
                            <TouchableOpacity style={[styles.modalButtonValue, { backgroundColor: '#626262' }]}>
                                <Text style={{ color: '#F4F9F4', fontWeight: 'bold' }} onPress={() => setVisible(false)} >
                                    TIDAK
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.modalButtonValue, { backgroundColor: '#8AAE92' }]} onPress={() => navigation.navigate('Home')} >
                                <Text style={{ color: '#F4F9F4', fontWeight: 'bold' }}>
                                    YA
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Test1