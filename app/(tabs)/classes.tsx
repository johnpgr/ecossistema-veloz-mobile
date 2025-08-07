import { IconSymbol } from '@/components/ui/IconSymbol';
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const classData = [
  {
    id: 1,
    name: 'Advanced Programming',
    code: 'CS301',
    teacher: 'Dr. Sarah Johnson',
    room: 'Room 205',
    schedule: [
      { day: 'Monday', time: '09:00-11:00' },
      { day: 'Wednesday', time: '09:00-11:00' },
      { day: 'Friday', time: '09:00-11:00' }
    ],
    credits: 3,
    semester: 'Spring 2024'
  },
  {
    id: 2,
    name: 'Database Systems',
    code: 'CS302',
    teacher: 'Prof. Michael Brown',
    room: 'Room 301',
    schedule: [
      { day: 'Tuesday', time: '14:00-16:00' },
      { day: 'Thursday', time: '14:00-16:00' }
    ],
    credits: 3,
    semester: 'Spring 2024'
  },
  {
    id: 3,
    name: 'Software Engineering',
    code: 'CS303',
    teacher: 'Dr. Emily Davis',
    room: 'Room 102',
    schedule: [
      { day: 'Monday', time: '14:00-17:00' },
      { day: 'Wednesday', time: '14:00-17:00' }
    ],
    credits: 4,
    semester: 'Spring 2024'
  },
  {
    id: 4,
    name: 'Computer Networks',
    code: 'CS304',
    teacher: 'Prof. James Wilson',
    room: 'Room 203',
    schedule: [
      { day: 'Tuesday', time: '10:00-12:00' },
      { day: 'Thursday', time: '10:00-12:00' }
    ],
    credits: 3,
    semester: 'Spring 2024'
  },
  {
    id: 5,
    name: 'Machine Learning',
    code: 'CS305',
    teacher: 'Dr. Lisa Garcia',
    room: 'Room 401',
    schedule: [
      { day: 'Friday', time: '14:00-17:00' }
    ],
    credits: 3,
    semester: 'Spring 2024'
  }
];

export default function ClassesScreen() {
  const [selectedClass, setSelectedClass] = useState(null);

  const totalCredits = classData.reduce((sum, cls) => sum + cls.credits, 0);

  if (selectedClass) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50">
        <View className="px-4 py-6 bg-blue-600">
          <TouchableOpacity onPress={() => setSelectedClass(null)} className="mb-2">
            <Text className="text-blue-100">← Back to Classes</Text>
          </TouchableOpacity>
          <Text className="text-white text-2xl font-bold">{selectedClass.name}</Text>
          <Text className="text-blue-100 mt-1">{selectedClass.code}</Text>
        </View>

        <ScrollView className="flex-1 px-4 py-4">
          <View className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <Text className="text-lg font-semibold text-gray-800 mb-4">Class Information</Text>
            
            <View className="space-y-3">
              <View className="flex-row items-center">
                <IconSymbol name="person" size={18} color="#6b7280" />
                <Text className="text-gray-700 ml-3 font-medium">Instructor</Text>
                <Text className="text-gray-600 ml-auto">{selectedClass.teacher}</Text>
              </View>
              
              <View className="flex-row items-center">
                <IconSymbol name="map" size={18} color="#6b7280" />
                <Text className="text-gray-700 ml-3 font-medium">Classroom</Text>
                <Text className="text-gray-600 ml-auto">{selectedClass.room}</Text>
              </View>
              
              <View className="flex-row items-center">
                <IconSymbol name="book" size={18} color="#6b7280" />
                <Text className="text-gray-700 ml-3 font-medium">Credits</Text>
                <Text className="text-gray-600 ml-auto">{selectedClass.credits}</Text>
              </View>
              
              <View className="flex-row items-center">
                <IconSymbol name="calendar" size={18} color="#6b7280" />
                <Text className="text-gray-700 ml-3 font-medium">Semester</Text>
                <Text className="text-gray-600 ml-auto">{selectedClass.semester}</Text>
              </View>
            </View>
          </View>

          <View className="bg-white rounded-lg shadow-sm p-4">
            <Text className="text-lg font-semibold text-gray-800 mb-4">Class Schedule</Text>
            
            {selectedClass.schedule.map((schedule, index) => (
              <View key={index} className={`flex-row items-center justify-between py-3 ${index !== selectedClass.schedule.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <View className="flex-row items-center">
                  <IconSymbol name="clock" size={16} color="#6b7280" />
                  <Text className="text-gray-700 font-medium ml-2">{schedule.day}</Text>
                </View>
                <Text className="text-gray-600">{schedule.time}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="px-4 py-6 bg-blue-600">
        <Text className="text-white text-2xl font-bold">My Classes</Text>
        <Text className="text-blue-100 mt-1">Spring 2024 • {totalCredits} Credits</Text>
      </View>

      <ScrollView className="flex-1 px-4 py-4">
        {classData.map((cls) => (
          <TouchableOpacity
            key={cls.id}
            className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden"
            onPress={() => setSelectedClass(cls)}
          >
            <View className="p-4">
              <View className="flex-row items-start justify-between mb-3">
                <View className="flex-1">
                  <Text className="text-lg font-semibold text-gray-800">{cls.name}</Text>
                  <Text className="text-gray-600 text-sm">{cls.code}</Text>
                </View>
                <View className="bg-blue-100 px-2 py-1 rounded-full">
                  <Text className="text-blue-700 text-xs font-medium">{cls.credits} Credits</Text>
                </View>
              </View>

              <View className="space-y-2">
                <View className="flex-row items-center">
                  <IconSymbol name="person" size={16} color="#6b7280" />
                  <Text className="text-gray-700 ml-2">{cls.teacher}</Text>
                </View>
                <View className="flex-row items-center">
                  <IconSymbol name="map" size={16} color="#6b7280" />
                  <Text className="text-gray-700 ml-2">{cls.room}</Text>
                </View>
                <View className="flex-row items-center">
                  <IconSymbol name="clock" size={16} color="#6b7280" />
                  <Text className="text-gray-700 ml-2">
                    {cls.schedule.map(s => s.day).join(', ')}
                  </Text>
                </View>
              </View>

              <View className="mt-3 pt-3 border-t border-gray-100">
                <Text className="text-blue-600 text-sm font-medium">Tap for details →</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
