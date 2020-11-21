import React from 'react'
import {View, Text, Modal, StyleSheet, Button} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default ({visible, closeModal, value, onChangeText, saveBook, bookName}) => {
    return(

        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
        >
            <View style={styles.containser}>
                <View style={styles.card}>
                    <View>
                        <Text style={styles.title}>{bookName}</Text>
                        <Text style={styles.subtitle}>Descripcion del libro</Text>
                    </View>
                    <TextInput
                        placeholder="Escriba una breve descripcion del libro"
                        multiline={true}
                        style={styles.input}
                        value={value}
                        onChangeText={text => onChangeText(text)}
                    />
                    <View>
                        <Button title="Guardar" onPress={saveBook}/>
                        <Text  onPress={closeModal} style={styles.link}>Cancelar</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    containser:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.3)'
    },
    card:{
        backgroundColor: '#fff',
        padding: 20,
        elevation: 5,
        width :'80%',
        height: '80%',
        borderRadius: 10,
        justifyContent: 'space-evenly',
    },
    title:{
        textAlign: 'center',
        fontSize: 22,
        paddingBottom: 10
    },
    subtitle:{
        textAlign: 'center',
        fontSize: 14,
        paddingBottom: 10
    },
    input:{
        paddingVertical: 20,
        fontSize: 16
    },
    link:{
        textAlign:'center',
        color: 'rgb(0, 118, 255)',
        marginTop: 25
    }
})