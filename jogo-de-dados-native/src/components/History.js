// History.js
import React, { useEffect } from 'react'; // Importe o hook do Zustand
import { SectionList, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStore } from '../../zustand';


const History = ({ history }) => {
 
  const {history, increaseHistory, clearHistory} = useStore();

  const loadHistory = async () => {
    try {
      const savedHistory = await AsyncStorage.getItem('history');
      if (savedHistory !== null) {
        increaseHistory(JSON.parse(savedHistory));
      }
    } catch (error) {
      console.error('Erro ao carregar o histórico:', error);
    }
  };

  useEffect(() => {
    // Carregar o histórico do AsyncStorage quando o componente é montado
    loadHistory();
  }, []);

  const clearHistoryHandler = () => {
    clearHistory();
    AsyncStorage.removeItem('history');
  };

  return (
    <View>
      <SectionList
        sections={history}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: 'bold' }}>{title}</Text>
        )}
      />
      <View style={{ marginTop: 20 }}>
        <Button title="Limpar Histórico" onPress={clearHistoryHandler} />
      </View>
    </View>
  );
        };

export default History;
