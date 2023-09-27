import React from 'react';
import { View, Text, FlatList } from 'react-native';

const HistoryScreen = ({ data }) => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Histórico de Jogadas:</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 5 }}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HistoryScreen;
