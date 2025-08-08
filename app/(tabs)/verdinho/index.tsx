import { IconSymbol } from "@/components/ui/IconSymbol";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const upcomingEvents = [
  {
    id: 1,
    title: "Seminário de Ciência da Computação",
    date: "2024-01-25",
    time: "14:00",
    location: "Auditório A",
    description: "Últimas tendências em IA e Aprendizado de Máquina",
  },
  {
    id: 2,
    title: "Feira de Carreiras 2025",
    date: "2024-01-28",
    time: "09:00",
    location: "Salão Principal",
    description: "Encontre as principais empresas de tecnologia",
  },
  {
    id: 3,
    title: "Reunião do Conselho Estudantil",
    date: "2024-01-30",
    time: "16:00",
    location: "Sala de Conferência B",
    description: "Reunião mensal do conselho estudantil",
  },
  {
    id: 4,
    title: "Competição de Programação",
    date: "2024-02-02",
    time: "10:00",
    location: "Laboratório de Computação A",
    description: "Competição anual de programação",
  }
];

export default function EventsScreen() {
  const router = useRouter()

  return (
    <SafeAreaView className="flex-1 bg-gray-50 pb-16">
      <View className="px-4 py-6 bg-green-800">
        <Text className="text-white text-2xl font-bold">Verdinho</Text>
        <Text className="text-green-100 mt-1">Gerencie sua participação em eventos na UNAMA</Text>
      </View>

      <View className="px-4 py-4">
        <View className="flex-row gap-3 mb-4">
          <TouchableOpacity
            className="flex-1 bg-green-800 py-3 rounded-lg flex-row items-center justify-center"
            onPress={() => router.push("/(tabs)/verdinho/qrcode")}
          >
            <IconSymbol name="qrcode" size={18} color="white" />
            <Text className="text-white font-semibold ml-2">Meu código</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 bg-gray-600 py-3 rounded-lg flex-row items-center justify-center"
            onPress={() => router.push("/(tabs)/verdinho/historico")}
          >
            <IconSymbol name="clock" size={18} color="white" />
            <Text className="text-white font-semibold ml-2">Histórico</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4">
        <Text className="text-lg font-semibold text-gray-800 mb-4">Eventos futuros</Text>

        {upcomingEvents.map((event) => (
          <View key={event.id} className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            <View className="p-4">
              <View className="flex-row items-start justify-between mb-3">
                <Text className="text-lg font-semibold text-gray-800 flex-1">{event.title}</Text>
              </View>

              <Text className="text-gray-600 text-sm mb-3">{event.description}</Text>

              <View className="space-y-2">
                <View className="flex-row items-center">
                  <IconSymbol name="calendar" size={16} color="#6b7280" />
                  <Text className="text-gray-700 ml-2">{event.date}</Text>
                </View>
                <View className="flex-row items-center">
                  <IconSymbol name="clock" size={16} color="#6b7280" />
                  <Text className="text-gray-700 ml-2">{event.time}</Text>
                </View>
                <View className="flex-row items-center">
                  <IconSymbol name="map" size={16} color="#6b7280" />
                  <Text className="text-gray-700 ml-2">{event.location}</Text>
                </View>
              </View>

              <TouchableOpacity className="bg-green-50 border border-green-200 py-2 px-4 rounded-lg mt-4">
                <Text className="text-green-700 font-medium text-center">Marcar presença</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
