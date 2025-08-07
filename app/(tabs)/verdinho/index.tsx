import { IconSymbol } from "@/components/ui/IconSymbol";
import { useNavigation, useRouter } from "expo-router";
import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const upcomingEvents = [
  {
    id: 1,
    title: "Computer Science Seminar",
    date: "2024-01-25",
    time: "14:00",
    location: "Auditorium A",
    description: "Latest trends in AI and Machine Learning",
    type: "seminar"
  },
  {
    id: 2,
    title: "Career Fair 2024",
    date: "2024-01-28",
    time: "09:00",
    location: "Main Hall",
    description: "Meet with top tech companies",
    type: "career"
  },
  {
    id: 3,
    title: "Student Council Meeting",
    date: "2024-01-30",
    time: "16:00",
    location: "Conference Room B",
    description: "Monthly student council meeting",
    type: "meeting"
  },
  {
    id: 4,
    title: "Programming Competition",
    date: "2024-02-02",
    time: "10:00",
    location: "Computer Lab A",
    description: "Annual programming contest",
    type: "competition"
  }
];

export default function EventsScreen() {
  const router = useRouter()

  const getEventTypeColor = (type) => {
    switch (type) {
      case "seminar": return "bg-blue-100 text-blue-700";
      case "career": return "bg-green-100 text-green-700";
      case "meeting": return "bg-purple-100 text-purple-700";
      case "competition": return "bg-orange-100 text-orange-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

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
                <View className={`px-2 py-1 rounded-full ${getEventTypeColor(event.type)}`}>
                  <Text className="text-xs font-medium capitalize">{event.type}</Text>
                </View>
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
