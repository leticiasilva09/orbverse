import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Favoritos() {
  return (
    <ScrollView style={styles.container}>

      {/* ITEM 1 */}
      <View style={styles.card}>
        <Image
          source={require("../../assets/red-dead.jpg")}
          style={styles.image}
        />

        <View style={styles.info}>
          <Text style={styles.gameTitle}>Red Dead Redemption 2</Text>
          <Text style={styles.studio}>Rockstar Games</Text>

          <View style={styles.ratingRow}>
            <Ionicons name="star" size={16} color="#b400ff" />
            <Text style={styles.rating}>4.9</Text>
          </View>

          <Text style={styles.price}>R$ 299,90</Text>
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>Comprar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.heartIcon}>
          <Ionicons name="heart" size={20} color="#b400ff" />
        </TouchableOpacity>
      </View>

      {/* ITEM 2 */}
      <View style={styles.card}>
        <Image
          source={require("../../assets/days-gone.png")}
          style={styles.image}
        />

        <View style={styles.info}>
          <Text style={styles.gameTitle}>Days Gone</Text>
          <Text style={styles.studio}>Bend Studio</Text>

          <View style={styles.ratingRow}>
            <Ionicons name="star" size={16} color="#b400ff" />
            <Text style={styles.rating}>4.8</Text>
          </View>

          <Text style={styles.price}>R$ 199,50</Text>
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>Comprar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.heartIcon}>
          <Ionicons name="heart" size={20} color="#b400ff" />
        </TouchableOpacity>
      </View>

      {/* ITEM 3 */}
      <View style={styles.card}>
        <Image
          source={require("../../assets/cyberpunk.jpg")}
          style={styles.image}
        />

        <View style={styles.info}>
          <Text style={styles.gameTitle}>Cyberpunk 2077</Text>
          <Text style={styles.studio}>CD PROJEKT RED</Text>

          <View style={styles.ratingRow}>
            <Ionicons name="star" size={16} color="#b400ff" />
            <Text style={styles.rating}>4.2</Text>
          </View>

          <Text style={styles.price}>R$ 199,90</Text>
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>Comprar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.heartIcon}>
          <Ionicons name="heart" size={20} color="#b400ff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    flex: 1,
    padding: 20,
  },

  card: {
    backgroundColor: "#181818",
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
    color: "#9ca3af",
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
    backgroundColor: "#222",
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
