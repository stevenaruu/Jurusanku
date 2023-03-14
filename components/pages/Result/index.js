import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image } from 'react-native'
import React from 'react'
import { dokter, game_app, green_wallpaper, programmer, sastra_bahasa } from '../../assets/image'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 60,
        paddingHorizontal: 35,
        backgroundColor: "#F4F9F4",
        display: 'flex',
        justifyContent: 'center',
    },
    text: {
        fontSize: 32, 
        fontWeight: 'bold',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
    }
})

const Result = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground style={styles.container} source={green_wallpaper}>
                <View style={styles.header}>
                    <Text style={styles.text}>Jurusan kuliah yang cocok untukmu ialah:</Text>
                    <Text style={[styles.text, {marginTop: 20, color: '#474747'}]}>Front-End</Text>
                </View>
                <Image source={programmer} style={{ width: 300, resizeMode: 'contain' }} />
                <Text style={{ fontSize: 16, fontWeight: 'bold' }} >Kamu mempunyai ketertarik dibidang programming sebab kamu suka design tetapi kamu juga suka memperlihatkan hasil karyamu di media online</Text>
                <Text style={{ marginTop: 20, fontSize: 20, fontWeight: 'bold', color: '#474747' }} >Alternatif:</Text>
                <Text style={{ fontWeight: 'bold' }}>Back-end, UI/UX Design</Text>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Result