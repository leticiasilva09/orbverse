import React from 'react';
import { Image } from 'react-native';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, ImageBackground,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

// IMPORTS PARA TIPAR A NAVEGAÇÃO
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";

// TIPO DA NAVEGAÇÃO PRA ESSA TELA
type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const Home: React.FC = () => {

  const navigation = useNavigation<HomeNavigationProp>();

  return (
    <View style={styles.container}>

      {/* BARRA SUPERIOR */}
    <View style={styles.topBar}>
      
      {/* LOGO */}
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* BARRA DE PESQUISA */}
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={18} color="#888" style={styles.searchIcon} />
        <TextInput
          placeholder="Pesquisar..."
          placeholderTextColor="#666"
          style={styles.searchInput}
        />
      </View>

      {/* SINO */}
      <TouchableOpacity style={styles.bellButton} activeOpacity={0.7}>
        <MaterialIcons name="notifications-none" size={22} color="#fff" />
      </TouchableOpacity>

    </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>

        {/* SEÇÃO EM DESTAQUE */}
        <Text style={styles.sectionTitle}>Em Destaque</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>

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

                <TouchableOpacity style={[styles.cardButton, { backgroundColor: '#7B2DFF' }]}>
                  <MaterialIcons name="shopping-cart" size={16} color="#fff" style={{ marginRight: 6 }} />
                  <Text style={styles.buttonText}>R$ 79,90</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 3 */}
          <View style={styles.card}>
            <ImageBackground
              source={require('../../assets/the-sims.jpg')}
              imageStyle={styles.cardImage}
              style={styles.cardBg}
            >
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>The Sims™ 4</Text>
                <Text style={styles.cardDescription}>
                  Crie e controle pessoas num mundo virtual onde não há regras
                </Text>

                <TouchableOpacity style={styles.cardButton}>
                  <Text style={styles.buttonText}>Baixar Grátis</Text>
                </TouchableOpacity>
              </View>

            </ImageBackground>
          </View>

          {/* CARD 4 */}
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

                <TouchableOpacity style={[styles.cardButton, { backgroundColor: '#7B2DFF' }]}>
                  <MaterialIcons name="shopping-cart" size={16} color="#fff" style={{ marginRight: 6 }} />
                  <Text style={styles.buttonText}>R$ 299,00</Text>
                </TouchableOpacity>
              </View>
              
            </ImageBackground>
          </View>

          {/* CARD 5 */}
          <View style={styles.card}>
            <ImageBackground
              source={require('../../assets/project-zomboid.webp')}
              imageStyle={styles.cardImage}
              style={styles.cardBg}
            >
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Project Zomboid</Text>
                <Text style={styles.cardDescription}>
                  Project Zomboid é o jogo definitivo de sobrevivência zumbi
                </Text>

                <TouchableOpacity style={[styles.cardButton, { backgroundColor: '#7B2DFF' }]}>
                  <MaterialIcons name="shopping-cart" size={16} color="#fff" style={{ marginRight: 6 }} />
                  <Text style={styles.buttonText}>R$ 59,99</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

        </ScrollView>

        {/* SEÇÃO DE LANÇAMENTOS */}
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

                <Text style={styles.verticalCardOldPrice}>R$ 149,90</Text>

                <View style={styles.priceRow}>
                  <TouchableOpacity style={styles.buyButton}>
                    <MaterialIcons name="shopping-cart" size={16} color="#fff" style={{ marginRight: 6 }} />
                    <Text style={styles.buyButtonText}>R$ 89,90</Text>
                  </TouchableOpacity>

                  <Text style={styles.verticalCardDiscount}>-60%</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 2 */}
          <TouchableOpacity 
            style={styles.verticalCard}
            onPress={() => navigation.navigate("Informacoes")}
            activeOpacity={0.8} // deixa mais bonito quando clica
          >
            <ImageBackground
              source={require('../../assets/gta-vi.jpg')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Grand Theft Auto VI</Text>

                <TouchableOpacity style={styles.buyButton}>
                  <MaterialIcons name="shopping-cart" size={16} color="#fff" style={{ marginRight: 6 }} />
                  <Text style={styles.buyButtonText}>R$ 599,90</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          {/* CARD 3 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/megabonk.jpg')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Megabonk</Text>

                <Text style={styles.verticalCardOldPrice}>R$ 69,90</Text>

                <View style={styles.priceRow}>
                  <TouchableOpacity style={styles.buyButton}>
                    <MaterialIcons name="shopping-cart" size={16} color="#fff" style={{ marginRight: 6 }} />
                    <Text style={styles.buyButtonText}>R$ 39,90</Text>
                  </TouchableOpacity>

                  <Text style={styles.verticalCardDiscount}>-30%</Text>
                </View>
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

                <TouchableOpacity style={styles.freeButton}>
                  <Text style={styles.freeButtonText}>Baixar Grátis</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

        </View>

        {/* SEÇÃO DE POPULARES */}
        <Text style={[styles.sectionTitle, { marginTop: -10 }]}>Populares</Text>

        <View style={styles.grid}>

          {/* CARD 1 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/dbd.jpg')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Dead by Daylight</Text>

                <TouchableOpacity style={styles.buyButton}>
                  <MaterialIcons name="shopping-cart" size={16} color="#fff" style={{ marginRight: 6 }} />
                  <Text style={styles.buyButtonText}>R$ R$ 62,90</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 2 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/sof.jpg')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Sons of the Forest</Text>

                <Text style={styles.verticalCardOldPrice}>R$ 139,90</Text>

                <View style={styles.priceRow}>
                  <TouchableOpacity style={styles.buyButton}>
                    <MaterialIcons name="shopping-cart" size={16} color="#fff" style={{ marginRight: 6 }} />
                    <Text style={styles.buyButtonText}>R$ 99,90</Text>
                  </TouchableOpacity>

                  <Text style={styles.verticalCardDiscount}>-40%</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 3 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/hollow-knight.webp')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Hollow Knight</Text>

                <TouchableOpacity style={styles.buyButton}>
                  <MaterialIcons name="shopping-cart" size={16} color="#fff" style={{ marginRight: 6 }} />
                  <Text style={styles.buyButtonText}>R$ 46,90</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* CARD 4 */}
          <View style={styles.verticalCard}>
            <ImageBackground
              source={require('../../assets/portal2.jpg')}
              imageStyle={styles.verticalCardImage}
              style={styles.verticalCardBg}
            >
              <View style={styles.verticalCardContent}>
                <Text style={styles.verticalCardTitle}>Portal 2</Text>

                <TouchableOpacity style={styles.buyButton}>
                  <MaterialIcons name="shopping-cart" size={16} color="#fff" style={{ marginRight: 6 }} />
                  <Text style={styles.buyButtonText}>R$ 32,99</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

        </View>

      </ScrollView>

      {/* BARRA INFERIOR */}
      <SafeAreaView style={styles.bottomSafeArea}>
        <View style={styles.bottomBar}>

          <TouchableOpacity 
            style={styles.tabItem}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Home")}
          >
            <MaterialIcons name="home" size={28} color="#7B2DFF" />
            <Text style={[styles.tabLabel, styles.activeLabel]}>Início</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.tabItem}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Loja")}
          >
            <MaterialIcons name="storefront" size={26} color="#8a8a8a" />
            <Text style={styles.tabLabel}>Loja</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.tabItem}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Biblioteca")}
          >
            <MaterialIcons name="menu-book" size={26} color="#8a8a8a" />
            <Text style={styles.tabLabel}>Biblioteca</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.tabItem}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Perfil")}
          >
            <MaterialIcons name="account-circle" size={28} color="#8a8a8a" />
            <Text style={styles.tabLabel}>Perfil</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>

    </View>
  );
};

