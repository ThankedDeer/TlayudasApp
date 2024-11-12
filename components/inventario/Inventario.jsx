import { ScrollView, View } from "react-native";
import TopButtons from "./buttons/TopButtons";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import {data} from '../inventario/productosArray'

export default function Inventario() {
  const [producto, setProducto] = useState([]);

  useEffect(()=>{
    setProducto(data);
  }, [])

  return (
    <ScrollView>
      <TopButtons/>
      <View className="flex-row flex-wrap justify-between px-10 w-screen">
        {producto.map((p)=>(
          <ProductCard producto={p} key={p.id}/>
        ))}
      </View>
    </ScrollView>
  );
}
