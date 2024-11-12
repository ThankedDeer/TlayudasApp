import { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { SearchIcon } from "../Icons/BtnIcons";


export default function BtnBuscar() {
  const [texto, setTexto] = useState("");

  return (
    <View className="flex-row items-center space-x-3 p-2 bg-slate-200 rounded-md justify-center w-24">
      <SearchIcon />
      <TextInput value={texto} onChangeText={setTexto} placeholder="buscar" />
    </View>
  );
}
