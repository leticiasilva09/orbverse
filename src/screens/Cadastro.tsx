import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

export default function Cadastro() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [erro, setErro] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    // confere se algum campo está vazio
    if ( !email || !password || !confirmPassword) {
      setErro('Preencha todos os campos');
      return;
    }

    // confere se a senha e a confirmação são iguais
    if (password !== confirmPassword) {
      setErro('As senhas não coincidem');
      return;
    }

    try {
      // cria o usuário no Firebase Auth usando email e senha
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password
      );

      // salva informações extras localmente (não sensíveis)
      // o Firebase não possui "username" por padrão
      await AsyncStorage.setItem(
        '@userProfile',
        JSON.stringify({
          email,
          uid: userCredential.user.uid,
        })
      );

      // limpa mensagem de erro
      setErro('');

      // redireciona para login após cadastro
      navigation.navigate('Login' as never);

    } catch (error: any) {
      // trata erros mais comuns do Firebase
      if (error.code === 'auth/email-already-in-use') {
        setErro('Este e-mail já está em uso');
      } else if (error.code === 'auth/invalid-email') {
        setErro('E-mail inválido');
      } else if (error.code === 'auth/weak-password') {
        setErro('A senha deve ter pelo menos 6 caracteres');
      } else {
        setErro('Erro ao cadastrar usuário');
      }
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
            secureTextEntry={!showPassword}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />

          {/* BOTÃO DE OLHO */}
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={22}
              color="#ccc"
            />
          </TouchableOpacity>
          
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#ccc" style={styles.icon} />
          <TextInput
            placeholder="Confirmar senha"
            placeholderTextColor="#aaa"
            secureTextEntry={!showPassword}
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

        {/* BOTÃO DE OLHO */}
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={22}
            color="#ccc"
          />
        </TouchableOpacity>

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
