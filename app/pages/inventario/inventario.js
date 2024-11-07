import { View } from "react-native";
import Inventario from "../../../components/inventario/Inventario";
import { Stack } from "expo-router";
import Screen from "../../../components/Screen";

import { useFonts } from "expo-font";

export default function inventario() {
  const [fontsLoaded] = useFonts({
    FugazOne: require("../../../assets/Fonts/FugarOne.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <Screen>
      <View>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#ca64ca",
            },
            headerTintColor: "white",
            headerTitle: "Inventario",
            headerTitleStyle: {
              fontFamily: "FugazOne",
            },
            headerTitleAlign: "center",
          }}
        />
        <Inventario />
      </View>
    </Screen>
  );
}
