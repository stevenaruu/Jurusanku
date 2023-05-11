import { ImageBackground, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import React, { useState } from 'react'
import { green_wallpaper } from '../../assets/image'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 60,
        paddingHorizontal: 35,
        backgroundColor: "#F4F9F4",
        justifyContent: 'center',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
        width: 300,
        height: 370,
        backgroundColor: 'white',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    TextInput: {
        height: 40,
        width: 250,
        borderColor: '#C4E3CB',
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 100,
        marginTop: 15
    },
    button: {
        height: 40,
        width: 250,
        backgroundColor: '#8AAE92',
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 30,
        position: 'absolute',
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
        marginBottom: 40
    },
    modalButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        right: 30,
        bottom: 20,
    },
    modalButtonValue: {
        width: 285,
        height: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
})

const Login = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const handleLogin = () => {
        const username = "Jurusanku";
        const email = "jurusanku@gmail.com";
        const pass = "Jurusanku123"
        let lowerEmail = usernameOrEmail

        if (lowerEmail.includes("@gmail.com")) {
            lowerEmail = lowerEmail.toLowerCase();
        }

        if ((usernameOrEmail === username || lowerEmail === email) && password === pass) {
            navigation.navigate('Test1');
        }else if(usernameOrEmail == "" || password == ""){
            setVisible(true);
            setMessage1("Kolom Username/Email dan Password");
            setMessage2("Tidak boleh kosong!");
        }else{
            setVisible(true);
            setMessage1("Username/Email dan Password");
            setMessage2("yang Anda masukkan salah!");
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground style={styles.container} source={green_wallpaper}>
                <View style={styles.wrapper}>
                    <Text style={{ top: 30, position: 'absolute', fontWeight: 'bold', fontSize: 30 }}>
                        User Login
                    </Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Email/Username'
                        onChangeText={setUsernameOrEmail}
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Password'
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={{ display: 'flex', alignItems: 'flex-start', width: 230 }}>
                        <Text style={{ marginVertical: 15, textAlign: 'left', color: '#C4E3CB', textDecorationLine: 'underline', fontWeight: 'bold' }}>
                            Lupa password?
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 16 }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.registerText}>
                        <Text>Belum memiliki akun? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={{ textDecorationLine: 'underline', color: '#C4E3CB', fontWeight: 'bold' }}>Daftar sekarang</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal isVisible={visible}>
                    <View style={styles.modal}>
                        <View style={styles.modalText}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }} >{message1}</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }} >{message2}</Text>
                        </View>
                        <View style={styles.modalButton}>
                            <TouchableOpacity style={[styles.modalButtonValue, { backgroundColor: '#8AAE92' }]} onPress={() => setVisible(false)} >
                                <Text style={{ color: '#F4F9F4', fontWeight: 'bold' }}>
                                    OKAY!
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Login