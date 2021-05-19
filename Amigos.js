import React, { useEffect, useState } from 'react'
import {View, StyleSheet, Text, SafeAreaView, StatusBar, Image} from 'react-native'

const Amigos = () => {
    const [amigos, setAmigos] = useState([])

    useEffect(() => {
        fetch('https://appprueba2021.herokuapp.com/api/amigo')
        .then(res => res.json())
        .then(data => setAmigos(data.respuesta))
    }, [])

    return (
        <>
        <StatusBar barStyle="light-content" />
        <View style={styles.granCaja}>
            <Text style={styles.texto}>AMIGOS</Text>
            {amigos.map(amigo => (
                <View key={amigo._id} style={styles.amigo}>
                    <Image source={{uri: amigo.foto}} style={styles.foto} />
                    <Text style={styles.textoAmigo}>{amigo.nombre} ({amigo.edad})</Text>
                </View>
            ))}
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    granCaja: {
      flex: 1,
      backgroundColor: '#61210B',
      alignItems: 'center'
    },
    amigo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },  
    texto: {
        fontSize: 30,
        color: 'white'
    },
    textoAmigo: {
        color: 'white',
        fontSize: 25
    },
    foto: {
        width: 50,
        height: 50,
        marginRight: 20,
    }
  });

export default Amigos