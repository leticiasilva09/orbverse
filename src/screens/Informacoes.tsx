import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Informacoes() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* ---------- TOP BAR ---------- */}
        <View style={styles.topBar}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />

          <View style={styles.topIcons}>
            <Ionicons name="heart-outline" size={22} color="#fff" />
            <Ionicons
              name="share-social-outline"
              size={22}
              color="#fff"
              style={{ marginLeft: 16 }}
            />
          </View>
        </View>

        {/* ---------- CARROSSEL ---------- */}
        <View style={styles.carouselContainer}>
          <Image
            source={require("../../assets/gta-vi.jpg")}
            style={styles.carouselImage}
            resizeMode="cover"
          />

          {/* Setas */}
          <TouchableOpacity style={styles.leftArrow}>
            <Ionicons name="chevron-back" size={28} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.rightArrow}>
            <Ionicons name="chevron-forward" size={28} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* ---------- TÍTULO ---------- */}
        <View style={styles.titleBox}>
          <Text style={styles.gameTitle}>Grand Theft Auto VI</Text>
          <Text style={styles.gameStudio}>Rockstar Games</Text>

          <View style={styles.ratingRow}>
            <Ionicons name="star" size={18} color="#d400ff" />
            <Text style={styles.ratingText}>4.5</Text>
            <Text style={styles.reviewsCount}>(15.432 avaliações)</Text>
          </View>

          <View style={styles.tagsRow}>
            <Text style={styles.tag}>Ação</Text>
            <Text style={styles.tag}>Mundo Aberto</Text>
            <Text style={styles.tag}>Exploração</Text>
          </View>
        </View>

        {/* ---------- SOBRE O JOGO ---------- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre o jogo</Text>
          <Text style={styles.sectionText}>
            Grand Theft Auto VI é um jogo de ação em mundo aberto da Rockstar
            Games que marca o retorno à icônica Vice City — agora reinventada
            com gráficos, IA e tecnologias de nova geração. Explore um mapa vivo,
            repleto de eventos, atividades, missões e uma narrativa criminal
            que evolui a cada passo.
          </Text>
        </View>

        {/* ---------- REQUISITOS ---------- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requisitos do sistema</Text>

          <Text style={styles.subTitle}>Mínimos:</Text>
          <Text style={styles.reqText}>• Processador: Ryzen 5 3600</Text>
          <Text style={styles.reqText}>
            • Placa de vídeo: GTX 1660 Super / RX 5600 XT
          </Text>
          <Text style={styles.reqText}>• Memória: 16 GB RAM</Text>
          <Text style={styles.reqText}>
            • Armazenamento: 160 GB de espaço disponível
          </Text>

          <Text style={[styles.subTitle, { marginTop: 14 }]}>
            Recomendados:
          </Text>
          <Text style={styles.reqText}>• Processador: Ryzen 7 5800X</Text>
          <Text style={styles.reqText}>
            • Placa de vídeo: RTX 3070 / RX 6700 XT
          </Text>
          <Text style={styles.reqText}>• Memória: 32 GB RAM</Text>
          <Text style={styles.reqText}>
            • Armazenamento: SSD NVMe de alta velocidade
          </Text>
        </View>

        {/* ---------- AVALIAÇÕES ---------- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Avaliações</Text>

          {/* 1 */}
          <View style={styles.reviewBox}>
            <Text style={styles.reviewUser}>GamerPro2025</Text>
            <View style={styles.starsRow}>
              <Ionicons name="star" size={14} color="#d400ff" />
              <Ionicons name="star" size={14} color="#d400ff" />
              <Ionicons name="star" size={14} color="#d400ff" />
              <Ionicons name="star" size={14} color="#d400ff" />
              <Ionicons name="star" size={14} color="#d400ff" />
            </View>
            <Text style={styles.reviewText}>
              A melhor experiência da Rockstar até hoje. Impressionante.
            </Text>
          </View>

          {/* 2 */}
          <View style={styles.reviewBox}>
            <Text style={styles.reviewUser}>LuciaFan</Text>
            <View style={styles.starsRow}>
              <Ionicons name="star" size={14} color="#d400ff" />
              <Ionicons name="star" size={14} color="#d400ff" />
              <Ionicons name="star" size={14} color="#d400ff" />
              <Ionicons name="star" size={14} color="#d400ff" />
            </View>
            <Text style={styles.reviewText}>
              Muito detalhe no mapa e narrativa envolvente. Rockstar não
              decepciona.
            </Text>
          </View>

          {/* 3 */}
          <View style={styles.reviewBox}>
            <Text style={styles.reviewUser}>TechReviewer</Text>
            <View style={styles.starsRow}>
              <Ionicons name="star" size={14} color="#d400ff" />
              <Ionicons name="star" size={14} color="#d400ff" />
              <Ionicons name="star" size={14} color="#d400ff" />
            </View>
            <Text style={styles.reviewText}>
              Otimização melhor do que eu esperava para um jogo tão grande.
            </Text>
          </View>
        </View>

        {/* ---------- PREÇO + BOTÃO ---------- */}
        <View style={styles.footer}>
          <Text style={styles.price}>R$ 599,90</Text>

          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyText}>Comprar Agora</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

/* ---------------------- ESTILOS ---------------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },



  /* TOPO */
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

  /* CARROSSEL */
  carouselContainer: {
    width: "100%",
    height: 180,
    marginTop: 12,
  },

  carouselImage: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
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

  /* TÍTULO */
  titleBox: {
    paddingHorizontal: 14,
    marginTop: 16,
  },

  gameTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },

  gameStudio: {
    color: "#ccc",
    marginTop: 4,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  ratingText: {
    color: "#fff",
    marginLeft: 4,
    fontSize: 16,
    fontWeight: "600",
  },

  reviewsCount: {
    color: "#aaa",
    marginLeft: 6,
  },

  tagsRow: {
    flexDirection: "row",
    marginTop: 10,
  },

  tag: {
    backgroundColor: "#1a1a1a",
    color: "#d400ff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
    fontSize: 12,
  },

  /* SESSÕES */
  section: {
    paddingHorizontal: 14,
    marginTop: 24,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  sectionText: {
    color: "#ccc",
    marginTop: 10,
    lineHeight: 20,
    fontSize: 14,
  },

  subTitle: {
    color: "#d400ff",
    fontWeight: "700",
    fontSize: 14,
    marginTop: 10,
  },

  reqText: {
    color: "#ccc",
    marginTop: 6,
    fontSize: 13,
  },

  /* AVALIAÇÕES */
  reviewBox: {
    backgroundColor: "#111",
    padding: 14,
    borderRadius: 10,
    marginTop: 12,
  },

  reviewUser: {
    color: "#fff",
    fontWeight: "700",
  },

  starsRow: {
    flexDirection: "row",
    marginTop: 4,
  },

  reviewText: {
    color: "#ccc",
    marginTop: 6,
    fontSize: 13,
  },

  /* FOOTER */
  footer: {
    paddingHorizontal: 14,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#111",
    marginTop: 20,
  },

  price: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 12,
  },

  buyButton: {
    backgroundColor: "#b400ff",
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
