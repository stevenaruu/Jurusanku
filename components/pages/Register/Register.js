import { ImageBackground, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { green_wallpaper } from '../../assets/image'
import Modal from 'react-native-modal'

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
        height: 450,
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
        alignItems: 'center',
        marginTop: 15
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

const Register = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const handleLogin = () => {
        if(username === "" || email === "" || password === "" || confirmPassword === ""){
            setVisible(true);
            setMessage1("Harap isi semua kolom input");
            setMessage2("yang sudah disediakan");
        }else if(password !== confirmPassword){
            setVisible(true);
            setMessage1("Pastikan Password dengan");
            setMessage2("Konfirmasi Password Anda sama!");
        }else{
            navigation.navigate('Test1');
            
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground style={styles.container} source={green_wallpaper}>
                <View style={styles.wrapper}>
                    <Text style={{ top: 30, position: 'absolute', fontWeight: 'bold', fontSize: 30 }}>
                        Register
                    </Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Username'
                        onChangeText={setUsername}
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Email'
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Password'
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Konfirmasi Password'
                        onChangeText={setConfirmPassword}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 16 }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.registerText}>
                        <Text>Sudah memiliki akun? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login') }>
                            <Text style={{ textDecorationLine: 'underline', color: '#C4E3CB', fontWeight: 'bold' }}>Masuk sekarang</Text>
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

export default Register