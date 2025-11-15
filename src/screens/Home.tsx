import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// IMPORTS PARA TIPAR A NAVEGAÇÃO
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";

// TIPO DA NAVEGAÇÃO PRA ESSA TELA
type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const Home: React.FC = () => {

  // NAVEGAÇÃO TIPADA
  const navigation = useNavigation<HomeNavigationProp>();

  return (
    <View style={styles.container}>

      {/* Barra superior */}
      <View style={styles.topBar}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#888" style={styles.searchIcon} />
          <TextInput
            placeholder="Pesquisar..."
            placeholderTextColor="#666"
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity style={styles.bellButton} activeOpacity={0.7}>
          <Ionicons name="notifications-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* CONTEÚDO SCROLLÁVEL */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>

        {/* Título da seção */}
        <Text style={styles.sectionTitle}>Em Destaque</Text>

        {/* Lista horizontal */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >

          {/* CARD 1 */}
          <View style={styles.card}>
            <ImageBackground
              source={require('../../assets/pubg-battlegrounds.webp')}
              imageStyle={styles.cardImage}
              style={styles.cardBg}
            >
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>PUBG: BATTLEGROUNDS</Text>
                <Text style={styles.cardDescription}>
                  Jogue em mapas extensos e lute para ser o último sobrevivente
                </Text>

                <TouchableOpacity style={styles.cardButton}>
                  <Text style={styles.buttonText}>Baixar Grátis</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 2 */}
          <View style={styles.card}>
            <ImageBackground
              source={require('../../assets/overcooked.jpg')}
              imageStyle={styles.cardImage}
              style={styles.cardBg}
            >
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Overcooked! 2</Text>
                <Text style={styles.cardDescription}>
                  Monte sua equipe de chefs em um jogo cooperativo local ou on-line
                </Text>

                <TouchableOpacity style={[styles.cardButton, { backgroundColor: '#6200ff' }]}>
                  <Ionicons name="cart" size={16} color="#fff" style={{ marginRight: 6 }} />
                  <Text style={styles.buttonText}>R$ 79,90</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 3 */}
          <View style={styles.card}>
            <ImageBackground
              source={require('../../assets/ea-sports.webp')}
              imageStyle={styles.cardImage}
              style={styles.cardBg}
            >
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>EA SPORTS FC™ 26</Text>
                <Text style={styles.cardDescription}>
                  Jogue do seu jeito com uma experiência de jogabilidade reformulada
                </Text>

                <TouchableOpacity style={[styles.cardButton, { backgroundColor: '#6200ff' }]}>
                  <Ionicons name="cart" size={16} color="#fff" style={{ marginRight: 6 }} />
                  <Text style={styles.buttonText}>R$ 299,00</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

        </ScrollView>

        {/* --------------------- SESSÃO LANÇAMENTOS --------------------- */}
        <Text style={[styles.sectionTitle, { marginTop: 10 }]}>Lançamentos</Text>

        <View style={styles.grid}>

          {/* CARD 1 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/arc-raiders.png')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>ARC Raiders</Text>
                <Text style={styles.verticalCardPrice}>R$ 89,90</Text>
                <Text style={styles.verticalCardOldPrice}>R$ 149,90</Text>
                <Text style={styles.verticalCardDiscount}>-60%</Text>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 2 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/gta-vi.jpg')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Grand Theft Auto VI</Text>
                <Text style={styles.verticalCardPrice}>R$ 599,90</Text>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 3 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/megabonk.jpg')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Megabonk</Text>
                <Text style={styles.verticalCardPrice}>R$ 39,90</Text>
                <Text style={styles.verticalCardOldPrice}>R$ 69,90</Text>
                <Text style={styles.verticalCardDiscount}>-30%</Text>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 4 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/battlefield.jpg')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Battlefield Redsec</Text>
                <Text style={[styles.verticalCardPrice, { color: '#9d4dff' }]}>Grátis</Text>
              </View>
            </ImageBackground>
          </View>

        </View>

        {/* --------------------- SESSÃO POPULARES --------------------- */}
        <Text style={[styles.sectionTitle, { marginTop: -10 }]}>Populares</Text>

        <View style={styles.grid}>

          {/* Hollow Knight */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/hollow-knight.webp')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Hollow Knight</Text>
                <Text style={styles.verticalCardPrice}>R$ 49,90</Text>
              </View>
            </ImageBackground>
          </View>

          {/* Sons of The Forest */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/sof.jpg')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}>
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Sons of the Forest</Text>
                <Text style={styles.verticalCardPrice}>R$ 99,90</Text>
                <Text style={styles.verticalCardOldPrice}>R$ 139,90</Text>
                <Text style={styles.verticalCardDiscount}>-40%</Text>
              </View>
            </ImageBackground>
          </View>

        </View>

      </ScrollView>

      {/* Barra inferior fixa */}
      <SafeAreaView style={styles.bottomSafeArea}>
        <View style={styles.bottomBar}>

          <TouchableOpacity 
            style={styles.tabItem} 
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons name="home-outline" size={28} color="#b400ff" />
            <Text style={[styles.tabLabel, styles.activeLabel]}>Início</Text>
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
            <Ionicons name="person-circle-outline" size={28} color="#8a8a8a" />
            <Text style={styles.tabLabel}>Perfil</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>

    </View>
  );
};

export default Home;

/* ------------------ ESTILOS ------------------ */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

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
    backgroundColor: '#0f0f0f',
    borderRadius: 22,
    paddingHorizontal: 12,
    height: 38,
    flex: 1,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#222',
  },

  searchIcon: {
    marginRight: 6,
  },

  searchInput: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
    paddingVertical: 0,
  },

  bellButton: {
    padding: 6,
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
    marginTop: 10,
  },

  horizontalScroll: {
    marginBottom: 30,
  },

  card: {
    width: 300,
    height: 170,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#111',
    marginRight: 16,
  },

  cardBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  cardImage: {
    borderRadius: 20,
  },

  cardContent: {
    padding: 14,
    backgroundColor: 'rgba(0,0,0,0.45)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  cardDescription: {
    marginTop: 4,
    color: '#ddd',
    fontSize: 12,
  },

  cardButton: {
    marginTop: 10,
    backgroundColor: '#b400ff',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },

  bottomSafeArea: {
    backgroundColor: 'transparent',
  },

  bottomBar: {
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#222',
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 8,
    paddingTop: 6,
  },

  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabLabel: {
    fontSize: 12,
    marginTop: 4,
    color: '#8a8a8a',
  },

  activeLabel: {
    color: '#b400ff',
    fontWeight: '600',
  },

  /* ------------------ ESTILOS DE LANÇAMENTOS E POPULARES ------------------ */

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 40,
  },

  verticalCard: {
    width: '48%',
    height: 230,
    borderRadius: 18,
    backgroundColor: '#111',
    overflow: 'hidden',
    marginBottom: 18,
  },

  verticalCardBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  verticalCardImage: {
    borderRadius: 18,
  },

  verticalCardContent: {
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
     height: 100,
     justifyContent: 'center',
  },

  verticalCardTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },

  verticalCardPrice: {
    color: '#ff4ddd',
    fontSize: 14,
    fontWeight: '700',
  },

  verticalCardOldPrice: {
    color: '#bbb',
    fontSize: 12,
    textDecorationLine: 'line-through',
    marginTop: -2,
  },

  verticalCardDiscount: {
    color: '#ff4040',
    fontSize: 12,
    fontWeight: '700',
  },
});
