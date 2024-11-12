import { Text, View } from "react-native";

export default function Corte() {
  return (
    <View className="bg-slate-300 p-3 items-center justify-center rounded-md text-black">
      <View className="space-y-5">
        <Text>Corte: 2 pm</Text>
        <Text className="font-bold">$ 32288.11</Text>
      </View>
    </View>
  );
}
