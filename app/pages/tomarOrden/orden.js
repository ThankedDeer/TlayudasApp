import Screen from "../../../components/Screen";
import TomarOrden from "../../../components/tomarOrden/TomarOrden";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
export default function orden() {
  const [fontsLoaded] = useFonts({
    FugazOne: require("../../../assets/Fonts/FugarOne.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#ca64ca",
          },
          headerTintColor: "black",
          headerTitle: "Tomar orden",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "FugazOne",
          },
        }}
      />
      <TomarOrden />
    </Screen>
  );
}
