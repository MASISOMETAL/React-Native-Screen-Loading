import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import * as Progress from 'react-native-progress';
//npm install react-native-progress --save

const { height, width } = Dimensions.get("window")

const Loading = ({setLoad}) => {

    const [progress, setProgress] = useState(0);
    const [temp, setTemp] = useState();

    useEffect(() => {
        setTemp(setInterval(() => {
            setProgress((progress) => progress + 0.1)
        }, 250))
    }, [])

    useEffect(() => {
        if (progress >= 1) {
            clearInterval(temp)
            setLoad(true)
        }
    }, [progress])

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require("../../assets/img/android.png")} />
            <Progress.Bar progress={progress} width={width * 0.65} />
            <Text>Loading</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#857f51",
    },
    img: {
        width: width * 0.45,
        height: width * 0.45,
        resizeMode: 'contain',
        marginBottom: height * 0.03,
    },
})

export default Loading;