import { useState } from "react";
import { Pressable, Text } from "react-native";
import { FilterIcon } from "../Icons/BtnIcons";

export default function BtnFiltrar({ onFiltrar }) {

  const [indiceCategoria, setIndiceCategoria] = useState(0);
  const categorias = ["", "Platillo principal", "Bebida", "Botana", "Entrada"];

  const cambiarCategoria = () => {
    const nuevoIndice = (indiceCategoria + 1) % categorias.length;
    setIndiceCategoria(nuevoIndice);
    onFiltrar(categorias[nuevoIndice]); 
  };

  return (
    <Pressable
      onPress={cambiarCategoria}
      className="flex-row items-center space-x-3 p-1 bg-slate-200 rounded-md justify-center w-24"
    >
      <FilterIcon />
      <Text>{categorias[indiceCategoria] || "filtrar"}</Text>
    </Pressable>
  );
}
