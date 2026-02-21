import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

// Navegação
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";

type ConfigNavigationProp = NativeStackNavigationProp<RootStackParamList, "Config">;

export default function Config() {
  const navigation = useNavigation<ConfigNavigationProp>();

  // Estados dos Switches
  const [notificacoesJogos, setNotificacoesJogos] = useState(true);
  const [promocoesOfertas, setPromocoesOfertas] = useState(false);
  const [perfilPublico, setPerfilPublico] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* ----- PERFIL ----- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Perfil</Text>

          <TouchableOpacity style={styles.item}>
            <MaterialIcons name="person-outline" size={22} color="#fff" />
            <Text style={styles.itemText}>Editar Perfil</Text>
            <MaterialIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
        </View>


        {/* ----- PREFERÊNCIAS ----- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferências</Text>

          <TouchableOpacity style={styles.item}>
            <MaterialIcons name="language" size={22} color="#fff" />
            <Text style={styles.itemText}>Idioma</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.optionText}>Português (BR)</Text>
              <MaterialIcons name="chevron-right" size={20} color="#666" />
            </View>
          </TouchableOpacity>
        </View>


        {/* ----- NOTIFICAÇÕES ----- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notificações</Text>

          <View style={styles.item}>
            <MaterialIcons name="notifications-none" size={22} color="#fff" />
            <Text style={styles.itemText}>Notificações de jogos</Text>

            <Switch
              value={notificacoesJogos}
              onValueChange={setNotificacoesJogos}
              thumbColor="#7B2DFF"
            />
          </View>

          <View style={styles.item}>
            <MaterialIcons name="local-offer" size={22} color="#fff" />
            <Text style={styles.itemText}>Promoções e ofertas</Text>

            <Switch
              value={promocoesOfertas}
              onValueChange={setPromocoesOfertas}
              thumbColor="#fff"
            />
          </View>
        </View>


        {/* ----- PRIVACIDADE ----- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacidade</Text>

          <View style={styles.item}>
            <MaterialIcons name="visibility" size={22} color="#fff" />
            <Text style={styles.itemText}>Perfil Público</Text>

            <Switch
              value={perfilPublico}
              onValueChange={setPerfilPublico}
              thumbColor="#7B2DFF"
            />
          </View>

          <TouchableOpacity style={styles.item}>
            <MaterialIcons name="schedule" size={22} color="#fff" />
            <Text style={styles.itemText}>Status de atividade</Text>
            <MaterialIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
        </View>


        {/* ----- SUPORTE ----- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Suporte</Text>

          <TouchableOpacity style={styles.item}>
            <MaterialIcons name="help-outline" size={22} color="#fff" />
            <Text style={styles.itemText}>Ajuda</Text>
            <MaterialIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
        </View>


        {/* ----- SOBRE ----- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre</Text>

          <TouchableOpacity style={styles.item}>
            <MaterialIcons name="info-outline" size={22} color="#fff" />
            <Text style={styles.itemText}>Versão do App</Text>
            <Text style={styles.optionText}>1.0.0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <MaterialIcons name="description" size={22} color="#fff" />
            <Text style={styles.itemText}>Termos de Uso</Text>
            <MaterialIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <MaterialIcons name="shield" size={22} color="#fff" />
            <Text style={styles.itemText}>Política de Privacidade</Text>
            <MaterialIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />

      </ScrollView>
    </SafeAreaView>
  );
}


/* ESTILOS */
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#15121C",
},

content: {
  paddingHorizontal: 16,
  marginTop: 10,
},

section: {
  marginBottom: 22,
},

sectionTitle: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "700",
  marginBottom: 12,
},

item: {
  backgroundColor: "#1D1A25",
  padding: 16,
  borderRadius: 14,
  marginBottom: 10,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
},

itemText: {
  color: "#fff",
  fontSize: 16,
  flex: 1,
  marginLeft: 12,
},

optionText: {
  color: "#aaa",
  fontSize: 14,
  marginRight: 6,
},
});
