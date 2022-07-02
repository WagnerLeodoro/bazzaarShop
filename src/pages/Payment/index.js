import { View, Text, Image } from 'react-native'
import React from 'react'

import { styles } from './styles'

export default function Payment() {
    return (
        <View style={styles.payment}>
            <Text style={[styles.text, { color: 'black' }]}>
                Aceitamos
            </Text>
            <View style={styles.creditCardContainer}>
                <Image
                    source={require('../../assets/img/Mastercard.png')}
                    style={styles.creditCard
                    }
                />
                <Image
                    source={require('../../assets/img/Visa.png')}
                    style={styles.creditCard}
                />
                <Image
                    source={require('../../assets/img/PayPal.png')}
                    style={styles.creditCard}
                />
            </View>
        </View>
    )
}