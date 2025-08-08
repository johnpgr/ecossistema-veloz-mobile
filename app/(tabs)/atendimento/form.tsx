import { currentStudent } from '@/assets/mock-data';
import * as DocumentPicker from 'expo-document-picker';
import { useRouter } from "expo-router";
import React from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const serviceCategories = [
  { id: 1, name: 'Ajuste de notas', description: 'Solicitação de correção/atualização de notas lançadas no sistema.' },
  { id: 2, name: 'Ass. termo de compromisso de estágio', description: 'Assinatura e validação do termo de compromisso e aditivos de estágio.' },
  { id: 3, name: 'Dispensa de disciplinas', description: 'Pedido de dispensa por equivalência ou aproveitamento de estudos.' },
  { id: 4, name: 'Inclusão de disciplinas', description: 'Solicitação para adicionar disciplinas à sua matrícula atual.' },
  { id: 5, name: 'Mudança de curso', description: 'Solicitação de transferência interna para outro curso.' },
  { id: 6, name: 'Mudança de turma', description: 'Troca de turma/horário na mesma disciplina.' },
  { id: 7, name: 'Mudança de turno', description: 'Alteração de turno (manhã/tarde/noite) no curso.' },
  { id: 8, name: 'Outros', description: 'Demandas administrativas ou acadêmicas não listadas acima.' },
];

export default function AtendimentoFormScreen() {
  const router = useRouter()
  const [selectedService, setSelectedService] = React.useState(null);
  const [requestDescription, setRequestDescription] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [attachment, setAttachment] = React.useState(null);

  async function handlePickDocument() {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: true,
        multiple: false,
      });
      if (!result.canceled) {
        setAttachment(result.assets[0]);
      }
    } catch {
      Alert.alert('Error', 'Não foi possível selecionar o arquivo.');
    }
  }

  function handleSubmitRequest() {
    if (!selectedService || !requestDescription.trim() || !subject.trim()) {
      Alert.alert('Error', 'Please select a service type and provide a description and subject.');
      return;
    }

    Alert.alert('Success', 'Your request has been submitted successfully!', [
      { text: 'OK', onPress: () => {
        setSelectedService(null);
        setSubject('');
        setRequestDescription('');
        setAttachment(null);
        router.back()
      }}
    ]);
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50 pb-20">
      <View className="px-4 py-6 bg-green-800">
        <Text className="text-white text-2xl font-bold">Novo atendimento</Text>
        <Text className="text-green-100 mt-1">Preencha o formulário com o conteúdo de seu atendimento</Text>
      </View>


      <ScrollView className="flex-1 px-4 py-6">
        <View className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Aluno</Text>
          <View className="gap-1">
            <Text className="text-gray-700">
              <Text className="font-semibold">Matrícula: </Text>{currentStudent.enroll}
            </Text>
            <Text className="text-gray-700">
              <Text className="font-semibold">Nome: </Text>{currentStudent.name}
            </Text>
            <Text className="text-gray-700">
              <Text className="font-semibold">Curso: </Text>{currentStudent.course}
            </Text>
            <Text className="text-gray-700">
              <Text className="font-semibold">Período: </Text>{currentStudent.period_absolute ?? currentStudent.period}
            </Text>
            <Text className="text-gray-700">
              <Text className="font-semibold">Coordenador: </Text>{currentStudent.course_chief}
            </Text>
          </View>
        </View>

        <View className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Categoria</Text>
          {serviceCategories.map((service) => (
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
          <Text className="text-lg font-semibold text-gray-800 mb-4">Assunto</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-3 text-gray-700"
            placeholder="Digite o assunto do atendimento..."
            value={subject}
            onChangeText={setSubject}
            returnKeyType="next"
          />
        </View>
        <View className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Anexo</Text>
          {!attachment ? (
            <TouchableOpacity
              className="border border-gray-300 rounded-lg p-3 bg-gray-50"
              onPress={handlePickDocument}
            >
              <Text className="text-gray-700 text-center">Selecionar arquivo</Text>
            </TouchableOpacity>
          ) : (
            <View className="border border-green-200 bg-green-50 rounded-lg p-3">
              <Text className="text-gray-800 font-medium">
                {attachment.name || 'Arquivo selecionado'}
              </Text>
              {attachment.size ? (
                <Text className="text-gray-600 text-sm">
                  {Math.round(attachment.size / 1024)} KB
                </Text>
              ) : null}
              <View className="flex-row gap-3 mt-3">
                <TouchableOpacity
                  className="bg-gray-200 rounded-md px-3 py-2"
                  onPress={handlePickDocument}
                >
                  <Text className="text-gray-800">Trocar arquivo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="bg-red-100 rounded-md px-3 py-2"
                  onPress={() => setAttachment(null)}
                >
                  <Text className="text-red-700">Remover</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
        <View className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Descrição</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-3 text-gray-700 min-h-[120px]"
            placeholder="Digite a descrição do seu atendimento..."
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
            <Text className="text-white text-center font-semibold">Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 bg-green-800 py-3 rounded-lg flex-row items-center justify-center"
            onPress={handleSubmitRequest}
          >
            <Text className="text-white font-semibold ml-2">Registrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
