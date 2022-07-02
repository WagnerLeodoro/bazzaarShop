import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Details from '../pages/Details';
import Home from '../pages/Home/Home';
import Header from '../components/Header';

const { Navigator, Screen } = createNativeStackNavigator();

export default function StackNav() {
    return (
        <Navigator>
            <Screen
                name="Main"
                component={Home}
                options={{ headerTitle: (props) => <Header {...props} /> }}
            />
            <Screen name="Detalhes" component={Details}
            />
        </Navigator>
    )
}