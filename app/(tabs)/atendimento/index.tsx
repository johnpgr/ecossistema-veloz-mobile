import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const serviceTypes = [
  { id: 1, name: 'Academic Records', description: 'Request transcripts and certificates' },
  { id: 2, name: 'Course Registration', description: 'Register for courses or make changes' },
  { id: 3, name: 'Financial Aid', description: 'Apply for scholarships and financial assistance' },
  { id: 4, name: 'Technical Support', description: 'IT and technical assistance requests' },
  { id: 5, name: 'General Inquiry', description: 'Other academic or administrative requests' },
];

const mockRequests = [
  { id: 1, type: 'Academic Records', description: 'Transcript request for job application', status: 'deferido', date: '2024-01-15' },
  { id: 2, type: 'Course Registration', description: 'Add Advanced Mathematics course', status: 'pendente', date: '2024-01-20' },
  { id: 3, type: 'Technical Support', description: 'Password reset for student portal', status: 'pendente', date: '2024-01-22' },
];

export default function ServicesScreen() {
  const router = useRouter()
  const getStatusColor = (status) => {
    switch (status) {
      case 'deferido': return 'text-green-600';
      case 'pendente': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'deferido': return <IconSymbol name="checkmark.circle" size={16} color="#16a34a" />;
      case 'pendente': return <IconSymbol name="exclamationmark.circle" size={16} color="#3b82f6" />;
      default: return <IconSymbol name="clock" size={16} color="#6b7280" />;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="px-4 py-6 bg-green-800">
        <Text className="text-white text-2xl font-bold">Atendimento do aluno</Text>
        <Text className="text-green-100 mt-1">Realize requisições de atendimento com o coordenador de seu curso</Text>
      </View>

      <ScrollView className="flex-1 px-4 py-4">
        <TouchableOpacity
          className="bg-green-800 py-4 px-6 rounded-lg mb-6 flex-row items-center justify-center"
          onPress={() => router.push('/(tabs)/atendimento/form')}
        >
          <IconSymbol name="doc.text" size={20} color="white" />
          <Text className="text-white font-semibold text-lg ml-2">Novo atendimento</Text>
        </TouchableOpacity>

        <View className="bg-white rounded-lg shadow-sm overflow-hidden">
          <View className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <Text className="text-lg font-semibold text-gray-800">Histórico de atendimento</Text>
          </View>

          <View className="p-4">
            {mockRequests.map((request) => (
              <View key={request.id} className={`py-4 ${request.id !== mockRequests.length ? 'border-b border-gray-100' : ''}`}>
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="font-semibold text-gray-800">{request.type}</Text>
                  <View className="flex-row items-center">
                    {getStatusIcon(request.status)}
                    <Text className={`ml-1 text-sm font-medium capitalize ${getStatusColor(request.status)}`}>
                      {request.status.replace('_', ' ')}
                    </Text>
                  </View>
                </View>
                <Text className="text-gray-600 text-sm mb-2">{request.description}</Text>
                <Text className="text-gray-500 text-xs">Submitted: {request.date}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
