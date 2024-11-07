import ReportesMetricas from "../../../components/reportes/ReportesMetricas";
import Screen from "../../../components/Screen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function inventario() {
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
            headerTitle: "Reportes y Métricas",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "FugazOne",
            },
          }}
        />
      <ReportesMetricas />
    </Screen>
  );
}
