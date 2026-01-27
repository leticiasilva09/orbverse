import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro() {
  const navigation = useNavigation();

  const [username, setUsername] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [erro, setErro] = useState('');

  const handleRegister = async () => {
  // confere se algum campo ta vazio
  if (!username || !email || !password || !confirmPassword) {
    setErro('Preencha todos os campos');
    return;
  }

  // confere se a senha e a confirmação são iguais
  if (password !== confirmPassword) {
    setErro('As senhas não coincidem');
    return;
  }

  try {
    // cria um objeto com os dados do usuário
    const user = {
      username,
      email,
      password,
    };

    // salva os dados do usuário no AsyncStorage
    // os dados são convertidos para string usando JSON.stringify
    await AsyncStorage.setItem('@user', JSON.stringify(user));

    // limpa mensagens de erro, se tiver
    setErro('');

    // redireciona o usuário para a tela de login depois do cadastro
    navigation.navigate('Login' as never);

  } catch (error) {
    // pra caso ocorra algum erro ao salvar os dados
    setErro('Erro ao cadastrar usuário');
  }
};

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
    >

      <View style={styles.box}>

        {/* LOGO */}
        <Image source={require('../../assets/logo-icone.png')} style={styles.logo} />

        <Text style={styles.title}>Cadastro</Text>
        <Text style={styles.subtitle}>Crie sua conta e inicie sua jornada.</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#ccc" style={styles.icon} />
          <TextInput
            placeholder="Nome de usuário"
            placeholderTextColor="#aaa"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#ccc" style={styles.icon} />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#aaa"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#ccc" style={styles.icon} />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#ccc" style={styles.icon} />
          <TextInput
            placeholder="Confirmar senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* MENSAGEM DE ERRO */}
        {erro ? (
          <Text style={{ color: '#ff4444', textAlign: 'center', marginBottom: 10 }}>
            {erro}
          </Text>
        ) : null}

        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Já possui uma conta?{' '}
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate('Login' as never)}
          >
            Fazer login
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#000',
  justifyContent: 'center',
},

box: {
  backgroundColor: '#000',
  margin: 20,
  borderRadius: 12,
  padding: 20,
  justifyContent: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.3,
  shadowRadius: 5,
  marginTop: -50,
},

logo: {
  width: 110,
  height: 110,
  alignSelf: 'center',
  marginBottom: 20,
},

title: {
  color: '#fff',
  fontSize: 22,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 8,
},

subtitle: {
  color: '#fff',
  fontSize: 15,
  textAlign: 'center',
  marginBottom: 25,
},

inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#1a1a1a',
  borderRadius: 8,
  paddingHorizontal: 10,
  marginBottom: 15,
},

icon: {
  marginRight: 8,
},

input: {
  flex: 1,
  color: '#fff',
  height: 45,
},

button: {
  backgroundColor: '#AD00FF',
  paddingVertical: 12,
  borderRadius: 8,
  marginTop: 10,
},

buttonText: {
  color: '#fff',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 16,
},

loginText: {
  color: '#ccc',
  textAlign: 'center',
  marginTop: 15,
},

linkText: {
  color: '#AD00FF',
  fontWeight: 'bold',
},
});
