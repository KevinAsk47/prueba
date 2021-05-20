import {createDrawerNavigator} from '@react-navigation/drawer'
import React from 'react'
import { Text } from 'react-native'
import {WelcomeStack, AmigosStack} from './Stack'

const drawer = createDrawerNavigator()

const Drawer = (props) => {
    return (
        <drawer.Navigator>
            <drawer.Screen name="welcome" component={WelcomeStack} options={{
                title: 'Bienvenida!'
            }} />
            <drawer.Screen name="amigos" component={AmigosStack} options={{
                title: 'Lista de Amigos',
            }}/>
        </drawer.Navigator>
    )
}

export default Drawer