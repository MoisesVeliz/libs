import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import BtnTool from './BtnTool';

export default (prop) => {
    const {item, index, onPress, edit, del} = prop

    return(
        <View style={styles.item}>
            <TouchableOpacity onPress={() => onPress(item)}>
                <Text style={styles.lite}>{index + 1} - {item.name}</Text>
                <Text style={styles.link}>Ver detalles...</Text>
            </TouchableOpacity>
            <View style={styles.iconGoup}>
                <BtnTool
                    onPress={() => edit(item)}
                    styles={styles.floatLeft}
                    iconName="ios-color-wand"
                    iconColor="rgb(17, 216, 0)"
                    iconSize={38}
                />
                <BtnTool
                    onPress={() => del(item)}
                    styles={styles.floatLeft}
                    iconName="md-trash"
                    iconColor="rgb(233, 189, 189)"
                    iconSize={38}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        padding: 30,
        backgroundColor: 'rgb(238, 238, 238)',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    lite:{
        fontSize: 24
    },
    iconGoup:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100
    },
    link:{
        textAlign:'center',
        color: 'rgb(0, 118, 255)',
        marginTop: 5
    }
})