import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import data from '../../data/question'
import { arrow, orang, white_wallpaper } from '../../assets/image'
import * as Progress from 'react-native-progress';
import { useDispatch } from "react-redux"
import { add } from '../../../features/pointSlice'

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
        alignItems: 'center'
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
        height: '100%',
        backgroundColor: '#C4E3CB',
        borderRadius: 20
    }
})

const Test8 = ({ navigation, route }) => {

    const allQuestions = data;
    const dispatch = useDispatch();

    const [optionColor1, setOptionColor1] = useState('#C4E3CB');
    const [optionColor2, setOptionColor2] = useState('#C4E3CB');
    const [optionColor3, setOptionColor3] = useState('#C4E3CB');
    const [optionColor4, setOptionColor4] = useState('#C4E3CB');
    const [optionColor5, setOptionColor5] = useState('#C4E3CB');

    const renderQuestion = () => {
        return (
            <View>
                {/* question counter */}
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 22 }} >8</Text>
                    <Text style={{ fontSize: 18 }}> / {allQuestions.length}</Text>
                </View>

                {/* question */}
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{allQuestions[7]?.question}</Text>
            </View>
        )

    }

    const checkedOption1 = () => {
        setOptionColor1('#F4F9F4')

        setOptionColor2('#C4E3CB')
        setOptionColor3('#C4E3CB')
        setOptionColor4('#C4E3CB')
        setOptionColor5('#C4E3CB')

        dispatch(add({ point: 40 }))
        navigation.navigate('Test9', { next: 0.8 })
    }

    const checkedOption2 = () => {
        setOptionColor2('#F4F9F4')

        setOptionColor1('#C4E3CB')
        setOptionColor3('#C4E3CB')
        setOptionColor4('#C4E3CB')
        setOptionColor5('#C4E3CB')
        
        dispatch(add({ point: 30 }))
        navigation.navigate('Test9', { next: 0.8 })
    }

    const checkedOption3 = () => {
        setOptionColor3('#F4F9F4')

        setOptionColor2('#C4E3CB')
        setOptionColor1('#C4E3CB')
        setOptionColor4('#C4E3CB')
        setOptionColor5('#C4E3CB')
       
        dispatch(add({ point: 20 }))
        navigation.navigate('Test9', { next: 0.8 })
    }

    const checkedOption4 = () => {
        setOptionColor4('#F4F9F4')

        setOptionColor2('#C4E3CB')
        setOptionColor3('#C4E3CB')
        setOptionColor1('#C4E3CB')
        setOptionColor5('#C4E3CB')
        
        dispatch(add({ point: 50 }))
        navigation.navigate('Test9', { next: 0.8 })
    }

    const checkedOption5 = () => {
        setOptionColor5('#F4F9F4')

        setOptionColor2('#C4E3CB')
        setOptionColor3('#C4E3CB')
        setOptionColor4('#C4E3CB')
        setOptionColor1('#C4E3CB')
        
        dispatch(add({ point: 10 }))
        navigation.navigate('Test9', { next: 0.8 })
    }

    const renderOption = () => {
        return (
            <View>
                <TouchableOpacity style={[styles.option, { backgroundColor: optionColor1 }]} onPress={checkedOption1} >
                    <Text style={{ fontSize: 18 }}>Seni yang indah</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.option, { backgroundColor: optionColor2 }]} onPress={checkedOption2}>
                    <Text style={{ fontSize: 18 }}>Seni yang menarik</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.option, { backgroundColor: optionColor3 }]} onPress={checkedOption3}>
                    <Text style={{ fontSize: 18 }}>Seni yang buruk</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.option, { backgroundColor: optionColor4 }]} onPress={checkedOption4}>
                    <Text style={{ fontSize: 18 }}>Bukanlah sebuah seni</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.option, { backgroundColor: optionColor5 }]} onPress={checkedOption5}>
                    <Text style={{ fontSize: 18 }}>Tidak ada opini</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const backButton = () => {
        return (
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} onPressIn={() => { setBar(0.5) }}>
                <Image source={arrow} style={{ resizeMode: 'contain', height: 25 }} />
            </TouchableOpacity>
        )
    }
    
    const [bar, setBar] = useState(0.6)

    const { next } = route.params

    useEffect(() => {
        setTimeout(() => {
            setBar(next)
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
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Test8