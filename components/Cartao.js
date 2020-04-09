import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Cartao = (props) => {
    return(
        <View style={{...estilos.cartao, ...props.estilos}}>
            {props.children}
        </View>
    )

}

const estilos = StyleSheet.create({
    cartao: {
        shadowColor: 'black',
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.32,
        backgroundColor: '#E0FFFF',
        elevation: 4,
        padding: 12,
        borderRadius: 8
        },
});

export default Cartao;