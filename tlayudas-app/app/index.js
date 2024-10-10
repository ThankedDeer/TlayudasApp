import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Login from "../components/login/Login";
export default function index() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Login />
    </View>
  );
}
