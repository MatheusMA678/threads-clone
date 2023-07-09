import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Feather } from '@expo/vector-icons'

import FeedIcon from '../src/assets/feed.svg'
import SearchIcon from '../src/assets/search.svg'
import WriteIcon from '../src/assets/write.svg'
import LikeIcon from '../src/assets/like.svg'
import AccountIcon from '../src/assets/account.svg'

export default function RootLayout() {
  return (
    <>
      <StatusBar translucent style="auto" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'white',
            height: 56,
            borderColor: 'transparent',
            elevation: 0,
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: '#B8B8B8',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => <FeedIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="search/index"
          options={{
            tabBarIcon: ({ color }) => <SearchIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="write/index"
          options={{
            tabBarIcon: ({ color }) => <WriteIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="activity/index"
          options={{
            tabBarIcon: ({ color }) => <LikeIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile/index"
          options={{
            tabBarIcon: ({ color }) => <AccountIcon color={color} />,
          }}
        />
      </Tabs>
    </>
  )
}
