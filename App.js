import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Details from './src/Details'
import Home from './src/Home/Home'
import Header from './src/Header';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            {
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} options={{ headerTitle: (props) => <Header {...props} /> }} />
                    <Stack.Screen name="Detalhes" component={Details} />
                </Stack.Navigator>
            }
        </NavigationContainer>
    )
}