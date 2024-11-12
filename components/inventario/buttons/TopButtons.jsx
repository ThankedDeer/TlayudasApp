import { Text, View } from "react-native";
import BtnBuscar from "./BtnBuscar";
import BtnFiltrar from "./BtnFiltrar";

export default function TopButtons() {
  return (
    <View className="flex-row justify-between m-4">
        <BtnBuscar/>
        <BtnFiltrar/>
    </View>
  )
}
