import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView,} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// IMPORTS DO MODO CLARO/ESCURO
import { useTheme } from "../context/ThemeContext";
import { darkColors, lightColors } from "../theme/colors";

export default function Favoritos() {

  const { theme } = useTheme();
  const colors = theme === "dark" ? darkColors : lightColors;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >

      {/* ITEM 1 */}
      <View
        style={[
          styles.card,
          { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 },
        ]}
      >
        <Image
          source={require("../../assets/red-dead.jpg")}
          style={styles.image}
        />

        <View style={styles.info}>
          <Text style={[styles.gameTitle, { color: colors.text }]}>Red Dead Redemption 2</Text>
          <Text style={[styles.studio, { color: colors.subtext }]}>Rockstar Games</Text>

          <View style={styles.ratingRow}>
            <MaterialIcons name="star" size={16} color="#7B2DFF" />
            <Text style={[styles.rating, { color: colors.text }]}>4.9</Text>
          </View>

          <Text style={[styles.price, { color: colors.text }]}>R$ 299,90</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.addButton,
            {
              backgroundColor: colors.card,
              borderColor: colors.border,
              borderWidth: 1,
            },
          ]}
        >
          <Text style={[styles.addText, { color: colors.text }]}>Comprar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.heartIcon}>
          <MaterialIcons name="favorite" size={20} color="#7B2DFF" />
        </TouchableOpacity>
      </View>

      {/* ITEM 2 */}
      <View
        style={[
          styles.card,
          { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 },
        ]}
      >
        <Image
          source={require("../../assets/days-gone.png")}
          style={styles.image}
        />

        <View style={styles.info}>
          <Text style={[styles.gameTitle, { color: colors.text }]}>Days Gone</Text>
          <Text style={[styles.studio, { color: colors.subtext }]}>Bend Studio</Text>

          <View style={styles.ratingRow}>
            <MaterialIcons name="star" size={16} color="#7B2DFF" />
            <Text style={[styles.rating, { color: colors.text }]}>4.8</Text>
          </View>

          <Text style={[styles.price, { color: colors.text }]}>R$ 199,50</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.addButton,
            {
              backgroundColor: colors.card,
              borderColor: colors.border,
              borderWidth: 1,
            },
          ]}
        >
          <Text style={[styles.addText, { color: colors.text }]}>Comprar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.heartIcon}>
          <MaterialIcons name="favorite" size={20} color="#7B2DFF" />
        </TouchableOpacity>
      </View>

      {/* ITEM 3 */}
      <View
        style={[
          styles.card,
          { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 },
        ]}
      >
        <Image
          source={require("../../assets/cyberpunk.jpg")}
          style={styles.image}
        />

        <View style={styles.info}>
          <Text style={[styles.gameTitle, { color: colors.text }]}>Cyberpunk 2077</Text>
          <Text style={[styles.studio, { color: colors.subtext }]}>CD PROJEKT RED</Text>

          <View style={styles.ratingRow}>
            <MaterialIcons name="star" size={16} color="#7B2DFF" />
            <Text style={[styles.rating, { color: colors.text }]}>4.2</Text>
          </View>

          <Text style={[styles.price, { color: colors.text }]}>R$ 199,90</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.addButton,
            {
              backgroundColor: colors.card,
              borderColor: colors.border,
              borderWidth: 1,
            },
          ]}
        >
          <Text style={[styles.addText, { color: colors.text }]}>Comprar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.heartIcon}>
          <MaterialIcons name="favorite" size={20} color="#7B2DFF" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
container: {
  backgroundColor: "#15121C",
  flex: 1,
  padding: 20,
},

card: {
  backgroundColor: "#1D1A25",
  borderRadius: 12,
  flexDirection: "row",
  padding: 12,
  marginBottom: 20,
  position: "relative",
  alignItems: "center",
},

image: {
  width: 90,
  height: 90,
  borderRadius: 8,
  marginRight: 12,
},

info: {
  flex: 1,
},

gameTitle: {
  color: "#fff",
  fontSize: 14,
  fontWeight: "700",
},

studio: {
  color: "#E8DFEF",
  fontSize: 12,
  marginTop: 2,
},

ratingRow: {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 6,
},

rating: {
  color: "#fff",
  marginLeft: 4,
  fontSize: 12,
},

price: {
  color: "#fff",
  fontSize: 14,
  fontWeight: "700",
  marginTop: 8,
},

addButton: {
  backgroundColor: "#1D1A25",
  borderWidth: 1,
  borderColor: "#444",
  paddingVertical: 8,
  paddingHorizontal: 14,
  borderRadius: 8,
  alignSelf: "center",
},

addText: {
  color: "#fff",
  fontSize: 12,
},

heartIcon: {
  position: "absolute",
  right: 12,
  top: 12,
},
});
