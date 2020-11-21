import React from 'react'
import { Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default ({onPress, iconName, iconColor, iconSize, styles}) => {
    return(
        <Pressable onPress={ onPress} style={styles}>
            <Ionicons name={iconName} size={iconSize} color={iconColor} />
        </Pressable>
    )
}