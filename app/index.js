import { Text, View } from "react-native";
import { Stack } from "expo-router";
import Login from "../components/login/Login";
import Screen from "../components/Screen";

export default function Index() {
  return (
    <Screen>
      <View>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <Login />
      </View>
    </Screen>
  );
}
