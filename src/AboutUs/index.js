import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function AboutUs() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Bem vindos ao Bazzaar</Text>
            </View>
            <View>
                <Text style={styles.text}>
                    Nossos produtos são inspirados pelas pessoas que estão à nossa volta, com suas belezas e qualidades.
                    Produtos de bom gosto especialmente para você.
                    Descubra nossa história e aproveite as promoções
                </Text>
            </View>
        </View>
    )
}