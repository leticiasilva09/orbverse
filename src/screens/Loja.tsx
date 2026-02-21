import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, ImageBackground,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";

type LojaNavigationProp = NativeStackNavigationProp<RootStackParamList, "Loja">;

const Loja: React.FC = () => {
  const navigation = useNavigation<LojaNavigationProp>();

  return (
    <View style={styles.container}>

      {/* BARRA SUPERIOR */}
      <View style={styles.topBar}>
        <View style={styles.searchContainer}>
          <MaterialIcons name="search" size={18} color="#E8DFEF" style={styles.searchIcon} />
          <TextInput
            placeholder="Buscar jogos..."
            placeholderTextColor="#E8DFEF"
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity style={styles.bellButton} activeOpacity={0.7}>
          <MaterialIcons name="filter-list" size={22} color="#E8DFEF" />
        </TouchableOpacity>
      </View>

      {/* CATEGORIAS DOS JOGOS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
          style={{ maxHeight: 40 }}
        >

      {["Promoções", "Aventura", "FPS", "RPG", "Indie", "Corrida", "Esportes"].map((cat, index) => {
        const isSelected = cat === "Promoções";

        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              isSelected && {
                backgroundColor: "#7B2DFF",
              }
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                isSelected && { color: "#fff" }
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        );
      })}
      </ScrollView>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>

        {/* TEXTO PRINCIPAL */}
        <Text style={[styles.sectionTitle, { marginTop: 10 }]}>Ofertas Especiais</Text>
        <Text style={styles.sectionSubtitle}>Economize até 50% nos melhores jogos</Text>

        <View style={styles.grid}>

          {/* CARD 1 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/party-animals.jpg')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Party Animals</Text>

                <Text style={styles.verticalCardOldPrice}>R$ 64,90</Text>

                <View style={styles.priceRow}>
                  <TouchableOpacity style={styles.buyButton}>
                    <MaterialIcons name="shopping-cart" size={14} color="#fff" style={{ marginRight: 6 }} />
                    <Text style={styles.buyButtonText}>R$ 34,90</Text>
                  </TouchableOpacity>

                  <Text style={styles.verticalCardDiscount}>-30%</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 2 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/hff.webp')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Human Fall Flat</Text>

                <Text style={styles.verticalCardOldPrice}>R$ 67,90</Text>

                <View style={styles.priceRow}>
                  <TouchableOpacity style={styles.buyButton}>
                    <MaterialIcons name="shopping-cart" size={14} color="#fff" style={{ marginRight: 6 }} />
                    <Text style={styles.buyButtonText}>R$ 37,90</Text>
                  </TouchableOpacity>

                  <Text style={styles.verticalCardDiscount}>-30%</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 3 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/it-takes-two.webp')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>It Takes Two</Text>

                <Text style={styles.verticalCardOldPrice}>R$ 199,00</Text>

                <View style={styles.priceRow}>
                  <TouchableOpacity style={styles.buyButton}>
                    <MaterialIcons name="shopping-cart" size={14} color="#fff" style={{ marginRight: 6 }} />
                    <Text style={styles.buyButtonText}>R$ 159,00</Text>
                  </TouchableOpacity>

                  <Text style={styles.verticalCardDiscount}>-40%</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 4 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/sf6.webp')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Street Fighter 6</Text>

                <Text style={styles.verticalCardOldPrice}>R$ 179,00</Text>

                <View style={styles.priceRow}>
                  <TouchableOpacity style={styles.buyButton}>
                    <MaterialIcons name="shopping-cart" size={14} color="#fff" style={{ marginRight: 6 }} />
                    <Text style={styles.buyButtonText}>R$ 139,00</Text>
                  </TouchableOpacity>

                  <Text style={styles.verticalCardDiscount}>-40%</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 5 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/doom.png')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>DOOM Eternal</Text>

                <Text style={styles.verticalCardOldPrice}>R$ 149,00</Text>

                <View style={styles.priceRow}>
                  <TouchableOpacity style={styles.buyButton}>
                    <MaterialIcons name="shopping-cart" size={14} color="#fff" style={{ marginRight: 6 }} />
                    <Text style={styles.buyButtonText}>R$ 109,00</Text>
                  </TouchableOpacity>

                  <Text style={styles.verticalCardDiscount}>-40%</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 6 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/resident-evil4.webp')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Resident Evil 4</Text>

                <Text style={styles.verticalCardOldPrice}>R$ 169,00</Text>

                <View style={styles.priceRow}>
                  <TouchableOpacity style={styles.buyButton}>
                    <MaterialIcons name="shopping-cart" size={14} color="#fff" style={{ marginRight: 6 }} />
                    <Text style={styles.buyButtonText}>R$ 129,00</Text>
                  </TouchableOpacity>

                  <Text style={styles.verticalCardDiscount}>-40%</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 7 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/cuphead.png')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Cuphead</Text>

                <Text style={styles.verticalCardOldPrice}>R$ 36,90</Text>

                <View style={styles.priceRow}>
                  <TouchableOpacity style={styles.buyButton}>
                    <MaterialIcons name="shopping-cart" size={14} color="#fff" style={{ marginRight: 6 }} />
                    <Text style={styles.buyButtonText}>R$ 26,90</Text>
                  </TouchableOpacity>

                  <Text style={styles.verticalCardDiscount}>-10%</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 8 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/raft.jpg')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Raft</Text>

                <Text style={styles.verticalCardOldPrice}>R$ 36,99</Text>

                <View style={styles.priceRow}>
                  <TouchableOpacity style={styles.buyButton}>
                    <MaterialIcons name="shopping-cart" size={14} color="#fff" style={{ marginRight: 6 }} />
                    <Text style={styles.buyButtonText}>R$ 16,99</Text>
                  </TouchableOpacity>

                  <Text style={styles.verticalCardDiscount}>-20%</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 9 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/spider-man2.jpg')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Spider-Man 2</Text>

                <Text style={styles.verticalCardOldPrice}>R$ 249,90</Text>

                <View style={styles.priceRow}>
                  <TouchableOpacity style={styles.buyButton}>
                    <MaterialIcons name="shopping-cart" size={14} color="#fff" style={{ marginRight: 6 }} />
                    <Text style={styles.buyButtonText}>R$ 199,90</Text>
                  </TouchableOpacity>

                  <Text style={styles.verticalCardDiscount}>-50%</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 10 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/gtav.png')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Grand Theft Auto V</Text>

                <Text style={styles.verticalCardOldPrice}>R$ 149,90</Text>

                <View style={styles.priceRow}>
                  <TouchableOpacity style={styles.buyButton}>
                    <MaterialIcons name="shopping-cart" size={14} color="#fff" style={{ marginRight: 6 }} />
                    <Text style={styles.buyButtonText}>R$ 99,90</Text>
                  </TouchableOpacity>

                  <Text style={styles.verticalCardDiscount}>-50%</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 11 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/castle-crashers.jpg')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Castle Crashers</Text>

                <Text style={styles.verticalCardOldPrice}>R$ 24,99</Text>

                <View style={styles.priceRow}>
                  <TouchableOpacity style={styles.buyButton}>
                    <MaterialIcons name="shopping-cart" size={14} color="#fff" style={{ marginRight: 6 }} />
                    <Text style={styles.buyButtonText}>R$ 14,99</Text>
                  </TouchableOpacity>

                  <Text style={styles.verticalCardDiscount}>-10%</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 12 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/pico-park2.jpg')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Pico Park 2</Text>

                <Text style={styles.verticalCardOldPrice}>R$ 22,90</Text>

                <View style={styles.priceRow}>
                  <TouchableOpacity style={styles.buyButton}>
                    <MaterialIcons name="shopping-cart" size={14} color="#fff" style={{ marginRight: 6 }} />
                    <Text style={styles.buyButtonText}>R$ 12,90</Text>
                  </TouchableOpacity>

                  <Text style={styles.verticalCardDiscount}>-10%</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

        </View>

      </ScrollView>

      {/* BARRA INFERIOR */}
      <SafeAreaView style={styles.bottomSafeArea}>
        <View style={styles.bottomBar}>

          <TouchableOpacity style={styles.tabItem} activeOpacity={0.8} onPress={() => navigation.navigate("Home")}>
            <MaterialIcons name="home" size={28} color="#8a8a8a" />
            <Text style={styles.tabLabel}>Início</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem} activeOpacity={0.8} onPress={() => navigation.navigate("Loja")}>
            <MaterialIcons name="storefront" size={26} color="#7B2DFF" />
            <Text style={[styles.tabLabel, styles.activeLabel]}>Loja</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem} activeOpacity={0.8} onPress={() => navigation.navigate("Biblioteca")}>
            <MaterialIcons name="menu-book" size={26} color="#8a8a8a" />
            <Text style={styles.tabLabel}>Biblioteca</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem} activeOpacity={0.8} onPress={() => navigation.navigate("Perfil")}>
            <MaterialIcons name="account-circle" size={28} color="#8a8a8a" />
            <Text style={styles.tabLabel}>Perfil</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>

    </View>
  );
};

