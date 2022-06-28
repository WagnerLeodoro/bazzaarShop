import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Cards from '../Cards'

import Banners from '../Banners'
import AboutUs from '../AboutUs'
import Footer from '../Footer'
import Header from '../Header'

export const Divisor = () => {
  return <View style={styles.divisor} />
}

const modaFeminina = [
  {
    id: '1',
    img: require('../assets/img/6.png'),
    product: 'Blusa Feminina Manga Longa',
    price: '89.90'
  },
  {
    id: '2',
    img: require('../assets/img/7.png'),
    product: 'Macaquinho Acinturado Verão',
    price: '109.90'
  }
]

const modaMasculina = [
  {
    id: '1',
    img: require('../assets/img/4.png'),
    product: 'Camisa Básica',
    price: '29.90'
  },
  {
    id: '2',
    img: require('../assets/img/5.png'),
    product: 'Blaser Slim',
    price: '189.90'
  }
]



const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banners />
        <View style={styles.vitrine}>
          <Text style={styles.title}>Moda Feminina</Text>
          <View style={styles.cardsContainer}>
            <FlatList
              keyExtractor={item => item.id}
              data={modaFeminina}
              horizontal
              renderItem={({ item }) => (
                <Cards onPress={() => navigation.navigate('Detalhes')} photo={item.img} productName={item.product} productPrice={item.price} />
              )}
            />
          </View>
        </View>
        <View style={styles.vitrine}>
          <Text style={styles.title}>Moda Maculina</Text>
          <View style={styles.cardsContainer}>
            <FlatList
              keyExtractor={item => item.id}
              data={modaMasculina}
              horizontal
              renderItem={({ item }) => (
                <Cards onPress={() => navigation.navigate('Detalhes')} photo={item.img} productName={item.product} productPrice={item.price} />
              )}
            />
          </View>
        </View>
        <Divisor />
        <AboutUs />
        <Footer />
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divisor: {
    borderWidth: 1,
    borderEndWidth: 250,
    marginBottom: 5,
  },
  cardsContainer: {
    flexDirection: 'row',
  },
  vitrine: {
    justifyContent: 'center',
    marginBottom: 15,
  },
  title: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    lineHeight: 16,
  }
})