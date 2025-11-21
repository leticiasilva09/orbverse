import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.loginBox}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.p}>Entre e continue sua aventura.</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#ccc" style={styles.icon} />
          <TextInput
            placeholder="Usuário"
            placeholderTextColor="#aaa"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#ccc" style={styles.icon} />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#ccc" style={styles.icon} />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <Text
          style={styles.forgotPassword}
          onPress={() => navigation.navigate('Senha' as never)}
        >
          Esqueceu sua senha?
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home' as never)}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>
          Não tem conta?{' '}
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate('Cadastro' as never)}
          >
            Cadastre-se
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  loginBox: {
    flex: 1,
    backgroundColor: '#000',
    margin: 20,
    borderRadius: 12,
    padding: 20,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
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

  forgotPassword: {
    color: '#ccc',
    textAlign: 'right',
    marginBottom: 15,
    marginRight: 4,
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
