import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function Button({ backgroundColor, width, text, textColor, opacity, onPress }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: backgroundColor, width: width, opacity: opacity }]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text style={[styles.text, { color: textColor }]}>{text}</Text>
        </TouchableOpacity>
    )
}