export default Loja;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#15121C' },

topBar: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 18,
  paddingTop: 10,
  paddingBottom: 12,
  justifyContent: 'space-between',
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
  color: '#fff',
  fontSize: 14,
  flex: 1,
  paddingVertical: 0,
},

bellButton: { padding: 6 },

/* CATEGORIAS */
categoryScroll: {
  paddingLeft: 16,
  marginBottom: 14,
},

categoryButton: {
  backgroundColor: '#1D1A25',
  paddingVertical: 6,
  paddingHorizontal: 14,
  borderRadius: 8,
  marginRight: 10,
  height: 32,
  justifyContent: 'center',
},

categoryText: {
  color: '#fff',
  fontWeight: '600',
  fontSize: 13,
},
  
content: { flex: 1, paddingHorizontal: 16 },

sectionTitle: {
  fontSize: 22,
  fontWeight: '700',
  color: '#fff',
  marginBottom: 10,
  marginTop: 10,
},

sectionSubtitle: {
  color: '#E8DFEF',
  fontSize: 13,
  marginTop: -6,
  marginBottom: 20,
  marginLeft: 2,
},

horizontalScroll: { marginBottom: 20 },

horizontalCard: {
  width: 260,
  height: 150,
  borderRadius: 20,
  backgroundColor: '#111',
  overflow: 'hidden',
  marginRight: 16,
},

