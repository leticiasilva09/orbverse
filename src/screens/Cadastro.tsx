import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
    >

      <View style={styles.box}>

        {/* LOGO */}
        <Image
          source={require('../../assets/logo-icone.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>Cadastro</Text>
        <Text style={styles.subtitle}>Crie sua conta e inicie sua jornada.</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#ccc" style={styles.icon} />
          <TextInput
            placeholder="Nome de usuário"
            placeholderTextColor="#aaa"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#ccc" style={styles.icon} />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#aaa"
            style={styles.input}
            keyboardType="email-address"
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
            placeholder="Confirmar senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home' as never)}
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
