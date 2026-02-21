import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// IMPORTS DO MODO CLARO/ESCURO
import { useTheme } from "../context/ThemeContext";
import { darkColors, lightColors } from "../theme/colors";

export default function Informacoes() {
  const { theme } = useTheme();
  const colors = theme === "dark" ? darkColors : lightColors;

  const insets = useSafeAreaInsets();

  // ARRAY COM IMAGENS DO CARROSSEL
  const images = [
    require("../../assets/gtavi-foto1.png"),
    require("../../assets/gtavi-foto2.png"),
    require("../../assets/gtavi-foto3.jpg"),
    require("../../assets/gtavi-foto4.webp"),
    require("../../assets/gtavi-foto5.png"),
  ];

  // ESTADO ATUAL
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 200 }}
      >
        {/* BARRA SUPERIOR */}
        <View style={styles.topBar}>
        <Image
          source={require('../../assets/logo.png')}
          style={[
            styles.logo,
            theme === "light" && { tintColor: "#000" }
          ]}
          resizeMode="contain"
        />

          <View style={styles.topIcons}>
            <MaterialIcons
              name="favorite-border"
              size={22}
              color={colors.text}
            />
            <MaterialIcons
              name="share"
              size={22}
              color={colors.text}
              style={{ marginLeft: 16 }}
            />
          </View>
        </View>

        {/* CARROSSEL */}
        <View style={styles.carouselContainer}>
          <Image
            source={images[currentIndex]}
            style={styles.carouselImage}
            resizeMode="cover"
          />

          <TouchableOpacity style={styles.leftArrow} onPress={prevImage}>
            <MaterialIcons name="chevron-left" size={28} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.rightArrow} onPress={nextImage}>
            <MaterialIcons name="chevron-right" size={28} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* TÍTULO */}
        <View style={styles.titleBox}>
          <Text style={[styles.gameTitle, { color: colors.text }]}>
            Grand Theft Auto VI
          </Text>

          <Text style={[styles.gameStudio, { color: colors.subtext }]}>
            Rockstar Games
          </Text>

          <View style={styles.ratingRow}>
            <MaterialIcons name="star" size={18} color="#7B2DFF" />
            <Text style={[styles.ratingText, { color: colors.text }]}>
              4.5
            </Text>
            <Text style={[styles.reviewsCount, { color: colors.subtext }]}>
              (15.432 avaliações)
            </Text>
          </View>

          <View style={styles.tagsRow}>
            {["Ação", "Mundo Aberto", "Aventura"].map((tag) => (
              <Text
                key={tag}
                style={[
                  styles.tag,
                  {
                    backgroundColor: colors.card,
                    borderColor: "#7B2DFF",
                  },
                ]}
              >
                {tag}
              </Text>
            ))}
          </View>
        </View>

        {/* SOBRE O JOGO */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Sobre o jogo
          </Text>

          <Text style={[styles.sectionText, { color: colors.subtext }]}>
            Grand Theft Auto VI é um jogo de ação em mundo aberto da Rockstar
            Games que marca o retorno à icônica Vice City, agora reinventada
            com gráficos, IA e tecnologias de nova geração. Explore um mapa vivo,
            repleto de eventos, atividades, missões e uma narrativa criminal
            que evolui a cada passo.
          </Text>
        </View>

        {/* REQUISITOS */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Requisitos do sistema
          </Text>

          <Text style={styles.subTitle}>Mínimos:</Text>

          {[
            "PROCESSADOR: Intel Core i5-9600K | AMD Ryzen 5 3600",
            "PLACA DE VÍDEO: NVIDIA GeForce GTX 1660 Super | AMD Radeon RX 5600 XT",
            "ARMAZENAMENTO: 150–180 GB de espaço disponível (SSD obrigatório)",
            "SO: Windows 10 64-bit (última atualização)",
            "Memória: 16 GB RAM",
            "DIRECTX: Versão 12",
          ].map((req, i) => (
            <Text key={i} style={[styles.reqText, { color: colors.subtext }]}>
              {req}
            </Text>
          ))}

          <Text style={[styles.subTitle, { marginTop: 14 }]}>
            Recomendados:
          </Text>

          {[
            "PROCESSADOR: Intel Core i7-12700K | AMD Ryzen 7 5800X",
            "PLACA DE VÍDEO: NVIDIA GeForce RTX 3070 | 4060 Ti ou AMD Radeon RX 6800 XT",
            "180 GB de espaço disponível (SSD NVMe recomendado)",
            "SO: Windows 11 64-bit (última atualização)",
            "Memória: 32 GB RAM",
            "DIRECTX: Versão 12",
          ].map((req, i) => (
            <Text key={`rec-${i}`} style={[styles.reqText, { color: colors.subtext }]}>
              {req}
            </Text>
          ))}
        </View>

        {/* AVALIAÇÕES */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Avaliações
            </Text>

            <TouchableOpacity>
              <Text style={styles.viewAllText}>Ver todas</Text>
            </TouchableOpacity>
          </View>

          {[
            {
              user: "enzogamer2010",
              text: "A melhor narrativa que a Rockstar já fez, simplesmente absurdo.",
              stars: 5,
            },
            {
              user: "luis_0311",
              text: "Muito detalhe no mapa e narrativa envolvente. Rockstar não decepciona.",
              stars: 5,
            },
            {
              user: "joao0710",
              text: "Otimização está ok, mas precisa de uma máquina top pra rodar.",
              stars: 4,
            },
          ].map((review, index) => (
            <View
              key={index}
              style={[styles.reviewBox, { backgroundColor: colors.card }]}
            >
              <Text style={[styles.reviewUser, { color: colors.text }]}>
                {review.user}
              </Text>

              <View style={styles.starsRow}>
                {Array.from({ length: review.stars }).map((_, i) => (
                  <MaterialIcons key={i} name="star" size={18} color="#7B2DFF" />
                ))}
              </View>

              <Text style={[styles.reviewText, { color: colors.subtext }]}>
                {review.text}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* FOOTER */}
      <View
        style={[
          styles.footerFixed,
          {
            paddingBottom: insets.bottom + 10,
            backgroundColor: colors.background,
            borderTopColor: colors.border,
          },
        ]}
      >
        <Text style={[styles.price, { color: colors.text }]}>
          R$ 599,90
        </Text>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>Comprar Agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ESTILOS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingTop: 14,
  },

  logo: {
    width: 110,
    height: 28,
    resizeMode: "contain",
  },

  topIcons: {
    flexDirection: "row",
    alignItems: "center",
  },

  carouselContainer: {
    width: "100%",
    height: 180,
    marginTop: 12,
  },

  carouselImage: {
    width: "100%",
    height: "100%",
  },

  leftArrow: {
    position: "absolute",
    left: 10,
    top: "45%",
  },

  rightArrow: {
    position: "absolute",
    right: 10,
    top: "45%",
  },

  titleBox: {
    paddingHorizontal: 14,
    marginTop: 16,
  },

  gameTitle: {
    fontSize: 22,
    fontWeight: "700",
  },

  gameStudio: {
    marginTop: 4,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  ratingText: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: "600",
  },

  reviewsCount: {
    marginLeft: 6,
  },

  tagsRow: {
    flexDirection: "row",
    marginTop: 10,
  },

  tag: {
    color: "#7B2DFF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
    fontSize: 12,
    borderWidth: 0.5,
  },

  section: {
    paddingHorizontal: 14,
    marginTop: 24,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  sectionText: {
    marginTop: 10,
    lineHeight: 20,
    fontSize: 14,
  },

  subTitle: {
    color: "#7B2DFF",
    fontWeight: "700",
    fontSize: 14,
    marginTop: 10,
  },

  reqText: {
    marginTop: 6,
    fontSize: 13,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  viewAllText: {
    color: "#7B2DFF",
    fontSize: 13,
    fontWeight: "600",
  },

  reviewBox: {
    padding: 14,
    borderRadius: 10,
    marginTop: 12,
  },

  reviewUser: {
    fontWeight: "700",
  },

  starsRow: {
    flexDirection: "row",
    marginTop: 4,
  },

  reviewText: {
    marginTop: 6,
    fontSize: 13,
  },

  footerFixed: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 14,
    paddingVertical: 20,
    borderTopWidth: 1,
  },

  price: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 12,
  },

  buyButton: {
    backgroundColor: "#7B2DFF",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  buyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});