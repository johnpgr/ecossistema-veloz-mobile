import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { currentStudent, mockCursos } from '../../../assets/mock-data';
import { getAttendanceColor, getTestScoreColor } from './common';

export default function MeuCursoScreen() {
  const router = useRouter()

  return (
    <SafeAreaView className="flex-1 bg-gray-50 pb-16">
      <View className="px-4 py-6 bg-blue-600">
        <Text className="text-white text-2xl font-bold">Meu curso</Text>
        <Text className="text-blue-100 mt-1">{currentStudent.course} • {currentStudent.period} • {currentStudent.shift}</Text>
      </View>

      <ScrollView className="flex-1 px-4 py-4">
        {mockCursos.map((cls) => (
          <TouchableOpacity
            key={cls.id}
            className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden"
            onPress={() => router.push(`/(tabs)/(meu-curso)/curso/${cls.id}`)}
          >
            <View className="p-4">
              <View className="flex-row items-start justify-between mb-3">
                <View className="flex-1">
                  <Text className="text-lg font-semibold text-gray-800">{cls.name}</Text>
                  <Text className="text-gray-600 text-sm">{cls.code}</Text>
                </View>
                <View className="flex-col items-end gap-2">
                  <View className={`px-2 py-1 rounded-full ${getAttendanceColor(cls.currentAbsences, cls.maxAbsences)}`}>
                    <Text className="text-xs font-medium">
                      {cls.currentAbsences} / {cls.maxAbsences} Faltas
                    </Text>
                  </View>
                  {cls.finalTests.midterm.score !== null && (
                    <View className={`px-2 py-1 rounded-full ${getTestScoreColor(cls.finalTests.midterm.score, cls.finalTests.midterm.maxScore)}`}>
                      <Text className="text-xs font-medium">
                        1ª Avaliação: {cls.finalTests.midterm.score}
                      </Text>
                    </View>
                  )}
                </View>
              </View>

              <View className="space-y-2">
                <View className="flex-row items-center">
                  <IconSymbol name="person" size={16} color="#6b7280" />
                  <Text className="text-gray-700 ml-2">{cls.teacher}</Text>
                </View>
                <View className="flex-row items-center">
                  <IconSymbol name="pin" size={16} color="#6b7280" />
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
                <Text className="text-blue-600 text-sm font-medium">Ver detalhes</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
