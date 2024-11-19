import { useState } from "react";
import { View, TextInput } from "react-native";
import { SearchIcon } from "../Icons/BtnIcons";

export default function BtnBuscar({ onBuscar }) {
  const [texto, setTexto] = useState("");

  const handleChange = (text) => {
    setTexto(text);
    onBuscar(text);
  };

  return (
    <View className="flex-row items-center space-x-3 p-2 bg-slate-200 rounded-md justify-center w-24">
      <SearchIcon />
      <TextInput
        value={texto}
        onChangeText={handleChange}
        placeholder="Buscar"
      />
    </View>
  );
}
