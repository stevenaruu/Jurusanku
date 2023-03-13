import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { green_wallpaper } from '../../assets/image'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 60,
        paddingHorizontal: 16,
        backgroundColor: "#F4F9F4",
        position: 'relative'
    },
})

const Validate = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={green_wallpaper} style={styles.container}>

        </ImageBackground>
    </SafeAreaView>
  )
}

export default Validate