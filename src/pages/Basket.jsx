import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, PanResponder, Button, Alert } from 'react-native';

const ScoreBoard = () => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [activePlayer, setActivePlayer] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [ballPosition, setBallPosition] = useState({ x: 75, y: 150 }); // Position initiale du ballon
  const [player1Tries, setPlayer1Tries] = useState(5);
  const [player2Tries, setPlayer2Tries] = useState(5);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (timeLeft === 0 || player1Score === 10 || player2Score === 10) {
      setGameOver(true);
    }
  }, [timeLeft, player1Score, player2Score]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!gameOver) {
        setTimeLeft(prevTime => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [gameOver]);

  useEffect(() => {
    if (gameOver) {
      let winner = '';
      if (player1Score === 10) {
        winner = 'Player 1';
      } else if (player2Score === 10) {
        winner = 'Player 2';
      } else {
        winner = 'Time\'s up!';
      }
      alert(`Game Over! ${winner} wins!`);
    }
  }, [gameOver]);

  const handleShoot = () => {
    if (!gameOver) {
      const randomScore = Math.random() < 0.5 ? 1 : 0; // 50% chance to score
      if (activePlayer === 1) {
        setPlayer1Score(prevScore => prevScore + randomScore);
        setPlayer1Tries(prevTries => prevTries - 1);
        if (player1Tries === 1) {
          Alert.alert('Player 1 has finished their turn!');
        }
      } else {
        setPlayer2Score(prevScore => prevScore + randomScore);
        setPlayer2Tries(prevTries => prevTries - 1);
        if (player2Tries === 1) {
          Alert.alert('Player 2 has finished their turn!');
        }
      }
      setActivePlayer(activePlayer === 1 ? 2 : 1);
      // Réinitialiser la position du ballon après le tir
      setBallPosition({ x: 75, y: 150 });
    }
  };

  const handleBallPress = () => {
    if (!gameOver && activePlayer === 1) {
      handleShoot();
    }
  };

  const handleRestart = () => {
    // Réinitialiser les scores, le temps restant, le statut de fin de partie et le nombre d'essais des joueurs
    setPlayer1Score(0);
    setPlayer2Score(0);
    setTimeLeft(60);
    setGameOver(false);
    setPlayer1Tries(5);
    setPlayer2Tries(5);
  };

  const handleMove = (evt) => {
    if (!gameOver && activePlayer === 1 && isDragging) {
      const x = evt.nativeEvent.locationX;
      const y = evt.nativeEvent.locationY;
      setBallPosition({ x: x - 25, y: y - 25 });
    }
  };

  const handleStartDrag = () => {
    setIsDragging(true);
  };

  const handleEndDrag = () => {
    setIsDragging(false);
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.field}
        onTouchMove={handleMove}
        onTouchStart={handleStartDrag}
        onTouchEnd={handleEndDrag}
      >
        <View style={styles.basket}></View>
        <View style={{ ...styles.ball, top: ballPosition.y, left: ballPosition.x }}></View>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.text}>Time left: {timeLeft}</Text>
        <Text style={styles.text}>Player 1: {player1Score}</Text>
        <Text style={styles.text}>Player 2: {player2Score}</Text>
        <Text style={styles.text}>Player 1 Tries Left: {player1Tries}</Text>
        <Text style={styles.text}>Player 2 Tries Left: {player2Tries}</Text>
        <Button title="Restart" onPress={handleRestart} disabled={!gameOver} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    marginBottom: 10,
  },
  field: {
    width: 150,
    height: 300,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'transparent',
    position: 'relative',
    marginBottom: 20,
  },
  basket: {
    width: 60,
    height: 40,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'black',
    position: 'absolute',
    top: 0,
    left: 45,
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'orange',
    position: 'absolute',
  },
  scoreContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginBottom: 20
  }
});

export default ScoreBoard;
