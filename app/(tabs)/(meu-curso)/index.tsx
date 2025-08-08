import { IconSymbol } from '@/components/ui/IconSymbol';
import { SafeAreaView } from '@/components/ui/SafeAreaView';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { currentStudent, mockCursos } from '../../../assets/mock-data';
import { getAttendanceColor, getTestScoreColor } from './common';

export default function MeuCursoScreen() {
  const router = useRouter()

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="px-4 py-6 bg-blue-600">
        <Text className="text-white text-2xl font-bold">Meu curso</Text>
        <Text className="text-blue-100 mt-1">{currentStudent.course} • {currentStudent.period} • {currentStudent.shift}</Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-4">
        {mockCursos.map((curso,index) => (
          <TouchableOpacity
            key={curso.id}
            className={`bg-white rounded-lg shadow-sm overflow-hidden ${index !== mockCursos.length - 1 ? 'mb-4' : 'mb-8'}`}
            onPress={() => router.push(`/(tabs)/(meu-curso)/curso/${curso.id}`)}
          >
            <View className="p-4">
              <View className="flex-row items-start justify-between mb-3">
                <View className="flex-1">
                  <Text className="text-lg font-semibold text-gray-800">{curso.name}</Text>
                  <Text className="text-gray-600 text-sm">{curso.code}</Text>
                </View>
                <View className="flex-col items-end gap-2">
                  <View className={`px-2 py-1 rounded-full ${getAttendanceColor(curso.currentAbsences, curso.maxAbsences)}`}>
                    <Text className="text-xs font-medium">
                      {curso.currentAbsences} / {curso.maxAbsences} Faltas
                    </Text>
                  </View>
                  {curso.finalTests.midterm.score !== null && (
                    <View className={`px-2 py-1 rounded-full ${getTestScoreColor(curso.finalTests.midterm.score, curso.finalTests.midterm.maxScore)}`}>
                      <Text className="text-xs font-medium">
                        1ª Avaliação: {curso.finalTests.midterm.score}
                      </Text>
                    </View>
                  )}
                </View>
              </View>

              <View className="space-y-2">
                <View className="flex-row items-center">
                  <IconSymbol name="person" size={16} color="#6b7280" />
                  <Text className="text-gray-700 ml-2">{curso.teacher}</Text>
                </View>
                <View className="flex-row items-center">
                  <IconSymbol name="location" size={16} color="#6b7280" />
                  <Text className="text-gray-700 ml-2">{curso.room}</Text>
                </View>
                <View className="flex-row items-center">
                  <IconSymbol name="clock" size={16} color="#6b7280" />
                  <Text className="text-gray-700 ml-2">
                    {curso.schedule.map(s => s.day).join(', ')}
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
