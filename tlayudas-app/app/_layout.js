import { View, StyleSheet } from "react-native";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 items-center justify-center bg-slate-700">
        <StatusBar style="light" />
        <Slot />
      </View>
    </SafeAreaProvider>
  );
}
