import React from "react";
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

// IMPORTS PARA TIPAR A NAVEGAÇÃO
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";

// TIPO DA NAVEGAÇÃO PRA ESSA TELA
type PerfilNavigationProp = NativeStackNavigationProp<RootStackParamList, "Perfil">;

export default function Perfil() {
  const navigation = useNavigation<PerfilNavigationProp>();

  return (
    <View style={styles.container}>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* CARD DO PERFIL */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>KA</Text>
          </View>

          <View>
            <Text style={styles.profileName}>KaiqueVale08</Text>
            <Text style={styles.profileLevel}>Nível 42</Text>
            <Text style={styles.profileXP}>XP</Text>

            {/* BARRA DE XP */}
            <View style={styles.xpBar}>
              <View style={styles.xpFill} />
            </View>

            <Text style={styles.xpNumbers}>7500/10000</Text>
          </View>
        </View>

        {/* SEÇÃO DE ESTATÍSTICAS */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Ionicons name="game-controller-outline" size={28} color="#b400ff" />
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Jogos</Text>
          </View>

          <View style={styles.statItem}>
            <Ionicons name="time-outline" size={28} color="#4dacff" />
            <Text style={styles.statNumber}>342</Text>
            <Text style={styles.statLabel}>Horas</Text>
          </View>

          <View style={styles.statItem}>
            <Ionicons name="trophy-outline" size={28} color="#ffcc00" />
            <Text style={styles.statNumber}>156</Text>
            <Text style={styles.statLabel}>Conquistas</Text>
          </View>
        </View>

        {/* SEÇÃO DE ATIVIDADE RECENTE */}
        <Text style={styles.sectionTitle}>Atividade Recente</Text>

        <View style={styles.activityCard}>
          <Text style={styles.activityTitle}>Dave the Diver</Text>
          <Text style={styles.activityDesc}>Jogou por 3h</Text>
          <Text style={styles.activityTime}>Há 2 dias</Text>
        </View>

        <View style={styles.activityCard}>
          <Text style={styles.activityTitle}>Counter-Strike 2</Text>
          <Text style={styles.activityDesc}>Nova conquista desbloqueada</Text>
          <Text style={styles.activityTime}>Há 5 horas</Text>
        </View>

        <View style={styles.activityCard}>
          <Text style={styles.activityTitle}>Battlefield 4</Text>
          <Text style={styles.activityDesc}>Comprou o jogo</Text>
          <Text style={styles.activityTime}>Ontem</Text>
        </View>

        {/* BOTÕES */}
        <TouchableOpacity
          style={styles.settingsButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Lista")}
        >
          <Ionicons name="heart-outline" size={22} color="#fff" />
          <Text style={styles.settingsText}>Lista de Desejos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.settingsButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Config")}
        >
          <Ionicons name="settings-outline" size={22} color="#fff" />
          <Text style={styles.settingsText}>Configurações da Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Login")}
        >
          <Ionicons name="log-out-outline" size={22} color="#ff4d4d" />
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>

      {/* BARRA INFERIOR*/}
      <SafeAreaView style={styles.bottomSafeArea}>
        <View style={styles.bottomBar}>

          <TouchableOpacity
            style={styles.tabItem}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons name="home-outline" size={28} color="#8a8a8a" />
            <Text style={styles.tabLabel}>Início</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Loja")}
          >
            <Ionicons name="storefront-outline" size={26} color="#8a8a8a" />
            <Text style={styles.tabLabel}>Loja</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Biblioteca")}
          >
            <Ionicons name="library-outline" size={26} color="#8a8a8a" />
            <Text style={styles.tabLabel}>Biblioteca</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Perfil")}
          >
            <Ionicons name="person-circle-outline" size={28} color="#b400ff" />
            <Text style={[styles.tabLabel, styles.activeLabel]}>Perfil</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </View>
  );
}

/* ESTILOS */
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#000",
},

content: {
  paddingHorizontal: 16,
  marginTop: 10,
},

/* CARD DE PERFIL */
profileCard: {
  backgroundColor: "#0f0f0f",
  borderRadius: 18,
  padding: 20,
  flexDirection: "row",
  alignItems: "center",
},

avatar: {
  width: 70,
  height: 70,
  borderRadius: 50,
  backgroundColor: "#7b2cff",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 16,
},

avatarText: {
  color: "#fff",
  fontSize: 26,
  fontWeight: "700",
},

profileName: {
  color: "#fff",
  fontSize: 20,
  fontWeight: "700",
},

profileLevel: {
  color: "#aaa",
  fontSize: 14,
  marginTop: 2,
},

profileXP: {
  color: "#ccc",
  fontSize: 12,
  marginTop: 8,
},

/* BARRA DE XP */
xpBar: {
  width: 160,
  height: 10,
  borderRadius: 10,
  backgroundColor: "#333",
  marginTop: 4,
  overflow: "hidden",
},

xpFill: {
  width: "75%",
  height: "100%",
  backgroundColor: "#b400ff",
},

xpNumbers: {
  color: "#aaa",
  fontSize: 12,
  marginTop: 4,
},

/* SEÇÃO DE ESTATÍSTICAS */
statsRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 20,
  marginBottom: 10,
},

statItem: {
  width: "32%",
  backgroundColor: "#0f0f0f",
  borderRadius: 14,
  alignItems: "center",
  paddingVertical: 16,
},

statNumber: {
  color: "#fff",
  fontSize: 20,
  fontWeight: "700",
  marginTop: 6,
},

statLabel: {
  color: "#aaa",
  fontSize: 12,
},

/* SEÇÃO DE ATIVIDADE RECENTE */
sectionTitle: {
  color: "#fff",
  fontSize: 20,
  fontWeight: "700",
  marginTop: 16,
  marginBottom: 12,
},

activityCard: {
  backgroundColor: "#0f0f0f",
  padding: 16,
  borderRadius: 16,
  marginBottom: 14,
},

activityTitle: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "700",
},

activityDesc: {
  color: "#ccc",
  marginTop: 4,
},

activityTime: {
  color: "#777",
  marginTop: 6,
  fontSize: 12,
},

/* BOTÃO DE CONFIGURAÇÕES */
settingsButton: {
  backgroundColor: "#0f0f0f",
  padding: 16,
  borderRadius: 14,
  marginTop: 10,
  flexDirection: "row",
  alignItems: "center",
},

settingsText: {
  color: "#fff",
  marginLeft: 10,
  fontSize: 16,
},

/* BOTÃO DE SAIR */
logoutButton: {
  backgroundColor: "#0f0f0f",
  padding: 16,
  borderRadius: 14,
  marginTop: 12,
  flexDirection: "row",
  alignItems: "center",
},

logoutText: {
  color: "#ff4d4d",
  marginLeft: 10,
  fontSize: 16,
  fontWeight: "600",
},

/* BARRA INFERIOR */
bottomSafeArea: {
  backgroundColor: "transparent",
},

bottomBar: {
  height: 70,
  borderTopWidth: 1,
  borderTopColor: "#222",
  backgroundColor: "#000",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
},

tabItem: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
},

tabLabel: {
  fontSize: 12,
  marginTop: 4,
  color: "#8a8a8a",
},

activeLabel: {
  color: "#b400ff",
  fontWeight: "600",
},
});
