import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useEffect } from 'react'
import { splash_screen } from '../../assets/image'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 3000)
    }, [navigation])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={splash_screen} style={{ flex: 1 }}></ImageBackground>
        </SafeAreaView>
    )
}

export default Splash