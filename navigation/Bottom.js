import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import { Text } from 'react-native'
import Amigos from '../Amigos'
import Formulario from '../Formulario'
import Welcome from '../Welcome'

const bottom = createBottomTabNavigator()

const Bottom = (props) => {
    return (
        <bottom.Navigator>
            <bottom.Screen name="welcome" component={Welcome} options={{
                title: 'Bienvenida!'
            }} />
            <bottom.Screen name="amigos" component={Amigos} options={{
                title: 'Lista de Amigos',
                headerRight: () => <Text onPress={() => {}}>MENU</Text>
            }}/>
            <bottom.Screen name="formulario" component={Formulario} options={{
                title: 'Formulario de Carga'
            }}/>
        </bottom.Navigator>
    )
}

export default Bottom