import { Stack } from "expo-router"

export default function EventsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Verdinho" }} />
      <Stack.Screen name="curso/[id]" options={{ title: "Curso" }} />
    </Stack>
  )
}
