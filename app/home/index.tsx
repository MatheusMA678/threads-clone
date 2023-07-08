import { Link } from 'expo-router'
import { View, Text } from 'react-native'

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-zinc-950">
      <Text className="text-4xl font-bold text-zinc-100">Home</Text>
      <Link href="/">
        <Text className='font-medium text-lg text-zinc-400'>Back</Text>
      </Link>
    </View>
  )
}
