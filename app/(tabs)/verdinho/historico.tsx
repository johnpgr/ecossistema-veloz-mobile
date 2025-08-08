import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const attendedEvents = [
	{
		id: 1,
		title: 'Semana de Integração 2024',
		date: '2024-01-15',
		time: '09:00',
		location: 'Auditório Principal',
		checkInTime: '09:15',
	},
	{
		id: 2,
		title: 'Palestra: Futuro da IA',
		date: '2024-01-18',
		time: '14:00',
		location: 'Salão de Conferências',
		checkInTime: '13:55',
	},
	{
		id: 3,
		title: 'Oficina: Construção de Currículo',
		date: '2024-01-20',
		time: '10:00',
		location: 'Sala 201',
		checkInTime: '10:05',
	},
	{
		id: 4,
		title: 'Reunião do Departamento',
		date: '2024-01-22',
		time: '16:00',
		location: 'Departamento de Computação',
		checkInTime: '15:58',
	},
];

export default function EventsHistoryScreen() {
	return (
		<SafeAreaView className="flex-1 pb-16 bg-gray-50">
			<ScrollView className="flex-1 px-4 py-4">
				<View className="bg-white rounded-lg shadow-sm p-4 mb-4">
					<Text className="text-lg font-semibold text-gray-800 mb-2">
						Resumo de Presença
					</Text>
					<View className="flex-row justify-between">
						<View className="items-center">
							<Text className="text-2xl font-bold text-blue-600">
								{attendedEvents.length}
							</Text>
							<Text className="text-gray-600 text-sm">
								Eventos Participados
							</Text>
						</View>
						<View className="items-center">
							<Text className="text-2xl font-bold text-green-600">100%</Text>
							<Text className="text-gray-600 text-sm">Taxa de Presença</Text>
						</View>
						<View className="items-center">
							<Text className="text-2xl font-bold text-purple-600">4</Text>
							<Text className="text-gray-600 text-sm">Este Mês</Text>
						</View>
					</View>
				</View>

				<Text className="text-lg font-semibold text-gray-800 mb-4">
					Histórico de Eventos
				</Text>

				{attendedEvents.map((event) => (
					<View
						key={event.id}
						className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden"
					>
						<View className="p-4">
							<View className="flex-row items-start justify-between mb-3">
								<Text className="text-lg font-semibold text-gray-800 flex-1">
									{event.title}
								</Text>
							</View>

							<View className="space-y-2 mb-3">
								<View className="flex-row items-center">
									<IconSymbol name="calendar" size={16} color="#6b7280" />
									<Text className="text-gray-700 ml-2">{event.date}</Text>
								</View>
								<View className="flex-row items-center">
									<IconSymbol name="clock" size={16} color="#6b7280" />
									<Text className="text-gray-700 ml-2">{event.time}</Text>
								</View>
								<View className="flex-row items-center">
									<IconSymbol name="map" size={16} color="#6b7280" />
									<Text className="text-gray-700 ml-2">{event.location}</Text>
								</View>
							</View>

							<View className="bg-green-50 border border-green-200 rounded-lg p-3 flex-row items-center">
								<IconSymbol name="checkmark.circle" size={16} color="#16a34a" />
								<Text className="text-green-700 font-medium ml-2">
									Confirmado às {event.checkInTime}
								</Text>
							</View>
						</View>
					</View>
				))}
			</ScrollView>
		</SafeAreaView>
	);
}
