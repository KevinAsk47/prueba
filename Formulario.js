import React, { useState } from 'react'
import {View, StyleSheet, Text, TextInput, Button, Alert, TouchableOpacity} from 'react-native'
import axios from 'axios'

const Formulario = (props) => {
    const [nuevoAmigo, setNuevoAmigo] = useState({
        nombre: '', edad: '', foto: ''
    })

    const leerInput = (e, campo) => {
        setNuevoAmigo({
            ...nuevoAmigo,
            [campo]: e
        })
    }
    const enviarInfo = () => {
        Alert.alert(
            "Grabando nuevo amigo",
            `¿Estás seguro que querés grabar a ${nuevoAmigo.nombre} ?`,
            [
                {text: 'SI', onPress: () => {
                    axios.post('https://appprueba2021.herokuapp.com/api/amigo', nuevoAmigo)
                    .then(respuesta => props.navigation.navigate('amigos'))
                }},
                {text: 'NO'}
            ]
        )
    }
    return (
        <View style={styles.granCaja}>
            <Text style={styles.texto}>CARGA NUEVO AMIGO</Text>
            <View style={styles.formulario}>
                <TextInput 
                    placeholder="Ingresa el nombre"
                    placeholderTextColor = 'white'
                    color = 'white'
                    style = {styles.input}
                    onChangeText={(e) => leerInput(e, 'nombre')}
                    />
                <TextInput 
                    placeholder="Ingresa la edad"
                    placeholderTextColor = 'white'
                    keyboardType = 'numeric'
                    color = 'white'
                    style = {styles.input}
                    onChangeText={(e) => leerInput(e, 'edad')}
                    />
                <TextInput 
                    placeholder="Ingresa la foto"
                    placeholderTextColor = 'white'
                    color = 'white'
                    style = {styles.input}
                    onChangeText={(e) => leerInput(e, 'foto')}
                    />
                <TouchableOpacity
                    style={styles.boton}
                    onPress={enviarInfo}>
                    <Text>ENVIAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    granCaja: {
      flex: 1,
      backgroundColor: '#610B4B',
      alignItems: 'center'
    },
    texto: {
        fontSize: 30,
        color: 'white',
        textDecorationLine: 'underline',
        marginTop: 10,
        fontWeight: 'bold'
    },
    formulario: {
        width: '100%',
        alignItems: 'center'

    },
    input: {
        width: '60%',
        height: 60,
        backgroundColor: 'red',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        textDecorationLine: 'none'
    },
    boton: {
        backgroundColor: 'yellow',
        paddingVertical: 5,
        paddingHorizontal: 30,
        fontSize: 20,
        marginTop: 30
    }
  });

export default Formulario