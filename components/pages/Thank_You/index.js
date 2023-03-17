import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { thank_you, white_wallpaper } from '../../assets/image'

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
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button: {
        width: 200,
        backgroundColor: '#8AAE92',
        marginTop: 20,
        borderRadius: 100,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const Thank = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={white_wallpaper} style={styles.container}>
                <Image source={thank_you} style={{ position: 'absolute' }} />
                <Text style={styles.text}>Ingin melakukan</Text>
                <Text style={styles.text}>test lagi?</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Loading')}>
                    <Text style={[styles.text, { color: '#F4F9F4', fontSize: 28 }]}>Ya</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={[styles.text, { fontSize: 20, marginTop: 20, textDecorationLine: 'underline' }]}>Tidak</Text>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Thank