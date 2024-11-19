import { useState } from "react";
import { Image, Pressable, Text, View, Modal } from "react-native";

export default function ProductCard({ producto }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex-1 items-center justify-center bg-white px-7">
          <View className="items-center justify-center space-y-5">
            <Text className="p-2 bg-yellow-500 text-2xl text-center">
              {producto.nombre}
            </Text>
            <Image
              source={require("../../assets/IMG/comida.jpg")}
              className="h-28 w-28"
            />
            <Text className="text-sm font-bold">
              Stock:{" "}
              <Text className="font-normal  ">{producto.stock} piezas</Text>
            </Text>
            <Text className="text-sm font-bold mt-2">
              Categoría:{" "}
              <Text className="font-normal ">{producto.categoria}</Text>
            </Text>
            <Text className="text-sm font-bold mt-2">
              Precio: <Text className="font-normal ">${producto.precio}</Text>
            </Text>
            <Text className="text-sm font-bold mt-2">
              Descripción:{" "}
              <Text className="font-normal ">{producto.descripcion}</Text>
            </Text>
          </View>
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            className="bg-red-500 p-2 rounded-sm m-5"
          >
            <Text>Hide Modal</Text>
          </Pressable>
        </View>
      </Modal>

      <Pressable onPress={() => setModalVisible(true)}>
        <View className="flex-col w-32 m-3 rounded-b-lg bg-pink-400">
          <Image
            source={require("../../assets/IMG/comida.jpg")}
            className="w-full h-24"
          />
          <Text className="text-center py-2 text-white">{producto.nombre}</Text>
        </View>
      </Pressable>
    </View>
  );
}
