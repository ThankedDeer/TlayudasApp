import { View } from "react-native";
import Historial from "../../../components/historial/Historial";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import Screen from "../../../components/Screen";

export default function historial() {
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
            headerTitle: "Historial",
            headerTitleStyle: {
              fontFamily: "FugazOne",
            },
            headerTitleAlign: "center",
          }}
        />
        <Historial />
      </View>
    </Screen>
  );
}
