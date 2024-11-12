import { Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export default function LastHour() {
  return (
    <View className="bg-slate-300 p-3 items-center justify-center rounded-md text-black">
      <Text>La ultima hora</Text>
      <Entypo name="circular-graph" size={24} color="black" />
    </View>
  );
}
