import { Stack } from "expo-router"

export default function EventsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Eventos" }} />
      <Stack.Screen name="history" options={{ title: 'Historico' }} />
      <Stack.Screen name="qrcode" options={{ title: 'Codigo QR' }} />
    </Stack>
  )
}
