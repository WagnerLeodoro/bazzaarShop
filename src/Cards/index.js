import { View, Text, Image } from 'react-native'
import React from 'react'

import { styles } from './styles'

import Button from '../Button'

export default function Cards({ onPress, photo, productName, productPrice }) {
    return (
        <View>
            <View style={styles.container}>
                <Image source={photo} resizeMode={'cover'} style={styles.image} />
                <View style={styles.btnContainer}>
                    <Button
                        text='Confira'
                        backgroundColor={'white'}
                        width={126}
                        textColor={'black'}
                        opacity={0.9}
                        onPress={onPress}
                    />
                </View>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoText}>{productName}</Text>
                <Text style={styles.infoText}>R$ {productPrice}</Text>
            </View>
        </View>
    )
}