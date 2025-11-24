import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Image,KeyboardAvoidingView,Platform} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = () => {

    if (usuario.trim() === '' || senha.trim() === '') {
      setErro('Digite seu nome de usuário e senha');
      return;
    }

    if (usuario === 'KaiqueVale08' && senha === 'kaique123') {
      setErro('');
      navigation.navigate('Home' as never);
    } else {
      setErro('Nome de usuário ou senha incorretos');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
    >
      <View style={styles.loginBox}>

        {/* LOGO */}
        <Image
          source={require('../../assets/logo-icone.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.p}>Entre e continue sua aventura.</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#ccc" style={styles.icon} />
          <TextInput
            placeholder="Usuário"
            placeholderTextColor="#aaa"
            style={styles.input}
            value={usuario}
            onChangeText={setUsuario}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#ccc" style={styles.icon} />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        {/* MENSAGEM DE ERRO */}
        {erro ? <Text style={styles.errorText}>{erro}</Text> : null}

        <Text
          style={styles.forgotPassword}
          onPress={() => navigation.navigate('Senha' as never)}
        >
          Esqueceu sua senha?
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>
          Não possui uma conta?{' '}
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate('Cadastro' as never)}
          >
            Cadastre-se
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

loginBox: {
  backgroundColor: '#000',
  margin: 20,
  marginTop: -70,
  borderRadius: 12,
  padding: 20,
  justifyContent: 'center',
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
  marginBottom: 12,
},

p: {
  color: '#fff',
  fontSize: 16,
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

errorText: {
  color: '#ff4444',
  textAlign: 'center',
  marginBottom: 10,
  fontWeight: 'bold',
},

forgotPassword: {
  color: '#ccc',
  textAlign: 'right',
  marginBottom: 15,
  fontWeight: 'bold',
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

registerText: {
  color: '#ccc',
  textAlign: 'center',
  marginTop: 15,
},

linkText: {
  color: '#AD00FF',
  fontWeight: 'bold',
},
});
