import { mockCursos } from '@/assets/mock-data';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SafeAreaView } from '@/components/ui/SafeAreaView';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { getAttendanceColor, getTestScoreColor } from '../common';

export default function CursoDetailsScreen() {
  const { id } = useLocalSearchParams();
  const curso = mockCursos.find((c)=> c.id === parseInt(id as string))

  if(!curso) return null

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="px-4 py-6 bg-blue-600">
        <Text className="text-white text-2xl font-bold">{curso.name}</Text>
        <Text className="text-blue-100 mt-1">{curso.code}</Text>
      </View>

      <ScrollView className="flex-1 px-4 mt-4">
        <View className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Informações básicas</Text>

          <View className="space-y-3">
            <View className="flex-row items-center">
              <IconSymbol name="person" size={18} color="#6b7280" />
              <Text className="text-gray-700 ml-3 font-medium">Professor(a)</Text>
              <Text className="text-gray-600 ml-auto">{curso.teacher}</Text>
            </View>

            <View className="flex-row items-center">
              <IconSymbol name="pin" size={18} color="#6b7280" />
              <Text className="text-gray-700 ml-3 font-medium">Sala de aula</Text>
              <Text className="text-gray-600 ml-auto">{curso.room}</Text>
            </View>

            <View className="flex-row items-center">
              <IconSymbol name="calendar" size={18} color="#6b7280" />
              <Text className="text-gray-700 ml-3 font-medium">Período</Text>
              <Text className="text-gray-600 ml-auto">{curso.semester}</Text>
            </View>
          </View>
        </View>

        <View className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Presença</Text>

          <View className="flex-row items-center justify-between">
            <Text className="text-gray-700 font-medium">Faltas</Text>
            <View className={`px-3 py-1 rounded-full ${getAttendanceColor(curso.currentAbsences, curso.maxAbsences)}`}>
              <Text className="font-medium text-sm">
                {curso.currentAbsences}/{curso.maxAbsences}
              </Text>
            </View>
          </View>

          <View className="mt-3 bg-gray-200 rounded-full h-2">
            <View
              className={`h-2 rounded-full ${curso.currentAbsences / curso.maxAbsences >= 0.8 ? 'bg-red-500' : curso.currentAbsences / curso.maxAbsences >= 0.6 ? 'bg-yellow-500' : 'bg-green-500'}`}
              style={{ width: `${(curso.currentAbsences / curso.maxAbsences) * 100}%` }}
            />
          </View>

          <Text className="text-gray-500 text-xs mt-2">
            {curso.maxAbsences - curso.currentAbsences} faltas restando
          </Text>
        </View>

        <View className="bg-white rounded-lg shadow-sm p-4">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Provas</Text>

          <View className="space-y-3">
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-gray-700 font-medium">1ª Avaliação</Text>
              {curso.finalTests.midterm.score !== null ? (
                <View className={`px-3 py-1 rounded-full ${getTestScoreColor(curso.finalTests.midterm.score, curso.finalTests.midterm.maxScore)}`}>
                  <Text className="font-medium text-sm">
                    {curso.finalTests.midterm.score}/{curso.finalTests.midterm.maxScore}
                  </Text>
                </View>
              ) : (
                <View className="px-3 py-1 rounded-full bg-gray-100">
                  <Text className="font-medium text-sm text-gray-600">Not taken</Text>
                </View>
              )}
            </View>

            <View className="flex-row items-center justify-between">
              <Text className="text-gray-700 font-medium">2ª Avaliação</Text>
              {curso.finalTests.final.score !== null ? (
                <View className={`px-3 py-1 rounded-full ${getTestScoreColor(curso.finalTests.final.score, curso.finalTests.final.maxScore)}`}>
                  <Text className="font-medium text-sm">
                    {curso.finalTests.final.score}/{curso.finalTests.final.maxScore}
                  </Text>
                </View>
              ) : (
                <View className="px-3 py-1 rounded-full bg-blue-100">
                  <Text className="font-medium text-sm text-blue-600">-</Text>
                </View>
              )}
            </View>
          </View>
        </View>

        <View className="bg-white rounded-lg shadow-sm p-4 mt-3">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Horários de aula</Text>

          {curso.schedule.map((schedule, index) => (
            <View key={index} className={`flex-row items-center justify-between py-3 ${index !== curso.schedule.length - 1 ? 'border-b border-gray-100' : ''}`}>
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
