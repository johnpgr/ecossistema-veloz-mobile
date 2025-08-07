import { Tabs } from "expo-router"
import React from "react"
import { Platform } from "react-native"

import { HapticTab } from "@/components/HapticTab"
import { IconSymbol } from "@/components/ui/IconSymbol"
import TabBarBackground from "@/components/ui/TabBarBackground"
import { Colors } from "@/constants/Colors"
import { useColorScheme } from "@/hooks/useColorScheme"

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="(meu-curso)"
        options={{
          title: "Meu curso",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="book" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="laboratorios"
        options={{
          title: "Laboratorios",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="calendar" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="verdinho"
        options={{
          title: "Verdinho",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="qrcode.viewfinder" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="atendimento"
        options={{
          title: "Atendimento",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.crop.rectangle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="provas"
        options={{
          title: "Provas",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="doc.plaintext" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
