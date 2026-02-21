import React, { useState, useEffect } from 'react';
import { View,Text,TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

// IMPORTS DO MODO CLARO/ESCURO
import { useTheme } from "../context/ThemeContext";
import { darkColors, lightColors } from "../theme/colors";

export default function Login() {
  const { theme } = useTheme();
  const colors = theme === "dark" ? darkColors : lightColors;

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // vai conferir se já existe usuário logado
  useEffect(() => {
    // observa mudanças de autenticação do Firebase
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        // se existir usuário autenticado, pula o login
        navigation.navigate('Home' as never);
      }
    });

    // encerra o listener ao desmontar a tela
    return unsubscribe;
  }, []);

  const handleLogin = async () => {
    // confere se os campos estão vazios
    if (email.trim() === '' || senha.trim() === '') {
      setErro('Digite seu e-mail e senha');
      return;
    }

    try {
      // realiza login no Firebase Auth usando e-mail e senha
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        senha
      );

      // salva apenas informações básicas da sessão localmente
      await AsyncStorage.setItem(
        '@loggedUser',
        JSON.stringify({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
        })
      );

      setErro('');

      // redireciona para a Home
      navigation.navigate('Home' as never);

    } catch (error: any) {
      // trata erros comuns do Firebase
      if (error.code === 'auth/user-not-found') {
        setErro('Usuário não encontrado');
      } else if (error.code === 'auth/wrong-password') {
        setErro('Senha incorreta');
      } else if (error.code === 'auth/invalid-email') {
        setErro('E-mail inválido');
      } else {
        setErro('Erro ao realizar login');
      }
    }
  };


  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
    >
      <View style={[styles.loginBox, { backgroundColor: colors.background }]}>

        {/* LOGO */}
        <Image
          source={require('../../assets/logo-icone.png')}
          style={[
            styles.logo,
            theme === "light" && { tintColor: "#000" }
          ]}
        resizeMode="contain"
        />

        <Text style={[styles.title, { color: colors.text }]}>Bem-vindo!</Text>
        <Text style={[styles.p, { color: colors.subtext }]}>Entre e continue sua aventura.</Text>

        {/* EMAIL */}
        <View
          style={[
            styles.inputContainer,
            {
              backgroundColor: colors.inputBg,
              borderColor: colors.border,
              borderWidth: 1,
            },
          ]}
        >
          <MaterialIcons name="email" size={20} color={colors.subtext} style={styles.icon} />
          <TextInput
            placeholder="E-mail"
            style={[styles.input, { color: colors.text }]}
            placeholderTextColor={colors.subtext}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* SENHA */}
        <View
          style={[
            styles.inputContainer,
            {
              backgroundColor: colors.inputBg,
              borderColor: colors.border,
              borderWidth: 1,
            },
          ]}
        >
          <MaterialIcons name="lock-outline" size={20} color={colors.subtext} style={styles.icon} />

          <TextInput
            placeholder="Senha"
            style={[styles.input, { color: colors.text }]}
            placeholderTextColor={colors.subtext}
            secureTextEntry={!showPassword}
            value={senha}
            onChangeText={setSenha}
          />

          {/* BOTÃO DE OLHO */}
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <MaterialIcons
            name={showPassword ? "visibility" : "visibility-off"}
            size={22}
            color={colors.subtext}
          />
          </TouchableOpacity>

        </View>

        {/* MENSAGEM DE ERRO */}
        {erro ? <Text style={styles.errorText}>{erro}</Text> : null}

        <Text
          style={[styles.forgotPassword, { color: colors.subtext }]}
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

        <Text style={[styles.registerText, { color: colors.subtext }]}>
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
  backgroundColor: '#15121C',
  justifyContent: 'center',
},

loginBox: {
  backgroundColor: '#15121C',
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
  color: '#E8DFEF',
  fontSize: 16,
  textAlign: 'center',
  marginBottom: 25,
},

inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#1D1A25',
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
  color: '#E8DFEF',
  textAlign: 'right',
  marginBottom: 15,
  fontWeight: 'bold',
},

button: {
  backgroundColor: '#7B2DFF',
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
  color: '#E8DFEF',
  textAlign: 'center',
  marginTop: 15,
},

linkText: {
  color: '#7B2DFF',
  fontWeight: 'bold',
},
});
