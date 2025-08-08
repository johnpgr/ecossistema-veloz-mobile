import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const labData = [
  {
    id: 1,
    name: 'Sala L101',
    room: 'L101',
    schedule: [
      { time: '08:00-10:00', teacher: 'Dr. Smith', class: 'Programação I', available: false },
      { time: '10:00-12:00', teacher: 'Prof. Johnson', class: 'Estruturas de Dados', available: false },
      { time: '14:00-16:00', teacher: '', class: '', available: true },
      { time: '16:00-18:00', teacher: 'Dr. Brown', class: 'Desenvolvimento Web', available: false },
    ]
  },
  {
    id: 2,
    name: 'Sala L102',
    room: 'L102',
    schedule: [
      { time: '08:00-10:00', teacher: '', class: '', available: true },
      { time: '10:00-12:00', teacher: 'Dr. Wilson', class: 'Banco de Dados', available: false },
      { time: '14:00-16:00', teacher: 'Prof. Davis', class: 'Engenharia de Software', available: false },
      { time: '16:00-18:00', teacher: '', class: '', available: true },
    ]
  },
  {
    id: 3,
    name: 'Sala L103',
    room: 'L103',
    schedule: [
      { time: '08:00-10:00', teacher: 'Dr. Miller', class: 'IA & Aprendizado de Máquina', available: false },
      { time: '10:00-12:00', teacher: '', class: '', available: true },
      { time: '14:00-16:00', teacher: '', class: '', available: true },
      { time: '16:00-18:00', teacher: 'Prof. Garcia', class: 'Desenvolvimento Mobile', available: false },
    ]
  }
];

const dateTimeFormatPTBR = new Intl.DateTimeFormat('pt-BR', {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
});

export default function GestaoLaboratoriosScreen() {
  const [currentDate] = React.useState(() => dateTimeFormatPTBR.format(new Date()));

  return (
    <SafeAreaView className="flex-1 bg-gray-50 pb-16">
      <View className="px-4 py-6 bg-blue-600">
        <Text className="text-white text-2xl font-bold">Gestão de laboratórios</Text>
        <Text className="text-blue-100 mt-1">{currentDate}</Text>
      </View>

      <ScrollView className="flex-1 px-4 py-4">
        {labData.map((lab) => (
          <View key={lab.id} className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            <View className="bg-blue-50 px-4 py-3 border-b border-gray-200">
              <View className="flex-row items-center">
                <IconSymbol name="desktopcomputer" color="#3b82f6" size={16} />
                <Text className="text-lg font-semibold text-gray-800 ml-2">{lab.name}</Text>
              </View>
            </View>

            <View className="p-4">
              {lab.schedule.map((slot, index) => (
                <View key={index} className={`flex-row items-center justify-between py-3 ${index !== lab.schedule.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <View className="flex-row items-center flex-1">
                    <IconSymbol name="clock" size={16} color="#6b7280" />
                    <Text className="text-gray-700 font-medium ml-2">{slot.time}</Text>
                  </View>

                  {slot.available ? (
                    <View className="flex-row flex-1">
                      <View className="bg-green-100 px-3 py-1 rounded-full">
                        <Text className="text-green-700 text-sm font-medium">Disponível</Text>
                      </View>
                    </View>
                  ) : (
                    <View className="flex-1 ml-4">
                      <View className="flex-row items-center mb-1">
                        <IconSymbol name="person" size={16} color="#6b7280" />
                        <Text className="text-gray-700 text-sm ml-1">{slot.teacher}</Text>
                      </View>
                      <Text className="text-gray-600 text-sm">{slot.class}</Text>
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
