import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, ImageBackground, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

// Navegação tipada
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";

type BibliotecaNavProp = NativeStackNavigationProp<RootStackParamList,"Biblioteca">;

export default function Biblioteca() {
  const navigation = useNavigation<BibliotecaNavProp>();

  return (
    <View style={styles.container}>
      {/* Barra Superior */}
      <View style={styles.topBar}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#888" style={styles.searchIcon} />
          <TextInput
            placeholder="Buscar na biblioteca..."
            placeholderTextColor="#666"
            style={styles.searchInput}
          />
        </View>
      </View>

      {/* Conteúdo */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <Text style={styles.sectionTitle}>12 jogos</Text>
        <Text style={styles.storageLabel}>200 GB usados de 500 GB</Text>

        {/* Barra de armazenamento */}
        <View style={styles.storageBarBg}>
          <View style={styles.storageBarFill} />
        </View>

        {/* Grid dos jogos */}
        <View style={styles.grid}>
          
          {/* CARD 1 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require("../../assets/battlefield4.png")}
              style={styles.verticalCardBg}
              imageStyle={styles.verticalImage}
            >
              <View style={styles.cardFooter}>
                <Text style={styles.gameName}>Battlefield 4</Text>
                <TouchableOpacity style={styles.playButton}>
                  <Ionicons name="checkmark-circle-outline" size={16} color="#fff" style={{ marginRight: 6 }} />
                  <Text style={styles.installText}>Instalado</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 2 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require("../../assets/mortal-kombat.jpg")}
              style={styles.verticalCardBg}
              imageStyle={styles.verticalImage}
            >
              <View style={styles.cardFooter}>
                <Text style={styles.gameName}>Mortal Kombat X</Text>
                <TouchableOpacity style={styles.playButton}>
                  <Ionicons name="checkmark-circle-outline" size={16} color="#fff" style={{ marginRight: 6 }} />
                  <Text style={styles.installText}>Instalado</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 3 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require("../../assets/cs.jpg")}
              style={styles.verticalCardBg}
              imageStyle={styles.verticalImage}
            >
              <View style={styles.cardFooter}>
                <Text style={styles.gameName}>Counter-Strike 2</Text>
                <TouchableOpacity style={styles.playButton}>
                  <Ionicons name="checkmark-circle-outline" size={16} color="#fff" style={{ marginRight: 6 }} />
                  <Text style={styles.installText}>Instalado</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
          
          {/* CARD 4 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require("../../assets/dave-the-diver.webp")}
              style={styles.verticalCardBg}
              imageStyle={styles.verticalImage}
            >
              <View style={styles.cardFooter}>
                <Text style={styles.gameName}>Dave the Diver</Text>
                <TouchableOpacity style={styles.playButton}>
                  <Ionicons name="checkmark-circle-outline" size={16} color="#fff" style={{ marginRight: 6 }} />
                  <Text style={styles.installText}>Instalado</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
          
          {/* CARD 5 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require("../../assets/gta-vi.jpg")}
              style={styles.verticalCardBg}
              imageStyle={styles.verticalImage}
            >
              <View style={styles.cardFooter}>
                <Text style={styles.gameName}>GTA VI</Text>

                <TouchableOpacity
                  style={styles.installButton}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("Instalacao")}
                >
                  <Ionicons name="download-outline" size={16} color="#fff" />
                  <Text style={styles.installText}>Instalar</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 6 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require("../../assets/elden-ring.jpg")}
              style={styles.verticalCardBg}
              imageStyle={styles.verticalImage}
            >
              <View style={styles.cardFooter}>
                <Text style={styles.gameName}>Elden Ring</Text>
                <TouchableOpacity style={styles.installButton}>
                  <Ionicons name="download-outline" size={16} color="#fff" />
                  <Text style={styles.installText}>Instalar</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 7 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require("../../assets/the-forest.webp")}
              style={styles.verticalCardBg}
              imageStyle={styles.verticalImage}
            >
              <View style={styles.cardFooter}>
                <Text style={styles.gameName}>The Forest</Text>
                <TouchableOpacity style={styles.installButton}>
                  <Ionicons name="download-outline" size={16} color="#fff" />
                  <Text style={styles.installText}>Instalar</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 8 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require("../../assets/sv.png")}
              style={styles.verticalCardBg}
              imageStyle={styles.verticalImage}
            >
              <View style={styles.cardFooter}>
                <Text style={styles.gameName}>Stardew Valley</Text>
                <TouchableOpacity style={styles.installButton}>
                  <Ionicons name="download-outline" size={16} color="#fff" />
                  <Text style={styles.installText}>Instalar</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 9 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require("../../assets/the-quarry.webp")}
              style={styles.verticalCardBg}
              imageStyle={styles.verticalImage}
            >
              <View style={styles.cardFooter}>
                <Text style={styles.gameName}>The Quarry</Text>
                <TouchableOpacity style={styles.installButton}>
                  <Ionicons name="download-outline" size={16} color="#fff" />
                  <Text style={styles.installText}>Instalar</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 10 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require("../../assets/street-fighter.png")}
              style={styles.verticalCardBg}
              imageStyle={styles.verticalImage}
            >
              <View style={styles.cardFooter}>
                <Text style={styles.gameName}>Street Fighter V</Text>
                <TouchableOpacity style={styles.installButton}>
                  <Ionicons name="download-outline" size={16} color="#fff" />
                  <Text style={styles.installText}>Instalar</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 11 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require("../../assets/tekken7.jpg")}
              style={styles.verticalCardBg}
              imageStyle={styles.verticalImage}
            >
              <View style={styles.cardFooter}>
                <Text style={styles.gameName}>Tekken 7</Text>
                <TouchableOpacity style={styles.installButton}>
                  <Ionicons name="download-outline" size={16} color="#fff" />
                  <Text style={styles.installText}>Instalar</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 12 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require("../../assets/tekken8.jpg")}
              style={styles.verticalCardBg}
              imageStyle={styles.verticalImage}
            >
              <View style={styles.cardFooter}>
                <Text style={styles.gameName}>Tekken 8</Text>
                <TouchableOpacity style={styles.installButton}>
                  <Ionicons name="download-outline" size={16} color="#fff" />
                  <Text style={styles.installText}>Instalar</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>

      {/* Barra inferior */}
      <SafeAreaView style={styles.bottomSafeArea}>
        <View style={styles.bottomBar}>
          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons name="home-outline" size={28} color="#8a8a8a" />
            <Text style={styles.tabLabel}>Início</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => navigation.navigate("Loja")}
          >
            <Ionicons name="storefront-outline" size={26} color="#8a8a8a" />
            <Text style={styles.tabLabel}>Loja</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => navigation.navigate("Biblioteca")}
          >
            <Ionicons name="library-outline" size={26} color="#b400ff" />
            <Text style={[styles.tabLabel, styles.activeLabel]}>Biblioteca</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => navigation.navigate("Perfil")}
          >
            <Ionicons name="person-circle-outline" size={28} color="#8a8a8a" />
            <Text style={styles.tabLabel}>Perfil</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

