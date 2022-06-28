import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'

import loja from '../assets/img/loja.png'
import Mastercard from '../assets/img/Mastercard.png'
import Visa from '../assets/img/Visa.png'
import PayPal from '../assets/img/PayPal.png'

import { styles } from './styles'

export default function Footer() {
    return (
        <>
            <ImageBackground source={loja} resizeMode='cover' style={styles.container}>
                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.text}>
                            Rua Eusébio 10
                            Centro, Cidade das Águas
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>
                            Aberta de segunda a sexta {'\n'}
                            das 10:00 às 21:00
                        </Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.contact}>
                <View style={styles.social}>
                    <Text style={[styles.text, { color: 'black' }]}>Siga-nos</Text>
                    <View style={styles.socialContainer}>
                        <Image
                            source={require('../assets/img/Facebook.png')}
                            style={styles.socialIcon
                            }
                        />
                        <Image
                            source={require('../assets/img/Instagram.png')}
                            style={styles.socialIcon
                            }
                        />
                        <Image
                            source={require('../assets/img/Twitter.png')}
                            style={styles.socialIcon
                            }
                        />
                    </View>
                </View>
                <View style={styles.payment}>
                    <Text style={[styles.text, { color: 'black' }]}>
                        Aceitamos
                    </Text>
                    <View style={styles.creditCardContainer}>
                        <Image
                            source={require('../assets/img/Mastercard.png')}
                            style={styles.creditCard
                            }
                        />
                        <Image
                            source={require('../assets/img/Visa.png')}
                            style={styles.creditCard}
                        />
                        <Image
                            source={require('../assets/img/PayPal.png')}
                            style={styles.creditCard}
                        />
                    </View>
                </View>
            </View>
        </>
    )
}