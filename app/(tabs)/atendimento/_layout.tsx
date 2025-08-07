import { Stack } from "expo-router"

export default function EventsLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="index" options={{ title: "Atendimento" }} />
      <Stack.Screen name="form" options={{ title: "Formulario de atendimento" }} />
    </Stack>
  )
}
