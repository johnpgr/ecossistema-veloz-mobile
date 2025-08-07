import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const attendedEvents = [
  {
    id: 1,
    title: 'Orientation Week 2024',
    date: '2024-01-15',
    time: '09:00',
    location: 'Main Auditorium',
    type: 'orientation',
    checkInTime: '09:15'
  },
  {
    id: 2,
    title: 'Tech Talk: Future of AI',
    date: '2024-01-18',
    time: '14:00',
    location: 'Conference Hall',
    type: 'seminar',
    checkInTime: '13:55'
  },
  {
    id: 3,
    title: 'Student Workshop: Resume Building',
    date: '2024-01-20',
    time: '10:00',
    location: 'Room 201',
    type: 'workshop',
    checkInTime: '10:05'
  },
  {
    id: 4,
    title: 'Department Meeting',
    date: '2024-01-22',
    time: '16:00',
    location: 'CS Department',
    type: 'meeting',
    checkInTime: '15:58'
  }
];

export default function EventsHistoryScreen() {
  const getEventTypeColor = (type) => {
    switch (type) {
      case 'orientation': return 'bg-blue-100 text-blue-700';
      case 'seminar': return 'bg-green-100 text-green-700';
      case 'workshop': return 'bg-purple-100 text-purple-700';
      case 'meeting': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-4 py-4">
        <View className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <Text className="text-lg font-semibold text-gray-800 mb-2">Attendance Summary</Text>
          <View className="flex-row justify-between">
            <View className="items-center">
              <Text className="text-2xl font-bold text-blue-600">{attendedEvents.length}</Text>
              <Text className="text-gray-600 text-sm">Events Attended</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-green-600">100%</Text>
              <Text className="text-gray-600 text-sm">Attendance Rate</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-purple-600">4</Text>
              <Text className="text-gray-600 text-sm">This Month</Text>
            </View>
          </View>
        </View>

        <Text className="text-lg font-semibold text-gray-800 mb-4">Event History</Text>

        {attendedEvents.map((event) => (
          <View key={event.id} className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            <View className="p-4">
              <View className="flex-row items-start justify-between mb-3">
                <Text className="text-lg font-semibold text-gray-800 flex-1">{event.title}</Text>
                <View className={`px-2 py-1 rounded-full ${getEventTypeColor(event.type)}`}>
                  <Text className="text-xs font-medium capitalize">{event.type}</Text>
                </View>
              </View>

              <View className="space-y-2 mb-3">
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

              <View className="bg-green-50 border border-green-200 rounded-lg p-3 flex-row items-center">
                <IconSymbol name="checkmark.circle" size={16} color="#16a34a" />
                <Text className="text-green-700 font-medium ml-2">
                  Checked in at {event.checkInTime}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
