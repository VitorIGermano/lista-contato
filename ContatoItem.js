import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Cartao from './Cartao';
import Cores from '../cores/cores';
import Medidas from '../medidas/medidas';

const ContatoItem = (props) =>{
    return (
        <TouchableOpacity onLongPress={props.onDelete.bind(this, props.chave)}>
            <View style={styles.itemNaLista}>
                <Cartao estilos = {styles.cartao}>
                    <Text>Nome: {props.nome}</Text>
                    <Text>Telefone: {props.telefone}</Text>
                </Cartao>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    itemNaLista: {
        padding: Medidas.p,
        //backgroundColor: '#E0FFFF',
        borderColor: Cores.primary,
        borderWidth: 1,
        marginBottom: Medidas.mb2,
        borderRadius: 8
    },
    cartao: {
        width: Medidas.w,
        maxWidth: Medidas.mw,
        display: 'flex',
        justifyContent: 'space-around'
    }
});

export default ContatoItem;