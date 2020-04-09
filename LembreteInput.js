import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import Cores from '../cores/cores';
import Medidas from '../medidas/medidas';

const LembreteInput = (props) => {
    const [lembrete, setLembrete] = useState('');
    const capturarLembrete = (lembrete) => {
        setLembrete(lembrete);
    }
    return (
        <View style={styles.lembreteView}>
            {/* usuário irá inserir lembrestes aqui*/}
            <TextInput 
                placeholder="Lembrar..."
                style={styles.lembreteInputText}
                onChangeText={capturarLembrete}
                value={lembrete}
            />
         <Button
            title="+"
            onPress={() => props.onAdicionarLembrete(lembrete)}
            />
      </View>
    );
}

const styles = StyleSheet.create ({
    lembreteView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Medidas.mb2
      },
      lembreteInputText: {
        width: Medidas.w2,
        borderBottomColor: Cores.primary,
        borderBottomWidth: 1,
        padding: Medidas.p2
      }
});

export default LembreteInput;