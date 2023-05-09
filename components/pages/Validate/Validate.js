import { ImageBackground, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { white_wallpaper } from '../../assets/image'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 60,
        paddingHorizontal: 16,
        backgroundColor: "#F4F9F4",
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#626262'
    },
    button: {
        backgroundColor: '#8AAE92',
        width: 200,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginTop: 50
    }
})

const Validate = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={white_wallpaper} style={styles.container}>
                <View>
                    <Text style={styles.text}>Apakah anda ingin</Text>
                    <Text style={styles.text}>menyelesaikan</Text>
                    <Text style={styles.text}>test?</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Result')} >
                    <Text style={[styles.text, { color: '#626262' }]}>Selesai</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                <Text style={{ fontSize: 16, textDecorationLine: 'underline', fontWeight: 'bold', marginTop: 15 }}>Kembali</Text>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Validate