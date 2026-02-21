import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

// IMPORTS DO MODO CLARO/ESCURO
import { useTheme } from "../context/ThemeContext";
import { lightColors, darkColors } from "../theme/colors";

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
  
  const { theme, toggleTheme } = useTheme();
  const colors = theme === "dark" ? darkColors : lightColors;

  const switchColors = {
  thumb: "#7B2DFF",
  trackFalse: colors.border,
  trackTrue: "#CBA6FF",
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* ----- PERFIL ----- */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Perfil</Text>

          <TouchableOpacity
            style={[
              styles.item,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
                borderWidth: 1,
              },
            ]}
          >
            <MaterialIcons name="person-outline" size={22} color={colors.text} />
            <Text style={[styles.itemText, { color: colors.text }]}>Editar Perfil</Text>
            <MaterialIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
        </View>


        {/* ----- PREFERÊNCIAS ----- */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Preferências</Text>

          <TouchableOpacity
            style={[
              styles.item,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
                borderWidth: 1,
              },
            ]}
          >
            <MaterialIcons name="language" size={22} color={colors.text} />
            <Text style={[styles.itemText, { color: colors.text }]}>Idioma</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.optionText}>Português (BR)</Text>
              <MaterialIcons name="chevron-right" size={20} color="#666" />
            </View>
          </TouchableOpacity>

          {/* MODO ESCURO */}
          <View
            style={[
              styles.item,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
                borderWidth: 1,
              },
            ]}
          >
            <MaterialIcons name="dark-mode" size={22} color={colors.text} />
            <Text style={[styles.itemText, { color: colors.text }]}>Modo escuro</Text>

          <Switch
            value={theme === "dark"}
            onValueChange={toggleTheme}
            thumbColor={switchColors.thumb}
            trackColor={{
              false: switchColors.trackFalse,
              true: switchColors.trackTrue,
            }}
          />
          </View>
        </View>


        {/* ----- NOTIFICAÇÕES ----- */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Notificações</Text>

          <View
            style={[
              styles.item,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
                borderWidth: 1,
              },
            ]}
          >
            <MaterialIcons name="notifications-none" size={22} color={colors.text} />
            <Text style={[styles.itemText, { color: colors.text }]}>Notificações de jogos</Text>

          <Switch
            value={notificacoesJogos}
            onValueChange={setNotificacoesJogos}
            thumbColor={switchColors.thumb}
            trackColor={{
              false: switchColors.trackFalse,
              true: switchColors.trackTrue,
            }}
          />
          </View>

          <View
            style={[
              styles.item,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
                borderWidth: 1,
              },
            ]}
          >
            <MaterialIcons name="local-offer" size={22} color={colors.text} />
            <Text style={[styles.itemText, { color: colors.text }]}>Promoções e ofertas</Text>

          <Switch
            value={promocoesOfertas}
            onValueChange={setPromocoesOfertas}
            thumbColor={switchColors.thumb}
            trackColor={{
              false: switchColors.trackFalse,
              true: switchColors.trackTrue,
            }}
          />
          </View>
        </View>


        {/* ----- PRIVACIDADE ----- */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Privacidade</Text>

          <View
            style={[
              styles.item,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
                borderWidth: 1,
              },
            ]}
          >
            <MaterialIcons name="visibility" size={22} color={colors.text} />
            <Text style={[styles.itemText, { color: colors.text }]}>Perfil Público</Text>

          <Switch
            value={perfilPublico}
            onValueChange={setPerfilPublico}
            thumbColor={switchColors.thumb}
            trackColor={{
              false: switchColors.trackFalse,
              true: switchColors.trackTrue,
            }}
          />
          </View>

          <TouchableOpacity
            style={[
              styles.item,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
                borderWidth: 1,
              },
            ]}
          >
            <MaterialIcons name="schedule" size={22} color={colors.text} />
           <Text style={[styles.itemText, { color: colors.text }]}>Status de atividade</Text>
            <MaterialIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
        </View>


        {/* ----- SUPORTE ----- */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Suporte</Text>

          <TouchableOpacity
            style={[
              styles.item,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
                borderWidth: 1,
              },
            ]}
          >
            <MaterialIcons name="help-outline" size={22} color={colors.text} />
            <Text style={[styles.itemText, { color: colors.text }]}>Ajuda</Text>
            <MaterialIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
        </View>


        {/* ----- SOBRE ----- */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Sobre</Text>

          <TouchableOpacity
            style={[
              styles.item,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
                borderWidth: 1,
              },
            ]}
          >
            <MaterialIcons name="info-outline" size={22} color={colors.text} />
            <Text style={[styles.itemText, { color: colors.text }]}>Versão do App</Text>
            <Text style={styles.optionText}>1.0.0</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.item,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
                borderWidth: 1,
              },
            ]}
          >
            <MaterialIcons name="description" size={22} color={colors.text} />
            <Text style={[styles.itemText, { color: colors.text }]}>Termos de Uso</Text>
            <MaterialIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.item,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
                borderWidth: 1,
              },
            ]}
          >
            <MaterialIcons name="shield" size={22} color={colors.text} />
            <Text style={[styles.itemText, { color: colors.text }]}>Política de Privacidade</Text>
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
