import { useEffect, useState } from 'react'
import { View, Text, FlatList, SectionList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { api } from '../src/services/api'

import Logo from '../src/assets/logo.svg'
import { IPosts, PostTypes } from '../@types'

export default function Home() {
  const [data, setData] = useState<IPosts>({} as IPosts)

  async function fetchAPI() {
    try {
      const res = await api.get('https://dummyjson.com/posts')
      const data = await res.data

      setData(data)
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

      <SectionList sections={data.posts} />
    </SafeAreaView>
  )
}
