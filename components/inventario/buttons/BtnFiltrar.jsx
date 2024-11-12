import { Pressable, Text } from "react-native";
import { FilterIcon } from "../Icons/BtnIcons";

export default function BtnFiltrar() {
  return (
    <Pressable className="flex-row items-center space-x-3 p-1 bg-slate-200 rounded-md justify-center w-24">
      <FilterIcon />
      <Text>filtrar</Text>
    </Pressable>
  );
}
