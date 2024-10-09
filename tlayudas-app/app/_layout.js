import { View, StyleSheet } from "react-native";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar style="light"/>
      <Slot />
    </View>
  );
}
