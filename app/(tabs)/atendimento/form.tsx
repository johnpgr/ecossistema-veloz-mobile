import { IconSymbol } from "@/components/ui/IconSymbol";
import { useRouter } from "expo-router";
import React from "react"
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const serviceTypes = [
  { id: 1, name: 'Academic Records', description: 'Request transcripts and certificates' },
  { id: 2, name: 'Course Registration', description: 'Register for courses or make changes' },
  { id: 3, name: 'Financial Aid', description: 'Apply for scholarships and financial assistance' },
  { id: 4, name: 'Technical Support', description: 'IT and technical assistance requests' },
  { id: 5, name: 'General Inquiry', description: 'Other academic or administrative requests' },
];

export default function AtendimentoFormScreen() {
  const router = useRouter()
  const [selectedService, setSelectedService] = React.useState(null);
  const [requestDescription, setRequestDescription] = React.useState('');

  const handleSubmitRequest = () => {
    if (!selectedService || !requestDescription.trim()) {
      Alert.alert('Error', 'Please select a service type and provide a description.');
      return;
    }

    Alert.alert('Success', 'Your request has been submitted successfully!', [
      { text: 'OK', onPress: () => {
        setSelectedService(null);
        setRequestDescription('');
        router.back()
      }}
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="px-4 py-6 bg-green-800">
        <Text className="text-white text-2xl font-bold">Novo atendimento</Text>
        <Text className="text-green-100 mt-1">Preencha o formulário com o conteúdo de seu atendimento</Text>
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
            onPress={() => router.back()}
          >
            <Text className="text-white text-center font-semibold">Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 bg-green-800 py-3 rounded-lg flex-row items-center justify-center"
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
