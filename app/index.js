import { Stack } from "expo-router";
import { View } from "react-native";
import Login from "../components/login/Login";

export default function Index() {
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Login />
    </View>
  );
}
