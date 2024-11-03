import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function ProfileScreen() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
    occupation: "",
  });

  // Add Firebase save/load logic here

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={profile.name}
        onChangeText={(text) => setProfile({ ...profile, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={profile.age}
        keyboardType="numeric"
        onChangeText={(text) => setProfile({ ...profile, age: text })}
      />
      {/* Add more demographic inputs */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 8,
  },
});
