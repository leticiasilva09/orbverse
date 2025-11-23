import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Senha() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.box}>

        {/* LOGO */}
        <Image
          source={require("../../assets/logo-icone.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>Esqueceu a senha?</Text>
        <Text style={styles.subText}>
          Digite seu e-mail vinculado à conta.
        </Text>

        {/* INPUT */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="mail-outline"
            size={20}
            color="#ccc"
            style={styles.icon}
          />
          <TextInput
            placeholder="exemplo@email.com"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
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
    </View>
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
    backgroundColor: "#AD00FF",
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

