import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image } from 'react-native'
import { useEffect } from 'react'
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
    }
})

const ThankSplash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Thank')
        }, 2000)
    }, [navigation])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={white_wallpaper} style={styles.container}>
                <Image source={thank_you} style={{ position: 'absolute' }} />
                <Text style={styles.text}>Terima kasih karena</Text>
                <Text style={styles.text} >sudah melakukan</Text>
                <Text style={styles.text}>test minat bakat di</Text>
                <Text style={styles.text}>aplikasi kami</Text>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ThankSplash