import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles'

import Button from '../../components/Button'

export default function Details() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.product}>
                    <Image source={require('../../assets/img/6.png')} />
                </View>
                <View style={styles.productInfo}>
                    <View>
                        <Text style={styles.price}>R$ 89,90</Text>
                    </View>
                    <Button
                        text='Adicionar à Sacola'
                        backgroundColor={'#4D8A3E'}
                        width={150}
                        textColor={'white'}
                    />
                </View>
                <View style={styles.productDescription}>
                    <Text style={styles.title}>Descrição</Text>
                    <Text style={styles.textContent}>
                        A Blusa Feminina Manga Longa Bege by Bazzaar tem um tecido leve e uma modelagem ampla, ela é uma boa escolha para o inverno. Experimente combinar com calça clochard e mule, para um visual casual. Invista!
                    </Text>
                    <Text style={styles.title}>Características:</Text>
                    <Text style={styles.textContent}>
                        Modelo amplo Estampa de coqueiros Decote redondo Mangas curtas Barra simples A cor do produto nas fotos reproduzidas com modelos pode sofrer alteração, em decorrência do uso do flash.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}