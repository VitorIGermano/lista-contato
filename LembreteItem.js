import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Cores from '../cores/cores';
import Medidas from '../medidas/medidas';

const LembreteItem = (props) =>{
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.chave)}>
            <View style={styles.itemNaLista}>
                <Text>{props.lembrete}</Text>
            </View>
        </TouchableOpacity>
    );
}
    const styles = StyleSheet.create ({
        itemNaLista: {
            padding: Medidas.p,
            //backgroundColor: '#CCC',
            borderBottomColor: Cores.accent,
            borderWidth: 1,
            marginBottom: Medidas.mb2,
            borderRadius: 8
         }
    });

export default LembreteItem;