export default Home;

/* ESTILOS */
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#15121C',
},

logo: {
  width: 100,
  height: 100,
  marginRight: 12,
},

topBar: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 18,
},

searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#1D1A25',
  borderRadius: 22,
  paddingHorizontal: 12,
  height: 38,
  flex: 1,
  marginRight: 12,
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
  color: '#E8DFEF',
  fontSize: 12,
},

cardButton: {
  marginTop: 10,
  backgroundColor: '#BA09A5',
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
  borderTopColor: "#4A4456",
  backgroundColor: "#15121C",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
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
  color: '#7B2DFF',
  fontWeight: '600',
},

  /* SEÇÃO DE LANÇAMENTOS E POPULARES */

grid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginBottom: 40,
},

verticalCard: {
  width: '48%',
  height: 260,
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
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 100,
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
  alignSelf: 'flex-start',
},

buyButtonText: {
  color: '#fff',
  fontWeight: '700',
  fontSize: 13,
},

freeButton: {
  backgroundColor: '#BA09A5',
  paddingVertical: 8,
  paddingHorizontal: 14,
  borderRadius: 12,
  alignSelf: 'flex-start',
  marginTop: 4,
},

freeButtonText: {
  color: '#fff',
  fontWeight: '700',
  fontSize: 13,
  },
});
