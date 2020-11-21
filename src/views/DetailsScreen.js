import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default ({route, navigation}) => {

    const {name, id, desc} = route.params

    const isEnty = (str) => {
        if(str.trim().length === 0){
            return "No hay datos"
        }
        return str
    }

    return (
        <View style={styles.container}>
            <Text>Nombre del libro</Text>
            <Text>{isEnty(name)}</Text>
            <Text>------------------</Text>
            <Text>Id de registro</Text>
            <Text>{isEnty(id)}</Text>
            <Text>------------------</Text>
            <Text>Descripcion</Text>
            <Text>{isEnty(desc)}</Text>
            <Text>------------------</Text>
            <Button title="Volver a la lista" onPress={() => navigation.goBack()}/>
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