horizontalCardBg: { flex: 1, justifyContent: 'flex-end' },

horizontalCardImage: { borderRadius: 20 },

horizontalCardContent: {
  padding: 10,
  backgroundColor: 'rgba(0,0,0,0.5)',
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
},

horizontalCardTitle: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '700',
},

horizontalPrice: { color: '#b400ff', marginTop: 4, fontWeight: '700' },

grid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginBottom: 40,
},

verticalCard: {
  width: '48%',
  height: 240,
  borderRadius: 18,
  backgroundColor: '#111',
  overflow: 'hidden',
  marginBottom: 18,
},

verticalCardBg: { flex: 1, justifyContent: 'flex-end' },

verticalCardImage: { borderRadius: 18 },

verticalCardContent: {
  padding: 10,
  backgroundColor: 'rgba(0, 0, 0, 0.55)',
  borderBottomLeftRadius: 18,
  borderBottomRightRadius: 18,
},

verticalCardTitle: {
  color: '#fff',
  fontSize: 15,
  fontWeight: '700',
},

verticalCardOldPrice: {
  color: '#E8DFEF',
  fontSize: 12,
  textDecorationLine: 'line-through',
  marginTop: -2,
},

verticalCardDiscount: {
  color: '#ff4040',
  fontSize: 13,
  fontWeight: '900',
  marginLeft: 6,
},

priceRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 4,
},

buyButton: {
  backgroundColor: '#7B2DFF',
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderRadius: 12,
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 6,
},

buyButtonText: {
  color: '#fff',
  fontWeight: '700',
  fontSize: 13,
},

bottomSafeArea: { backgroundColor: 'transparent' },

bottomBar: {
  height: 70,
  borderTopWidth: 1,
  borderTopColor: '#4A4456',
  backgroundColor: '#15121C',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingBottom: 8,
  paddingTop: 6,
},

tabItem: { flex: 1, alignItems: 'center', justifyContent: 'center' },

tabLabel: { fontSize: 12, marginTop: 4, color: '#8a8a8a' },

activeLabel: { color: '#7B2DFF', fontWeight: '600' },
});
