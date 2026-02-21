import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";

type InstalacaoNavigation = NativeStackNavigationProp<RootStackParamList,"Instalacao">;

export default function Instalacao() {
  const navigation = useNavigation<InstalacaoNavigation>();

  return (
    <View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* TOPO DO PC + STATUS */}
        <View style={styles.pcBox}>
          <MaterialIcons name="computer" size={32} color="#fff" />

          <View style={{ marginLeft: 12 }}>
            <Text style={styles.pcName}>DESKTOP-EGSVQCT</Text>
            <Text style={styles.lastUpdate}>Última atualização: Ontem às 19:47 </Text>

            <View style={styles.onlineTag}>
              <View style={styles.greenDot} />
              <Text style={styles.onlineText}>Online</Text>
            </View>
          </View>

          <View style={styles.storageBox}>
            <Text style={styles.storageTitle}>Armazenamento</Text>
            <Text style={styles.storageValue}>600 GB livres</Text>
          </View>
        </View>

        {/* CAPA DO JOGO */}
        <View style={styles.gameContainer}>
          <Image 
            source={require("../../assets/gta-vi.jpg")}
            style={styles.gameImage}
          />

          <Text style={styles.gameTitle}>Grand Theft Auto VI</Text>
          <Text style={styles.gameInfo}>160 GB • Rockstar Games</Text>

          <Text style={styles.gameDescription}>
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
  backgroundColor: "#00ff66",
  borderRadius: 50,
  marginRight: 5,
},

onlineText: {
  color: "#00ff66",
  fontSize: 10,
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
