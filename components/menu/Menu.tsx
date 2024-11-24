import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import MenuItem from "../MenuItem/MenuItem";
import { colors } from "../../utilities/color";

export interface IMenuItem {
  readonly link: string;
  readonly text: string;
}

const menuItemps: IMenuItem[] = [
  {
    link: "/pages/singup/login",
    text: "Tomar orden",
  },
  {
    link: "/pages/inventario/inventario",
    text: "Ver inventario",
  },
  {
    link: "/pages/historial/historial",
    text: "Historial de ventas",
  },
  {
    link: "/pages/metrics/reportes",
    text: "Reportes y Métricas",
  },
  
];

export default function Menu() {
  const renderMenuItems = (menuItems: IMenuItem[]) => {
    return menuItems.map((item, index) => {
      let color = colors[index % colors.length];
      return (
        <View style={[styles.menuItem, { backgroundColor: color }]} key={`${item.text}-${index}`}>
          <MenuItem item={item} index={index} color={color} />
        </View>
      );
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>{renderMenuItems(menuItemps)}</View>
    </ScrollView>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollContent: {
    paddingVertical: 20, // Espaciado dentro del ScrollView
    alignItems: "center", // Centrar el contenido
  },
  container: {
    flexDirection: "column", // Apilar elementos en columna
    alignItems: "center",
  },
  menuItem: {
    width: width * 0.9, // El botón ocupa el 80% del ancho de la pantalla
    aspectRatio: 5 / 2, // Relación de aspecto para mantener los botones proporcionados
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8, 
  },
});
