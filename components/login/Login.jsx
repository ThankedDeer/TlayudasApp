import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Login() {
  return (
    <View>
      <Link href="/pages/menu/menu" asChild>
        <Pressable>
          <Text className="text-xl">"iniciar sesion"</Text>
        </Pressable>
      </Link>
    </View>
  );
}
