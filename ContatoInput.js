import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native'
import Cores from '../cores/cores';
import Medidas from '../medidas/medidas';

const ContatoInput = (props) => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');

    const capturarNome = (nome) => {
        setNome(nome)
    };

    const capturarTelefone = (telefone) => {
        setTelefone(telefone)
    };

    return (
        <View>
            <View style={styles.contatoView}>
                <TextInput
                    placeholder="Nome"
                    style={styles.nomeInputText}
                    onChangeText={capturarNome}
                    value={nome}
                />
            </View>
            <View style={styles.contatoView}>
                <TextInput
                    placeholder="Telefone"
                    style={styles.telefoneInputText}
                    onChangeText={capturarTelefone}
                    value={telefone}
                />
                <Button
                    title="+"
                    color={Cores.accent}
                    onPress={() => {
                        props.onAdicionarContato(nome, telefone)

                        setNome('');
                        setTelefone('');
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contatoView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Medidas.mb2
    },
    nomeInputText: {
        width: '80%',
        borderBottomColor: Cores.primary,
        borderBottomWidth: 1,
        padding: Medidas.p2,
        marginBottom: 20
    },
    telefoneInputText: {
        width: Medidas.w2,
        borderBottomColor: Cores.primary,
        borderBottomWidth: 1,
        padding: Medidas.p2
    }
});

export default ContatoInput;