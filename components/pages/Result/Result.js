import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import { arrow, arrow2, dokter, game_app, green_wallpaper, programmer, sastra_bahasa, bisnis } from '../../assets/image'
import Modal from 'react-native-modal'
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 60,
        paddingHorizontal: 35,
        backgroundColor: "#F4F9F4",
        display: 'flex',
        justifyContent: 'center',
        position: 'relative'
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
    },
    next: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
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
})

const Result = ({ navigation }) => {

    const [visible, setVisible] = useState(false);
    const [jurusan, setJurusan] = useState("Programmer");
    const [description, setDescription] = useState("Kamu mempunyai ketertarik dibidang programming sebab kamu suka design tetapi kamu juga suka memperlihatkan hasil karyamu di media online");
    const [alternatif, setAlternatif] = useState("Front-End, Back-End");
    const [image, setImage] = useState(programmer);
    const { point } = useSelector((state) => state.point);

    useEffect(() => {
        if (point >= 0 && point <= 200) {
            setJurusan("Programmer");
            setDescription("Kamu mempunyai ketertarik dibidang programming sebab kamu suka design tetapi kamu juga suka memperlihatkan hasil karyamu di media online");
            setImage(programmer);
            setAlternatif("Front-End, Back-End");
        } else if (point >= 210 && point <= 400) {
            setJurusan("Game Application");
            setDescription("Kamu merupakan seseorang yang suka bermain game disamping itu kamu mempunyai keinginan untuk membuat game");
            setImage(game_app);
            setAlternatif("Professional Player, Bisnis");
        } else if (point >= 410 && point <= 600) {
            setJurusan("Bisnis");
            setDescription("Kamu suka melakukan suatu hal yang menghasilkan uang, maka dari itu bisnis merupakan salah satu jurusan yang cocok untukmu");
            setImage(bisnis);
            setAlternatif("Manajemen, Akuntansi");
        } else if (point >= 610 && point <= 800) {
            setJurusan("Sastra Bahasa");
            setDescription("Kamu merupakan seorang yang suka mempelajari bahasa asing, selain itu penggunaan bahasa asingmu suka baik. Disamping itu kamu cepat dalam mempelajari bahasa asing");
            setImage(sastra_bahasa);
            setAlternatif("Guru, Pariwisata");
        } else if (point >= 810 && point <= 1000) {
            setJurusan("Dokter Hewan");
            setDescription("Kamu mempunyai sifat penolong yang kuat, yang membuatmu ingin menjadi dokter, tetapi karena ketertarikanmu pada hewan membuatmu cocok untuk menjadi dokter hewan");
            setImage(dokter);
            setAlternatif("Dokter Kecantikan, Bidan");
        }
    }, [point]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground style={styles.container} source={green_wallpaper}>
                <View style={styles.header}>
                    <Text style={styles.text}>Jurusan kuliah yang cocok untukmu ialah:</Text>
                    <Text style={[styles.text, { marginTop: 20, color: '#474747' }]}>{jurusan}</Text>
                </View>
                <Image source={image} style={{ width: 300, resizeMode: 'contain' }} />
                <Text style={{ fontSize: 16, fontWeight: 'bold' }} >{description}</Text>
                <Text style={{ marginTop: 20, fontSize: 20, fontWeight: 'bold', color: '#474747' }} >Alternatif:</Text>
                <Text style={{ fontWeight: 'bold' }}>{alternatif}</Text>
                <TouchableOpacity style={styles.next} onPress={() => setVisible(true)}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline' }} >Next</Text>
                    <Image source={arrow2} style={{ resizeMode: 'contain', width: 30, height: 15, marginTop: 1 }} />
                </TouchableOpacity>

                <Modal isVisible={visible}>
                    <View style={styles.modal}>
                        <View style={styles.modalText}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }} >Apakah anda yakin sudah selesai</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }} >dengan melihat hasil anda?</Text>
                        </View>
                        <View style={styles.modalButton}>
                            <TouchableOpacity style={[styles.modalButtonValue, { backgroundColor: '#626262' }]}>
                                <Text style={{ color: '#F4F9F4', fontWeight: 'bold' }} onPress={() => setVisible(false)} >
                                    TIDAK
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.modalButtonValue, { backgroundColor: '#8AAE92' }]} onPress={() => navigation.navigate('ThankSplash')} >
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

export default Result