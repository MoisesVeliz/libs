import React, { useState } from 'react'
import { View, StyleSheet, FlatList, Dimensions, Text, Alert, TextInput, Modal } from 'react-native'

import Item from '../components/Item'
import { Book } from '../models/book.model';
import BtnTool from '../components/BtnTool';
import ModalBook from '../components/ModalBook';

export default ({navigation}) => {

    const [bookName, setBookName] = useState('')
    const [bookList, setBookList] = useState([{id:'234234234.234234234', name:'Clean code', desc: ''}])
    const [enty, setEnty] = useState('No tienes libros registrados')
    const [editFlat, setEditFlat] = useState(false)
    const [toEdit, setToEdit] = useState({})
    const [modalVisible, setModalVisible] = useState(false)
    const [modalValue, setModalValue] = useState('')

    const createNewBook = () => {
        if(bookName.trim().length === 0) {
            Alert.alert('Nombre del libro', 'Necesita un nombre para su libro...')
            return
        }
        setModalVisible(true)
    }

    const saveNewBook = () => {
        let myBook = new Book()
        myBook.name = bookName
        myBook.id = String(Math.random() * 100000000)
        myBook.desc = modalValue;

        const newBook = bookList.concat(myBook)
        setBookList(newBook)
        setBookName('')
        setModalValue('')
        setModalVisible(false)
        navigateTo('Details', myBook)
    }

    const navigateTo = (route, book) => {
        navigation.navigate(route, {...book})
    }

    const editBook = (book) => {

        setToEdit(book)
        setBookName(book.name)
        setEditFlat(true)
    }

    const deleteBook = (book) => {
        Alert.alert(
            'Eliminar libro',
            '¿Desea continuar?, Eliminara los datos guardados',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('cancelada la operacion')
                },
                {
                    text: 'Eliminar',
                    onPress: () => {
                        const position = bookList.findIndex( x => x.id === book.id)
                        let x = [...bookList]
                        x.splice(position, 1)
                        setBookList(x)
                    }
                }
            ])

    }

    const saveEdit = () => {
        if(bookName.trim().length === 0) {
            Alert.alert('Nombre del libro', 'Necesita un nombre para su libro...')
            return
        }
        const position = bookList.findIndex( x => x.id === toEdit.id)
        let x = [...bookList]
        x[position].name = bookName

        setBookList(x)
        setBookName('')
        setEditFlat(false)
    }

    const renderizer = (prop) => {
        return(
            <Item 
                {...prop} 
                onPress={ (book) => navigateTo('Details', book)} 
                edit={ (book)=> editBook(book)} 
                del={ (book)=> deleteBook(book)}
            />
        )
    }

    return (
        <View style={styles.container}>
            
            {
                bookList.length > 0 
                ?
                <FlatList
                    data={bookList}
                    renderItem={ renderizer }
                    keyExtractor={ x => x.id}
                    style={styles.list}
                />
                :
                <View style={styles.titleCenter}>
                    <Text>{enty}</Text>
                </View>
            }
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Escriba el nombre del libro..."
                    style={styles.input}
                    onChangeText={text => setBookName(text)}
                    value={bookName}
                />
                {
                    editFlat 
                    ?
                    <BtnTool
                        onPress={() => saveEdit()}
                        styles={styles.floatLeft}
                        iconName="md-save"
                        iconColor="yellow"
                        iconSize={50}
                    />
                    :
                    <BtnTool
                        onPress={() => createNewBook()}
                        styles={styles.floatLeft}
                        iconName="ios-add-circle"
                        iconColor="green"
                        iconSize={40}
                    />
                }
            </View>
            <ModalBook
                visible={modalVisible}
                closeModal={ () => setModalVisible(false)}
                onChangeText={ text => setModalValue(text)}
                value={modalValue}
                saveBook={() => saveNewBook()}
                bookName={bookName}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1
    },
    input:{
        backgroundColor: '#fff',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        fontSize:16
    },
    list:{
        alignSelf: 'stretch',
        height: Dimensions.get('window').height - 130
    },
    inputGroup:{
        alignSelf: 'stretch',
        position: 'relative',
        justifyContent: 'center'
    },
    floatLeft:{
        position: 'absolute',
        right: 20,
    },
    titleCenter:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})