import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default () => {
    return (
        <View style={styles.container}>
            <Text>Hola details</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})