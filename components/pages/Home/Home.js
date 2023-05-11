import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { arrow, green_wallpaper, homepage_icon, white_wallpaper } from '../../assets/image'

// #8AAE92 -> hijau tua
// #C4E3CB -> hijau muda
// #F4F9F4 -> putih
// #626262 -> hitam

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#C4E3CB',
        flex: 1
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    text: {
        color: '#474747',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        width: 150,
        height: 40,
        backgroundColor: '#626262',
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        position: 'relative',
        paddingLeft: 20
    },
    bulet: {
        width: 27,
        height: 27,
        backgroundColor: '#F4F9F4',
        borderRadius: 100,
        position: 'absolute',
        right: 7,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ scaleX: -1 }]
    }

})

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={green_wallpaper} style={styles.container} >
                <View style={styles.header}>
                    <View>
                        <Text style={styles.text} >Test Minat Bakat</Text>
                        <Text style={styles.text}>Penjurusan Anda!</Text>
                    </View>
                    <Image source={homepage_icon} style={{ resizeMode: 'contain', height: 430 }} />
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: '#F4F9F4' }}>Get Started</Text>
                        <View style={styles.bulet}>
                            <Image source={arrow} style={{ resizeMode: 'contain', height: 20, width: 20, marginRight: 4 }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Home