import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import { Text } from 'react-native'
import Amigos from '../Amigos'
import Formulario from '../Formulario'
import Welcome from '../Welcome'

const stack = createStackNavigator()

export const WelcomeStack = () => {
    return (
        <stack.Navigator>
            <stack.Screen name="welcome" component={Welcome} />
        </stack.Navigator>
    )
}

export const AmigosStack = () => {
    return (
        <stack.Navigator>
            <stack.Screen name="amigos" component={Amigos} />
            <stack.Screen name="formulario" component={Formulario} />            
        </stack.Navigator>
    )
}