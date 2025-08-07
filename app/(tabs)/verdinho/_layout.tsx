import { Stack } from "expo-router"

export default function EventsLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="index" options={{ title: "Verdinho" }} />
      <Stack.Screen name="historico" options={{ title: 'Historico' }} />
      <Stack.Screen name="qrcode" options={{ title: 'Codigo QR' }} />
    </Stack>
  )
}
