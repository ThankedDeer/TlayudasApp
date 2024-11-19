import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import Logo from "../../assets/img/Logo.png";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View className="p-6 pt-16 bg-white h-full w-full">
      <Text className="text-3xl font-bold text-center my-4 text-gray-800">
        Las Tlayudas
      </Text>

      <View className="relative rounded-full overflow-hidden w-32 h-32 mb-6 self-center border border-gray-300 shadow-lg">
        <View className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 rounded-full"></View>
        <Image className="w-full h-full" source={Logo} resizeMode="cover" />
      </View>

      <Text className="font-bold text-lg text-gray-800 mb-2">
        ¡Bienvenido! Inicia sesión.
      </Text>
      <Text className="text-sm text-gray-600 mb-4">
        Accede a tu cuenta para descubrir nuestros deliciosos platillos.
      </Text>

      <TextInput
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:border-vibrantPink focus:ring focus:ring-vibrantPink"
        placeholder="Introduce tu correo electrónico"
      />
      <TextInput
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:border-vibrantPink focus:ring focus:ring-vibrantPink"
        placeholder="Introduce tu contraseña"
        secureTextEntry
      />

      <View className="flex-row justify-between items-center mb-4">
        <View className="flex-row items-center gap-2">
          <Checkbox
            className="border-vibrantPink"
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? "#FF69B4" : undefined} // Cambia el color cuando está seleccionado
          />
          <Text className="text-gray-700">Recuérdame</Text>
        </View>
        <Pressable>
          <Text className="text-vibrantPink">¿Olvidaste tu contraseña?</Text>
        </Pressable>
      </View>
      <Pressable className="p-3 bg-vibrantPink rounded-lg items-center">
        <Text className="text-white text-lg font-semibold">Iniciar sesión</Text>
      </Pressable>
    </View>
  );
};

export default Login;
