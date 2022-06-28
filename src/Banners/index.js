import { View, Text, Dimensions, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'

import bannerFeminino from '../assets/img/bannerFeminino.png'
import bannerMasculino from '../assets/img/bannerMasculino.png'
import bannerLoja from '../assets/img/bannerBazzaar.png'
import { styles } from './styles'

const images = [
    bannerFeminino,
    bannerMasculino,
    bannerLoja
]

const { width } = Dimensions.get('window');
const height = width * 0.6

export default function Banners() {
    const [active, setActive] = useState(0);

    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if (slide !== active) {
            setActive(slide);
        }
    }

    return (
        <View style={styles.bannerContainer}>
            <ScrollView
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={change}
                style={{ width, height }}
            >
                {images.map((image, index) => (
                    <Image
                        key={index}
                        source={image}
                        style={styles.image}
                    />
                ))}
            </ScrollView>
            <View style={styles.dotsIndicator}>
                {images.map((i, k) => (
                    <Text key={k} style={k === active ? styles.activeDots : styles.dots}>⬤</Text>
                ))}
            </View>
        </View>
    )
}