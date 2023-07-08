import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { api } from '../../src/services/api'

import Logo from '../../src/assets/logo.svg'

interface PostsInterface {
  posts: string
}

export default function Home() {
  const [post, setPosts] = useState()

  async function fetchAPI() {
    try {
      const res = await api.get('https://dummyjson.com/posts')
      const data = await res.data

      setPosts(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="items-center justify-center h-14 w-full">
        <Logo />
      </View>

      <View className="flex-1">
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
      </View>
    </SafeAreaView>
  )
}
