import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, Modal } from 'react-native';
import Game from '../components/Game.js';
import HistoryScreen from './HistoryScreen.js'; 

const GameScreen = () => {
    const [isHistoryVisible, setIsHistoryVisible] = useState(false);
    const [historyData, setHistoryData] = useState([]);
  
    // Função para mostrar o modal de histórico
    const showHistoryModal = () => {
      setIsHistoryVisible(true);
    };
  
    // Função para esconder o modal de histórico
    const hideHistoryModal = () => {
      setIsHistoryVisible(false);
    };
    
    // Função para adicionar uma entrada no histórico
    const addToHistory = (entry) => {
      setHistoryData([...historyData, entry]);
    };
  
    return (
      <View style={styles.container}>
        <Game addToHistory={addToHistory} />   
        <Button title="Ver Histórico" onPress={showHistoryModal} />
        
        
        <Modal
          visible={isHistoryVisible}
          animationType="slide"
          transparent={false}
          onRequestClose={hideHistoryModal}
        >
          <View style={styles.modalContainer}>
            <Button title="Fechar" onPress={hideHistoryModal} />
            <HistoryScreen data={historyData} /> 
          </View>
        </Modal>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
  });
  
  export default GameScreen;
  
