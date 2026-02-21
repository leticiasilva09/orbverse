import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, ImageBackground, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

// Navegação tipada
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";

// IMPORTS DO MODO CLARO/ESCURO
import { useTheme } from "../context/ThemeContext";
import { darkColors, lightColors } from "../theme/colors";

type BibliotecaNavProp = NativeStackNavigationProp<RootStackParamList,"Biblioteca">;

export default function Biblioteca() {
  const navigation = useNavigation<BibliotecaNavProp>();

    const { theme } = useTheme();
    const colors = theme === "dark" ? darkColors : lightColors;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      
      {/* BARRA SUPERIOR */}
      <View style={styles.topBar}>
      <View style={[styles.searchContainer, { backgroundColor: colors.inputBg }]}>
          <MaterialIcons name="search" size={18} color="#888" style={styles.searchIcon} />
          <TextInput
            placeholder="Buscar na biblioteca..."
            placeholderTextColor={theme === "dark" ? "#666" : "#999"}
            style={[styles.searchInput, { color: colors.text }]}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>12 jogos</Text>
        <Text style={[styles.storageLabel, { color: colors.subtext }]}>200 GB usados de 500 GB</Text>

        <View
          style={[
            styles.storageBarBg,
            { backgroundColor: colors.border }
          ]}
        >
          <View style={styles.storageBarFill} />
        </View>

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
                  <MaterialIcons name="check-circle-outline" size={16} color="#fff" style={{ marginRight: 6 }} />
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
                  <MaterialIcons name="check-circle-outline" size={16} color="#fff" style={{ marginRight: 6 }} />
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
                  <MaterialIcons name="check-circle-outline" size={16} color="#fff" style={{ marginRight: 6 }} />
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
                  <MaterialIcons name="check-circle-outline" size={16} color="#fff" style={{ marginRight: 6 }} />
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
                  <MaterialIcons name="download" size={16} color="#fff" />
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
                  <MaterialIcons name="download" size={16} color="#fff" />
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
                  <MaterialIcons name="download" size={16} color="#fff" />
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
                  <MaterialIcons name="download" size={16} color="#fff" />
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
                  <MaterialIcons name="download" size={16} color="#fff" />
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
                  <MaterialIcons name="download" size={16} color="#fff" />
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
                  <MaterialIcons name="download" size={16} color="#fff" />
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
                  <MaterialIcons name="download" size={16} color="#fff" />
                  <Text style={styles.installText}>Instalar</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>

      {/* Barra inferior */}
      <SafeAreaView style={styles.bottomSafeArea}>
        <View
          style={[
            styles.bottomBar,
            {
              backgroundColor: colors.background,
              borderTopColor: colors.border,
            },
          ]}
        >
          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => navigation.navigate("Home")}
          >
            <MaterialIcons name="home" size={28} color="#8a8a8a" />
            <Text style={[styles.tabLabel, { color: theme === "dark" ? "#8a8a8a" : "#555" }]}>Início</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => navigation.navigate("Loja")}
          >
            <MaterialIcons name="storefront" size={26} color="#8a8a8a" />
            <Text style={[styles.tabLabel, { color: theme === "dark" ? "#8a8a8a" : "#555" }]}>Loja</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => navigation.navigate("Biblioteca")}
          >
            <MaterialIcons name="storage" size={26} color="#7B2DFF" />
            <Text style={[styles.tabLabel, styles.activeLabel]}>Biblioteca</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => navigation.navigate("Perfil")}
          >
            <MaterialIcons name="account-circle" size={28} color="#8a8a8a" />
            <Text style={[styles.tabLabel, { color: theme === "dark" ? "#8a8a8a" : "#555" }]}>Perfil</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

/* ESTILOS */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#15121C" },

topBar: {
  flexDirection: "row",
  paddingHorizontal: 18,
  paddingTop: 10,
  paddingBottom: 12,
},

searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#1D1A25',
  borderRadius: 22,
  paddingHorizontal: 12,
  height: 42,
  flex: 1,
  marginRight: 12,
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
  marginBottom: 4,
},

storageLabel: {
  color: "#E8DFEF",
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
  backgroundColor: "#BA09A5",
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
  backgroundColor: "#BA09A5",
  borderRadius: 10,
  paddingHorizontal: 10,
  paddingVertical: 6,
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-start",
  gap: 6,
},

playButton: {
  backgroundColor: "#7B2DFF",
  borderRadius: 10,
  paddingHorizontal: 10,
  paddingVertical: 6,
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-start",
  gap: 6,
},

installText: { color: "#fff", fontWeight: "600", fontSize: 12 },

bottomSafeArea: { backgroundColor: "transparent" },

bottomBar: {
  height: 70,
  borderTopWidth: 1,
  borderTopColor: "#4A4456",
  backgroundColor: "#15121C",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  paddingBottom: 8,
  paddingTop: 6,
},

tabItem: { flex: 1, alignItems: "center" },

tabLabel: { fontSize: 12, color: "#8a8a8a", marginTop: 4 },

activeLabel: { color: "#7B2DFF", fontWeight: "600" },
});
