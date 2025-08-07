import { IconSymbol } from '@/components/ui/IconSymbol';
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const testData = [
  {
    id: 1,
    subject: 'Advanced Programming',
    code: 'CS301',
    type: 'Midterm Exam',
    date: '2024-02-15',
    time: '09:00-11:00',
    room: 'Room 205',
    status: 'upcoming',
    daysLeft: 8
  },
  {
    id: 2,
    subject: 'Database Systems',
    code: 'CS302',
    type: 'Quiz',
    date: '2024-02-10',
    time: '14:00-15:00',
    room: 'Room 301',
    status: 'upcoming',
    daysLeft: 3
  },
  {
    id: 3,
    subject: 'Software Engineering',
    code: 'CS303',
    type: 'Project Presentation',
    date: '2024-02-20',
    time: '14:00-17:00',
    room: 'Room 102',
    status: 'upcoming',
    daysLeft: 13
  },
  {
    id: 4,
    subject: 'Computer Networks',
    code: 'CS304',
    type: 'Lab Test',
    date: '2024-02-05',
    time: '10:00-12:00',
    room: 'Room 203',
    status: 'completed',
    score: '85/100'
  },
  {
    id: 5,
    subject: 'Machine Learning',
    code: 'CS305',
    type: 'Assignment Due',
    date: '2024-02-12',
    time: '23:59',
    room: 'Online Submission',
    status: 'upcoming',
    daysLeft: 5
  }
];

export default function TestCalendarScreen() {
  const [filter, setFilter] = useState('all');

  const filteredTests = testData.filter(test => {
    if (filter === 'upcoming') return test.status === 'upcoming';
    if (filter === 'completed') return test.status === 'completed';
    return true;
  });

  const getStatusColor = (status, daysLeft) => {
    if (status === 'completed') return 'text-green-600';
    if (daysLeft <= 3) return 'text-red-600';
    if (daysLeft <= 7) return 'text-yellow-600';
    return 'text-blue-600';
  };

  const getStatusIcon = (status, daysLeft) => {
    if (status === 'completed') return <IconSymbol name="checkmark.circle" size={16} color="#16a34a" />;
    if (daysLeft <= 3) return <IconSymbol name="exclamationmark.triangle" size={16} color="#dc2626" />;
    return <IconSymbol name="clock" size={16} color="#3b82f6" />;
  };

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'midterm exam': return 'bg-red-100 text-red-700';
      case 'final exam': return 'bg-red-100 text-red-700';
      case 'quiz': return 'bg-blue-100 text-blue-700';
      case 'lab test': return 'bg-purple-100 text-purple-700';
      case 'project presentation': return 'bg-green-100 text-green-700';
      case 'assignment due': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="px-4 py-6 bg-red-600">
        <Text className="text-white text-2xl font-bold">Test Calendar</Text>
        <Text className="text-red-100 mt-1">Track your exams and assignments</Text>
      </View>

      <View className="px-4 py-4">
        <View className="flex-row bg-white rounded-lg p-1 shadow-sm">
          <TouchableOpacity
            className={`flex-1 py-2 rounded-md ${filter === 'all' ? 'bg-red-600' : ''}`}
            onPress={() => setFilter('all')}
          >
            <Text className={`text-center font-medium ${filter === 'all' ? 'text-white' : 'text-gray-600'}`}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-2 rounded-md ${filter === 'upcoming' ? 'bg-red-600' : ''}`}
            onPress={() => setFilter('upcoming')}
          >
            <Text className={`text-center font-medium ${filter === 'upcoming' ? 'text-white' : 'text-gray-600'}`}>
              Upcoming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-2 rounded-md ${filter === 'completed' ? 'bg-red-600' : ''}`}
            onPress={() => setFilter('completed')}
          >
            <Text className={`text-center font-medium ${filter === 'completed' ? 'text-white' : 'text-gray-600'}`}>
              Completed
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4">
        {filteredTests.map((test) => (
          <View key={test.id} className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            <View className="p-4">
              <View className="flex-row items-start justify-between mb-3">
                <View className="flex-1">
                  <Text className="text-lg font-semibold text-gray-800">{test.subject}</Text>
                  <Text className="text-gray-600 text-sm">{test.code}</Text>
                </View>
                <View className={`px-2 py-1 rounded-full ${getTypeColor(test.type)}`}>
                  <Text className="text-xs font-medium">{test.type}</Text>
                </View>
              </View>

              <View className="space-y-2 mb-3">
                <View className="flex-row items-center">
                  <IconSymbol name="calendar" size={16} color="#6b7280" />
                  <Text className="text-gray-700 ml-2">{test.date}</Text>
                </View>
                <View className="flex-row items-center">
                  <IconSymbol name="clock" size={16} color="#6b7280" />
                  <Text className="text-gray-700 ml-2">{test.time}</Text>
                </View>
                <View className="flex-row items-center">
                  <IconSymbol name="book" size={16} color="#6b7280" />
                  <Text className="text-gray-700 ml-2">{test.room}</Text>
                </View>
              </View>

              <View className="flex-row items-center justify-between pt-3 border-t border-gray-100">
                <View className="flex-row items-center">
                  {getStatusIcon(test.status, test.daysLeft)}
                  <Text className={`ml-2 font-medium ${getStatusColor(test.status, test.daysLeft)}`}>
                    {test.status === 'completed' 
                      ? `Completed - Score: ${test.score}`
                      : test.daysLeft === 1 
                        ? '1 day left'
                        : `${test.daysLeft} days left`
                    }
                  </Text>
                </View>
                
                {test.status === 'upcoming' && test.daysLeft <= 3 && (
                  <View className="bg-red-50 px-2 py-1 rounded-full">
                    <Text className="text-red-700 text-xs font-medium">URGENT</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
