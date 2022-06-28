import { View, Text, Image } from 'react-native'
import React from 'react'

import logo from '../assets/img/Bazzaar.png'
import { styles } from './styles'
import { Divisor } from '../Home/Home'

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={logo} style={styles.brand} />
            </View>
            <Divisor />
        </View>
    )
}