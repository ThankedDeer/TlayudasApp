import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Menu() {
  return (
    <View>
      <Link href="/pages/tomarOrden/orden" asChild>
        <Pressable>
          <Text>Tomar orden</Text>
        </Pressable>
      </Link>
      <Link href="/pages/inventario/inventario" asChild>
        <Pressable>
          <Text>Ver inventario</Text>
        </Pressable>
      </Link>
      <Link href="/pages/historial/historial" asChild>
        <Pressable>
          <Text>Historial de ventas</Text>
        </Pressable>
      </Link>
      <Link href="/pages/metrics/reportes" asChild>
        <Pressable>
          <Text>Reportes y Métricas</Text>
        </Pressable>
      </Link>
    </View>
  )
}
