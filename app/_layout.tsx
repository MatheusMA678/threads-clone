import { Slot } from "expo-router";
import { StatusBar } from 'react-native';

export default function RootLayout() {
  return (
    <>
      <StatusBar translucent barStyle='light-content' backgroundColor='transparent' />
      <Slot />
    </>
  )
}