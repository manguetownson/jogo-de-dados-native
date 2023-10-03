// Game.js
import React, { useEffect, useState, useStore } from 'react';
import { View, Button, Text } from 'react-native';
import Dice from './Dice.js';

const Game = () => {
  const [playerDiceValue, setPlayerDiceValue] = useState(null);
  const [machineDiceValue, setMachineDiceValue] = useState(null);
  const [gameState, setGameState] = useState('initial'); // 'initial', 'playing', 'won', 'lost'
  const [selectedBet, setSelectedBet] = useState(null); // 'pass', 'dontPass'
  const [point, setPoint] = useState(null);

  const Gamehistory = (gameState, playerResult, machineResult) => {
    const { addToHistory } = useStore()
  };

  const handleRollDice = () => {
    // Lógica para lançar os dados e determinar os resultados
    // Atualize playerDiceValue, machineDiceValue, gameState e point de acordo

    const playerResult = Math.floor(Math.random() * 6) + 1;
    const machineResult = Math.floor(Math.random() * 6) + 1;

    setPlayerDiceValue(playerResult);
    setMachineDiceValue(machineResult);

    evaluateBets(playerResult, machineResult);
  };

  const evaluateBets = (playerResult, machineResult) => {
    if (selectedBet === 'pass') {
      if (point) {
        if (playerResult === point) {
          setGameState('won');
          setPoint(null);
        } else if (playerResult === 7) {
          setGameState('lost');
          setPoint(null);
        }
      } else {
        if (playerResult === 7 || playerResult === 11) {
          setGameState('won');
        } else if (playerResult === 2 || playerResult === 3 || playerResult === 12) {
          setGameState('lost');
        } else {
          setPoint(playerResult);
        }
      }
    } else if (selectedBet === 'dontPass') {
      if (point) {
        if (playerResult === 7) {
          setGameState('won');
          setPoint(null);
        } else if (playerResult === point) {
          setGameState('lost');
          setPoint(null);
        }
      } else {
        if (playerResult === 2 || playerResult === 3) {
          setGameState('won');
        } else if (playerResult === 7 || playerResult === 11) {
          setGameState('lost');
        } else if (playerResult === 12) {
          // Empate (push) - Nenhuma ação necessária para esta implementação básica
        } else {
          setPoint(playerResult);
        }
      }
    }
    if (selectedBet === 'pass') {
        if (point) {
          if (machineResult === point) {
            setGameState('won');
            setPoint(null);
          } else if (machineResult === 7) {
            setGameState('lost');
            setPoint(null);
          }
        } else {
          if (playerResult === 7 || playerResult === 11) {
            setGameState('won');
          } else if (playerResult === 2 || playerResult === 3 || playerResult === 12) {
            setGameState('lost');
          } else {
            setPoint(playerResult);
          }
        }
      } else if (selectedBet === 'dontPass') {
        if (point) {
          if (playerResult === 7) {
            setGameState('won');
            setPoint(null);
          } else if (playerResult === point) {
            setGameState('lost');
            setPoint(null);
          }
        } else {
          if (playerResult === 2 || playerResult === 3) {
            setGameState('won');
          } else if (playerResult === 7 || playerResult === 11) {
            setGameState('lost');
          } else if (playerResult === 12) {
            // Empate (push) - Nenhuma ação necessária para esta implementação básica
          } else {
            setPoint(playerResult);
          }
        }
      }
    if (selectedBet === 'odds') {
        if (point) {
          if (playerResult === point) {
            setGameState('won');
            setPoint(null);
          } else if (playerResult === 7) {
            setGameState('lost');
            setPoint(null);
          }
        }
      }
    
      // Avaliação para a aposta "Lugar Perdido"
    if (selectedBet === 'placeLose') {
        if (point) {
          if (playerResult === 7) {
            setGameState('won');
            setPoint(null);
          } else if (playerResult === point) {
            setGameState('lost');
            setPoint(null);
          }
        }
      }
      if (selectedBet === 'odds') {
        if (point) {
          if (machineResult === point) {
            setGameState('won');
            setPoint(null);
          } else if (machineResult === 7) {
            setGameState('lost');
            setPoint(null);
          }
        }
      }
    
      // Avaliação para a aposta "Lugar Perdido"
      if (selectedBet === 'placeLose') {
        if (point) {
          if (machineResult === 7) {
            setGameState('won');
            setPoint(null);
          } else if (machineResult === point) {
            setGameState('lost');
            setPoint(null);
          }
        }
      }
    if (selectedBet === 'comeOut') {
        if ([2, 3, 12].includes(playerResult)) {
          // Jogador ganhou na aposta "Deitar"
          console.log('won');
          // Adicione sua lógica de ganho aqui
        } else if (playerResult === 7) {
          // Jogador perdeu na aposta "Deitar"
          console.log('lost');
        }
      }
    if (selectedBet === 'hardways') {
        // Número escolhido para a aposta "Hardways" (exemplo: 4)
        const chosenNumber = 4;
        // Verifica se os dados resultaram no número escolhido como combinação não-dupla
        if ((playerResult === chosenNumber && machineResult === chosenNumber) || (playerResult === 7)) {
          // Jogador ganhou na aposta "Hardways"
          console.log('Jogador ganhou na aposta "Hardways".');
         
        }
      }
      if (selectedBet === 'comeOut') {
        if ([2, 3, 12].includes(playerResult)) {
          // Jogador ganhou na aposta "Deitar"
          console.log('won');
          
        } else if (playerResult === 7) {
          // Jogador perdeu na aposta "Deitar"
          console.log('lost');
          
        }
      }               
  useEffect(() =>{
    // Se o jogo terminou, adiciona o resultado ao histórico
    if (gameState === 'won' || gameState === 'lost') {
      const result = gameState === 'won' ? 'Vitória' : 'Derrota';
      const playInfo = `Resultado: ${result}. Dados: Jogador - ${playerResult}, Máquina - ${machineResult}`;
      addToHistory(playInfo);
    }
  }, [gameState, playerResult, machineResult, addToHistory]);

  }; 
  

  const handleBetSelect = (betType) => {
    setSelectedBet(betType);
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Dice value={playerDiceValue} />
        <Dice value={machineDiceValue} />
      </View>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Button title="Pass Line (Passe)" onPress={() => handleBetSelect('pass')} />
        <Button title="Não Passe" onPress={() => handleBetSelect('dontPass')} />
        <Button title="Aposta de Probabilidades" onPress={() => handleBetSelect('odds')} />
        <Button title="Lugar Perdido" onPress={() => handleBetSelect('placeLose')} />
        <Button title="Deitar" onPress={() => handleBetSelect('deitar')} />
        <Button title="Hardways" onPress={() => handleBetSelect('hardways')} />
      </View>
      <Button title="Lançar Dados" onPress={()=>handleRollDice()} />
      {gameState === 'won' && <Text>Você ganhou!</Text>}
      {gameState === 'lost' && <Text>Você perdeu.</Text>}
      {selectedBet && <Text>Você apostou: {selectedBet}</Text>}
      {point && <Text>Ponto: {point}</Text>}
    </View>
  );
};

export default Game;
