import { Stack } from "expo-router";

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orientationMessageContainer: {
    position: "absolute",
    top: 0,
    zIndex: 1000,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
  },
  orientationMessageText: {
    color: "white",
    textAlign: "center",
  },
});
