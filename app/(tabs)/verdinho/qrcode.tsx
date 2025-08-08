import { SafeAreaView } from "@/components/ui/SafeAreaView";
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const { width } = Dimensions.get('window');
const qrSize = width * 0.6;

// Mock student data
const studentData = {
  id: 'STU2024001',
  name: 'John Doe',
  course: 'Computer Science',
  year: '3rd Year',
  email: 'john.doe@university.edu'
};

export default function QRCodeScreen() {
  const qrData = JSON.stringify({
    studentId: studentData.id,
    name: studentData.name,
    timestamp: Date.now()
  });

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 items-center justify-center px-4">
        <View className="bg-white rounded-2xl shadow-lg p-8 items-center w-full max-w-sm">
          <Text className="text-2xl font-bold text-gray-800 mb-2">Student QR Code</Text>
          <Text className="text-gray-600 text-center mb-6">
            Show this QR code to check in to university events
          </Text>

          <View className="bg-white p-4 rounded-xl shadow-sm">
            <QRCode
              value={qrData}
              size={qrSize}
              backgroundColor="white"
              color="black"
            />
          </View>

          <View className="mt-6 w-full">
            <View className="bg-gray-50 rounded-lg p-4">
              <Text className="text-sm text-gray-600 mb-1">Student ID</Text>
              <Text className="font-semibold text-gray-800">{studentData.id}</Text>
            </View>
            <View className="bg-gray-50 rounded-lg p-4 mt-2">
              <Text className="text-sm text-gray-600 mb-1">Name</Text>
              <Text className="font-semibold text-gray-800">{studentData.name}</Text>
            </View>
            <View className="bg-gray-50 rounded-lg p-4 mt-2">
              <Text className="text-sm text-gray-600 mb-1">Course</Text>
              <Text className="font-semibold text-gray-800">{studentData.course} - {studentData.year}</Text>
            </View>
          </View>
        </View>

        <Text className="text-gray-500 text-sm text-center mt-6 px-4 pb-4">
          This QR code is unique to you and updates automatically for security
        </Text>
      </View>
    </SafeAreaView>
  );
}