/* ESTILOS */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },

topBar: {
  flexDirection: "row",
  paddingHorizontal: 18,
  paddingTop: 10,
  paddingBottom: 12,
},

searchContainer: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#0f0f0f",
  borderRadius: 22,
  paddingHorizontal: 12,
  height: 38,
  flex: 1,
  borderWidth: 1,
  borderColor: "#222",
},

searchIcon: { marginRight: 6 },

searchInput: {
  color: "#fff",
  fontSize: 14,
  flex: 1,
},

content: { paddingHorizontal: 16, marginTop: 4 },

sectionTitle: {
  color: "#fff",
  fontSize: 22,
  fontWeight: "700",
  marginTop: 10,
},

storageLabel: {
  color: "#ccc",
  fontSize: 13,
  marginBottom: 6,
},

storageBarBg: {
  width: "100%",
  height: 10,
  backgroundColor: "#222",
  borderRadius: 10,
  marginBottom: 18,
},

storageBarFill: {
  width: "36%",
  height: 10,
  backgroundColor: "#b400ff",
  borderRadius: 10,
},

grid: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
},

verticalCard: {
  width: "48%",
  height: 220,
  borderRadius: 18,
  backgroundColor: "#111",
  marginBottom: 18,
  overflow: "hidden",
},

verticalCardBg: {
  flex: 1,
  justifyContent: "flex-end",
},

verticalImage: {
  borderRadius: 18,
},

cardFooter: {
  padding: 10,
  backgroundColor: "rgba(0,0,0,0.45)",
},

gameName: {
  color: "#fff",
  fontWeight: "700",
  fontSize: 15,
  marginBottom: 12,
},

installButton: {
  backgroundColor: "#b400ff",
  borderRadius: 10,
  paddingHorizontal: 10,
  paddingVertical: 6,
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-start",
  gap: 6,
},

playButton: {
  backgroundColor: "#6200ff",
  borderRadius: 10,
  paddingHorizontal: 10,
  paddingVertical: 6,
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-start",
  gap: 6,
},

installText: { color: "#fff", fontWeight: "600", fontSize: 12 },

priceFree: {
  color: "#9d4dff",
  fontWeight: "700",
  fontSize: 14,
},

pricePaid: {
  color: "#ff4ddd",
  fontWeight: "700",
  fontSize: 14,
},

bottomSafeArea: { backgroundColor: "transparent" },

bottomBar: {
  height: 70,
  borderTopWidth: 1,
  borderTopColor: "#222",
  backgroundColor: "#000",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  paddingBottom: 8,
  paddingTop: 6,
},

tabItem: { flex: 1, alignItems: "center" },

tabLabel: { fontSize: 12, color: "#8a8a8a", marginTop: 4 },

activeLabel: { color: "#b400ff", fontWeight: "600" },
});
