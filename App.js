import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, Button } from 'react-native';



export default function App() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [contatos, setContatos] = useState('');
    const [contadorcontatos, setContadorcontatos] = useState(10);

    const capturarNome = (nome) => {
        setNome(nome)
    };

    const capturarTelefone = (telefone) => {
        setTelefone(telefone)
    };

    const adicionarContato = () => {
        setContatos((contatos) => {
            setContadorcontatos(contadorcontatos + 2);
            return [
                ...contatos,
                {
                    key: contadorcontatos.toString(),
                    nome: nome,
                    telefone: telefone
                }
            ];
        } );

        setNome('');
        setTelefone('');
    }

    return (
        <View style={styles.telaPrincipalView}>
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
                    onPress={adicionarContato}
                />
            </View>
            <FlatList
                data={contatos}
                renderItem={
                    lembrete => (
                        <View style={styles.itemNaLista}>
                            <Text>#{lembrete.item.key}</Text>
                            <Text>Nome: {lembrete.item.nome}</Text>
                            <Text>Telefone: {lembrete.item.telefone}</Text>
                        </View>
                    )
                }
            />
        </View>
    );  
}

const styles = StyleSheet.create({
  telaPrincipalView: {
      padding: 50
  },
  contatoView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center"
  },
  nomeInputText: {
      width: '80%',
      borderBottomColor: 'blue',
      borderBottomWidth: 1,
      padding: 2,
      marginBottom: 20
  },
  telefoneInputText: {
      width: '80%',
      borderBottomColor: 'blue',
      borderBottomWidth: 1,
      padding: 2
  },
  itemNaLista: {
      padding: 12,
      backgroundColor: '#E0FFFF',
      borderColor: '#000',
      borderWidth: 1,
      marginBottom: 8,
      borderRadius: 8
  }
});
