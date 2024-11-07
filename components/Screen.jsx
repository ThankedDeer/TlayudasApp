import { View } from 'react-native'

export default function Screen({children}) {
  return (
    <View className="flex-1 justify-center items-center">{children}</View>
  )
}
