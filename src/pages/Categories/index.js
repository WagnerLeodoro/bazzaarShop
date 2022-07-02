import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import { styles } from './styles'

export default function AboutUs() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Categorias</Text>
            </View>
            <View>
                <Text style={styles.text}>
                    Selecione uma categoria para ver os produtos
                </Text>
            </View>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.textContainer}>
                    <View style={styles.line}>
                        <Text style={styles.text}>
                            Masculino
                        </Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text}>
                            Feminino
                        </Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text}>
                            Infantil
                        </Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text}>
                            Calçados
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}