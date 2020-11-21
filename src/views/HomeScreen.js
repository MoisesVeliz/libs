import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Hola home</Text>
            <Button
                title="ir a detalles"
                onPress={() => navigation.navigate('Details')}
            />
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