import { View } from "react-native";
import Menu from "../../../components/menu/Menu";
import { Stack } from "expo-router";
import Screen from "../../../components/Screen";
import { useFonts } from "expo-font";

export default function menu() {
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
              backgroundColor: "#AAAAAA",
            },
            headerTintColor: "black",
            headerTitle: "Las Tlayudas",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "FugazOne",
            },
          }}
        />
        <Menu />
      </View>
    </Screen>
  );
}
