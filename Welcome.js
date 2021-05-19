import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'

const Welcome = () => {
    return (
        <View style={styles.granCaja}>
            <Image source={require('./assets/amigos.jpg')} style={styles.foto}/>
            <Text style={styles.titulo}>BIENVENIDOS A MI APP DE AMIGOS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    granCaja: {
      flex: 1,
      backgroundColor: '#0B4C5F',
      justifyContent: 'center',
      alignItems: 'center'
    },
    titulo: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center'
    },
    foto: {
        width: '50%',
        height: '30%',
        borderRadius: 200,
        marginBottom: 20
    }
  });

export default Welcome