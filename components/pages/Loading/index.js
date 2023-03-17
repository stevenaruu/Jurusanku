import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import { useEffect } from 'react'
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
})

const Loading = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Test1')
        }, 500)
    }, [navigation])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={white_wallpaper} style={styles.container}>
                <Text style={{ fontSize: 16 }} >Loading</Text>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Loading