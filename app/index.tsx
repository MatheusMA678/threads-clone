import { Link } from 'expo-router'
import { View, Text } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-zinc-950">
      <Text className="text-4xl font-bold text-zinc-100">App</Text>
      <Link href="/home">
        <Text className='font-medium text-lg text-zinc-400'>Go to Home</Text>
      </Link>
    </View>
  )
}
