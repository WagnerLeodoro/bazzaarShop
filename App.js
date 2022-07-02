import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Feather";

import Header from './src/components/Header';
import StackNav from './src/routes/StackNav';
import AboutUs from './src/pages/AboutUs';
import Categories from './src/pages/Categories'
import Payment from './src/pages/Payment';

const { Navigator, Screen } = createBottomTabNavigator();

const icons =
{
    Home: {
        name: 'home',
    },
    Categorias: {
        name: 'menu',
    },
    Sobre: {
        name: 'info',
    },
    Cartões: {
        name: 'credit-card',
    }
}

export default function App() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        const { name } = icons[route.name]
                        return <Icon name={name} size={size} color={color} />
                    },
                })}
            >
                <Screen name="Home" component={StackNav} options={{
                    headerShown: false,
                }} />
                <Screen name="Sobre" component={AboutUs} options={{ headerTitle: (props) => <Header {...props} /> }} />
                <Screen name="Categorias" component={Categories} options={{ headerTitle: (props) => <Header {...props} /> }} />
                <Screen name="Cartões" component={Payment} options={{ headerTitle: (props) => <Header {...props} /> }} />
            </Navigator>
        </NavigationContainer>
    )
}