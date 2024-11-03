import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React from "react";

export default function index() {
  const handleLogin = () => {
    console.log("Login");
  };

  return (
    <View>
      <Text style={styles.header}>Login Page</Text>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />
      <View style={styles.loginButton}>
        <Button
          title="Login"
          onPress={() => {
            handleLogin();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 8,
  },
  loginButton: {
    marginTop: 25,
    marginHorizontal: 20,
  },
});
