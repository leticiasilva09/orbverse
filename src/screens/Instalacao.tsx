import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";

// IMPORTS DO MODO CLARO/ESCURO
import { useTheme } from "../context/ThemeContext";
import { darkColors, lightColors } from "../theme/colors";

type InstalacaoNavigation = NativeStackNavigationProp<RootStackParamList,"Instalacao">;

export default function Instalacao() {
  const navigation = useNavigation<InstalacaoNavigation>();

  const { theme } = useTheme();
  const colors = theme === "dark" ? darkColors : lightColors;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.background }
      ]}
    >

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* TOPO DO PC + STATUS */}
        <View
          style={[
            styles.pcBox,
            {
              backgroundColor: colors.card,
              borderColor: colors.border,
            },
          ]}
        >
          <MaterialIcons name="computer" size={32} color={colors.text} />

          <View style={{ marginLeft: 12 }}>
            <Text style={[styles.pcName, { color: colors.text }]}>DESKTOP-EGSVQCT</Text>
            <Text style={[styles.lastUpdate, { color: colors.subtext }]}>Última atualização: Ontem às 19:47 </Text>

            <View style={styles.onlineTag}>
              <View style={styles.greenDot} />
              <Text style={styles.onlineText}>Online</Text>
            </View>
          </View>

          <View style={styles.storageBox}>
            <Text style={[styles.storageTitle, { color: colors.subtext }]}>Armazenamento</Text>
            <Text style={[styles.storageValue, { color: colors.text }]}>600 GB livres</Text>
          </View>
        </View>

        {/* CAPA DO JOGO */}
        <View style={styles.gameContainer}>
          <Image 
            source={require("../../assets/gta-vi.jpg")}
            style={styles.gameImage}
          />

          <Text style={[styles.gameTitle, { color: colors.text }]}>Grand Theft Auto VI</Text>
          <Text style={[styles.gameInfo, { color: colors.subtext }]}>160 GB • Rockstar Games</Text>

          <Text style={[styles.gameDescription, { color: colors.text }]}>
            Grand Theft Auto VI é um jogo de ação em mundo aberto da Rockstar 
            Games que marca o retorno à icônica Vice City, agora totalmente 
            renovada com um clima imersivo, veículos dinâmicos e narrativa 
            criminal profunda. Um novo sistema de clima, IA aprimorada e 
            exploração emergente transformam cada momento numa nova história.
            {"\n\n"}
            O jogo traz gráficos de nova geração, física avançada, IA mais 
            inteligente e um mapa expansivo repleto de interações, missões, 
            eventos dinâmicos e atividades alternativas. No multiplayer 
            GTA Online 2, jogadores podem criar gangues, participar de heists 
            e competir em desafios que evoluem com atualizações frequentes.
          </Text>
        </View>

        {/* BOTÃO DE INSTALAR */}
        <TouchableOpacity style={styles.installButton} activeOpacity={0.8}>
          <Text style={styles.installButtonText}>Instalar no PC</Text>
        </TouchableOpacity>

      </ScrollView>

    </View>
  );
}


/* ESTILOS */

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#15121C",
  paddingHorizontal: 16,
},

pcBox: {
  backgroundColor: "#1D1A25",
  borderRadius: 14,
  padding: 12,
  marginTop: 12,
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#1a1a1a",
},

pcName: {
  color: "#fff",
  fontWeight: "700",
  fontSize: 14,
},

lastUpdate: {
  color: "#aaa",
  fontSize: 10,
  marginBottom: 2,
},

 onlineTag: {
  flexDirection: "row",
  alignItems: "center",
  },

greenDot: {
  width: 6,
  height: 6,
  backgroundColor: "#00a040",
  borderRadius: 50,
  marginRight: 5,
},

onlineText: {
  color: "#00a040",
  fontSize: 10,
  fontWeight: 600,
},

storageBox: {
  marginLeft: "auto",
  alignItems: "flex-end",
},

storageTitle: {
  color: "#999",
  fontSize: 10,
},

storageValue: {
  color: "#fff",
  marginTop: 2,
  fontWeight: "600",
  fontSize: 12,
},

/* CONTEÚDO DO JOGO */
gameContainer: {
  alignItems: "center",
  marginTop: 30,
},

gameImage: {
  width: 200,
  height: 260,
  borderRadius: 14,
  marginBottom: 14,
},

gameTitle: {
  fontSize: 22,
  fontWeight: "800",
  color: "#fff",
  marginTop: 6,
},

gameInfo: {
  color: "#aaa",
  marginTop: 4,
},

gameDescription: {
  marginTop: 20,
  color: "#E8DFEF",
  textAlign: "center",
  paddingHorizontal: 6,
  lineHeight: 20,
  fontSize: 14,
},

/* BOTÃO INSTALAR */
installButton: {
  backgroundColor: "#7B2DFF",
  paddingVertical: 14,
  borderRadius: 14,
  marginTop: 24,
  marginBottom: 50,
  alignItems: "center",
},

installButtonText: {
  color: "#fff",
  fontWeight: "700",
  fontSize: 16,
},
});
