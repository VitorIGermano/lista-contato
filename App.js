import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

import ContatoItem from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';

export default function App() {
    const [contatos, setContatos] = useState('');
    const [contadorContatos, setContadorcontatos] = useState(10);

    const removerContato = (keyToRemove) => {
        setContatos (contatos => {
            return contatos.filter((contato) => {
                return contato.key !== keyToRemove
            })
        });
    };

    const adicionarContato = (nome, telefone) => {
        setContatos((contatos) => {
            setContadorcontatos(contadorContatos + 2);
            return [
                ...contatos,
                {
                    key: contadorContatos.toString(),
                    nome: nome,
                    telefone: telefone
                }
            ];
        } );
    }

    return (
        <View style={styles.telaPrincipalView}>
            <View>
                <ContatoInput onAdicionarContato={adicionarContato} />
            </View>
            <FlatList
                data={contatos}
                renderItem={
                    contato => (
                        <ContatoItem
                            chave={contato.item.key}
                            nome={contato.item.nome}
                            telefone={contato.item.telefone}
                            onDelete={removerContato}
                        />
                    )
                }
            />
        </View>
    );
}


const styles = StyleSheet.create({
  telaPrincipalView: {
      padding: 50
  }
});