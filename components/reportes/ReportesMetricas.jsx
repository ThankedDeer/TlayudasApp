import { ScrollView, View } from "react-native";
import LastTable from "./desglose/LastTable";
import Corte from "./desglose/Corte";
import Plataforma from "./desglose/Plataforma";
import LastMonth from "./desglose/LastMonth";
import LastHour from "./desglose/LastHour";

export default function ReportesMetricas() {
  return (
    <View className="px-6 space-y-4">
      <View className="flex-row flex-wrap justify-between">
        <LastTable />
        <Corte />
      </View>
      <View>
        <LastMonth />
      </View>
      <View className="flex-row flex-wrap justify-between">
        <Plataforma />
        <LastHour />
      </View>
    </View>
  );
}
