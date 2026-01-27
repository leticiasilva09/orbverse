import React, { useState, useEffect } from 'react';
import { View,Text,TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const navigation = useNavigation();

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // vai conferir se já existe usuário logado
  useEffect(() => {
    async function checkLoggedUser() {
      try {
        // busca no AsyncStorage se existe um usuário logado
        const loggedUser = await AsyncStorage.getItem('@loggedUser');

        if (loggedUser) {
          // se já existir usuário logado, pula o login
          navigation.navigate('Home' as never);
        }
      } catch (error) {
        // pra caso ocorra erro ao acessar o AsyncStorage
        console.log('Erro ao verificar sessão');
      }
    }

    // executa a função ao carregar a tela
    checkLoggedUser();
  }, []);

  const handleLogin = async () => {
    // confere se os campos de usuário ou senha estão vazios
    if (usuario.trim() === '' || senha.trim() === '') {
      setErro('Digite seu nome de usuário e senha');
      return;
    }

    try {
      // busca os dados do usuário cadastrado no AsyncStorage
      const userData = await AsyncStorage.getItem('@user');

      // caso não exista nenhum usuário cadastrado
      if (!userData) {
        setErro('Nenhuma conta encontrada. Cadastre-se primeiro.');
        return;
      }

      // vai converter os dados salvos de string para objeto
      const user = JSON.parse(userData);

      // confere se o usuário e a senha digitados são válidos
      if (usuario === user.username && senha === user.password) {
        setErro('');

        // salva o usuário como logado no AsyncStorage
        await AsyncStorage.setItem(
          '@loggedUser',
          JSON.stringify(user)
        );

        // redireciona o usuário para a tela principal
        navigation.navigate('Home' as never);
      } else {
        // caso os dados estejam incorretos
        setErro('Nome de usuário ou senha incorretos');
      }

    } catch (error) {
      // caso ocorra erro durante o processo de login
      setErro('Erro ao realizar login');
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

        {/* USUÁRIO */}
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

        {/* SENHA */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#ccc" style={styles.icon} />

          <TextInput
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry={!showPassword} // ⬅ ALTERADO
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
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
