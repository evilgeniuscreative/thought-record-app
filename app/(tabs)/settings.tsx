import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Switch,
  Button,
  Alert,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useTheme } from "@react-navigation/native";

export default function SettingsScreen() {
  const { colors } = useTheme();

  const clearHistory = async () => {
    Alert.alert(
      "Clear History",
      "Are you sure you want to clear all history? This cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Clear",
          onPress: async () => {
            // Implement Firebase collection deletion
          },
          style: "destructive",
        },
      ]
    );
  };

  return (
    <TouchableOpacity style={{ backgroundColor: colors.card }}>
      <Text style={{ color: colors.text }}>Button!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
});
