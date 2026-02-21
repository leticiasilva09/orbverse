import React from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// IMPORTS DO MODO CLARO/ESCURO
import { useTheme } from "../context/ThemeContext";
import { darkColors, lightColors } from "../theme/colors";

export default function Senha() {
  const { theme } = useTheme();
  const colors = theme === "dark" ? darkColors : lightColors;

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >

      <View style={[styles.box, { backgroundColor: colors.background }]}>

        {/* LOGO */}
        <Image
          source={require('../../assets/logo-icone.png')}
          style={[
            styles.logo,
            theme === "light" && { tintColor: "#000" }
          ]}
        resizeMode="contain"
        />

        <Text style={[styles.title, { color: colors.text }]}>Esqueceu a senha?</Text>
        <Text style={[styles.subText, { color: colors.subtext }]}>
          Digite seu e-mail vinculado à conta.
        </Text>

        {/* INPUT */}
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
            placeholder="exemplo@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            style={[styles.input, { color: colors.text }]}
            placeholderTextColor={colors.subtext}
          />
        </View>

        {/* BOTÃO */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login" as never)}
        >
          <Text style={styles.buttonText}>Enviar código</Text>
        </TouchableOpacity>
        
      </View>
    </KeyboardAvoidingView>
  );
}

/* ESTILOS */
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#000",
  justifyContent: "center",
},

box: {
  marginHorizontal: 20,
  marginTop: -60,
  padding: 20,
  backgroundColor: "#000",
},

logo: {
  width: 110,
  height: 110,
  alignSelf: "center",
  marginBottom: 25,
},

title: {
  color: "#fff",
  fontSize: 22,
  fontWeight: "bold",
  textAlign: "center",
},

subText: {
  color: "#ccc",
  textAlign: "center",
  marginTop: 6,
  marginBottom: 25,
  fontSize: 15,
},

inputContainer: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#1a1a1a",
  borderRadius: 8,
  paddingHorizontal: 10,
  marginBottom: 18,
},

icon: {
  marginRight: 8,
},

input: {
  flex: 1,
  height: 45,
  color: "#fff",
},

button: {
  backgroundColor: '#7B2DFF',
  paddingVertical: 12,
  borderRadius: 8,
  marginTop: 5,
},

buttonText: {
  color: "#fff",
  fontWeight: "bold",
  textAlign: "center",
  fontSize: 16,
},
});

