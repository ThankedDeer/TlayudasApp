import { ScrollView, View } from "react-native";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { data } from "../inventario/productosArray";
import BtnBuscar from "./buttons/BtnBuscar";
import BtnFiltrar from "./buttons/BtnFiltrar";

export default function Inventario() {
  const [producto, setProducto] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  useEffect(() => {
    setProducto(data);
  }, []);

  // Filtra los productos basándose en el valor de búsqueda y la categoría
  const productosFiltrados = producto
    .filter((p) => p.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    .filter((p) =>
      categoriaSeleccionada ? p.categoria === categoriaSeleccionada : true
    );

  return (
    <ScrollView>
      <View className="flex-row justify-between px-6 py-4">
        <BtnBuscar onBuscar={(texto) => setBusqueda(texto)} />
        <BtnFiltrar
          onFiltrar={(categoria) => setCategoriaSeleccionada(categoria)}
        />
      </View>
      <View className="flex-row flex-wrap justify-between px-10 w-screen">
        {productosFiltrados.map((p) => (
          <ProductCard producto={p} key={p.id} />
        ))}
      </View>
    </ScrollView>
  );
}
