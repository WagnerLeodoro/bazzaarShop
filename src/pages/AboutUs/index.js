import { View, Text, Image } from 'react-native'
import React from 'react'

import loja from '../../assets/img/loja.png'
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
            <Image style={styles.image} source={loja} resizeMode={'cover'} />
            <View style={styles.textContainer}>
                <View>
                    <Text style={styles.text}>
                        Rua Eusébio 10, Centro, Cidade das Águas
                    </Text>
                </View>
                <View>
                    <Text style={styles.text}>
                        Aberta de segunda a sexta das 10:00 às 21:00
                    </Text>
                </View>
            </View>
            <View style={styles.contact}>
                <View style={styles.social}>
                    <Text style={styles.text}>Siga-nos</Text>
                    <View style={styles.socialContainer}>
                        <Image
                            source={require('../../assets/img/Facebook.png')}
                            style={styles.socialIcon
                            }
                        />
                        <Image
                            source={require('../../assets/img/Instagram.png')}
                            style={styles.socialIcon
                            }
                        />
                        <Image
                            source={require('../../assets/img/Twitter.png')}
                            style={styles.socialIcon
                            }
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}