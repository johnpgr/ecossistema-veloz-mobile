import { IconSymbol } from '@/components/ui/IconSymbol';
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
  { id: 1, type: 'Academic Records', description: 'Transcript request for job application', status: 'completed', date: '2024-01-15' },
  { id: 2, type: 'Course Registration', description: 'Add Advanced Mathematics course', status: 'pending', date: '2024-01-20' },
  { id: 3, type: 'Technical Support', description: 'Password reset for student portal', status: 'in_progress', date: '2024-01-22' },
];

export default function ServicesScreen() {
  const [selectedService, setSelectedService] = useState(null);
  const [requestDescription, setRequestDescription] = useState('');
  const [showRequestForm, setShowRequestForm] = useState(false);

  const handleSubmitRequest = () => {
    if (!selectedService || !requestDescription.trim()) {
      Alert.alert('Error', 'Please select a service type and provide a description.');
      return;
    }

    Alert.alert('Success', 'Your request has been submitted successfully!', [
      { text: 'OK', onPress: () => {
        setShowRequestForm(false);
        setSelectedService(null);
        setRequestDescription('');
      }}
    ]);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600';
      case 'in_progress': return 'text-blue-600';
      case 'pending': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <IconSymbol name="checkmark.circle" size={16} color="#16a34a" />;
      case 'in_progress': return <IconSymbol name="clock" size={16} color="#3b82f6" />;
      case 'pending': return <IconSymbol name="exclamationmark.circle" size={16} color="#eab308" />;
      default: return <IconSymbol name="clock" size={16} color="#6b7280" />;
    }
  };

  if (showRequestForm) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50">
        <View className="px-4 py-6 bg-green-600">
          <Text className="text-white text-2xl font-bold">New Service Request</Text>
        </View>

        <ScrollView className="flex-1 px-4 py-6">
          <View className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <Text className="text-lg font-semibold text-gray-800 mb-4">Select Service Type</Text>
            {serviceTypes.map((service) => (
              <TouchableOpacity
                key={service.id}
                className={`p-4 rounded-lg border-2 mb-3 ${selectedService?.id === service.id ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                onPress={() => setSelectedService(service)}
              >
                <Text className={`font-medium ${selectedService?.id === service.id ? 'text-green-700' : 'text-gray-800'}`}>
                  {service.name}
                </Text>
                <Text className="text-gray-600 text-sm mt-1">{service.description}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <Text className="text-lg font-semibold text-gray-800 mb-4">Request Description</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-3 text-gray-700 min-h-[120px]"
              placeholder="Please describe your request in detail..."
              multiline
              textAlignVertical="top"
              value={requestDescription}
              onChangeText={setRequestDescription}
            />
          </View>

          <View className="flex-row gap-3">
            <TouchableOpacity
              className="flex-1 bg-gray-500 py-3 rounded-lg"
              onPress={() => setShowRequestForm(false)}
            >
              <Text className="text-white text-center font-semibold">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 bg-green-600 py-3 rounded-lg flex-row items-center justify-center"
              onPress={handleSubmitRequest}
            >
              <IconSymbol name="paperplane.fill" size={16} color="white" />
              <Text className="text-white font-semibold ml-2">Submit Request</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="px-4 py-6 bg-green-600">
        <Text className="text-white text-2xl font-bold">Student Services</Text>
        <Text className="text-green-100 mt-1">Request academic and administrative services</Text>
      </View>

      <ScrollView className="flex-1 px-4 py-4">
        <TouchableOpacity
          className="bg-green-600 py-4 px-6 rounded-lg mb-6 flex-row items-center justify-center"
          onPress={() => setShowRequestForm(true)}
        >
          <IconSymbol name="doc.text" size={20} color="white" />
          <Text className="text-white font-semibold text-lg ml-2">New Service Request</Text>
        </TouchableOpacity>

        <View className="bg-white rounded-lg shadow-sm overflow-hidden">
          <View className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <Text className="text-lg font-semibold text-gray-800">My Requests</Text>
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
