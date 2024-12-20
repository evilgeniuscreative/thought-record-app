import { Tabs } from "expo-router";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = "";

          if (route.name === "index") {
            iconName = focused ? "login" : "login";
          } else if (route.name === "home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "about") {
            iconName = focused ? "info" : "info";
          } else if (route.name === "history") {
            iconName = focused ? "history" : "history";
          } else if (route.name === "profile") {
            iconName = focused ? "person" : "person";
          } else if (route.name === "settings") {
            iconName = focused ? "settings" : "settings";
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#ffd33d",
        tabBarInactiveTintColor: "gray",
        headerStyle: {
          backgroundColor: "#25292e",
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Login",
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
        }}
      />
    </Tabs>
  );
}
