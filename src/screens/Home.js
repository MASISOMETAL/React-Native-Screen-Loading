import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../constants/Colors'

const { height, width } = Dimensions.get("window")

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.title}>Home</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>Pantalla Inicial</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    head:{
        height: height * 0.1,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontFamily: "Lora_700Bold",
    },
    body:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#d3d3d3",
    },
    text: {
        fontSize: 30,
        fontFamily: "Lora_400Regular",
    }
})

export default Home;