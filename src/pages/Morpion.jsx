import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Modal, Button, StyleSheet } from 'react-native';
import SoundPlayer from 'react-native-sound-player'; // Importez la bibliothèque SoundPlayer

const backgroundImage = require('../../assets/image/morpion.png'); // Chemin de votre image de fond

const Square = ({ value, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.square}>
        <Text style={styles.squareText}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Board = ({ squares, onPress }) => {
  return (
    <View style={styles.board}>
      <View style={styles.row}>
        <Square value={squares[0]} onPress={() => onPress(0)} />
        <Square value={squares[1]} onPress={() => onPress(1)} />
        <Square value={squares[2]} onPress={() => onPress(2)} />
      </View>
      <View style={styles.row}>
        <Square value={squares[3]} onPress={() => onPress(3)} />
        <Square value={squares[4]} onPress={() => onPress(4)} />
        <Square value={squares[5]} onPress={() => onPress(5)} />
      </View>
      <View style={styles.row}>
        <Square value={squares[6]} onPress={() => onPress(6)} />
        <Square value={squares[7]} onPress={() => onPress(7)} />
        <Square value={squares[8]} onPress={() => onPress(8)} />
      </View>
    </View>
  );
};

const Morpion = ({ route }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const againstComputer = route.params?.againstComputer;

  useEffect(() => {
    // Si c'est au tour de l'ordinateur (O) de jouer
    if (againstComputer && !xIsNext) {
      const computerMove = calculateComputerMove(squares);
      if (computerMove !== null) {
        handleSquareClick(computerMove);
      }
    }
  }, [squares]);

  const handleSquareClick = (i) => {
    const squaresCopy = [...squares];
    if (calculateWinner(squaresCopy) || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);

    // Jouer le son à chaque coup
    try {
      SoundPlayer.playSoundFile('../../assets/Audio/SoundPlayer1.mp3', SoundPlayer.MAIN_BUNDLE); // Remplacez 'bonus-143026 (1).mp3' par le nom de votre fichier audio de coup
    } catch (e) {
      console.log(`Impossible de lire le fichier audio`, e);
    }

    const winner = calculateWinner(squaresCopy);
    if (winner) {
      setWinner(winner);
      setShowModal(true);
      // Jouer le son de victoire si un joueur gagne
      try {
        SoundPlayer.playSoundFile('../../assets/Audio/SoundPlayer2.mp3', SoundPlayer.MAIN_BUNDLE); // Remplacez 'bonus-143026 (1).mp3' par le nom de votre fichier audio de victoire
      } catch (e) {
        console.log(`Impossible de lire le fichier audio`, e);
      }
    } else if (!squaresCopy.includes(null)) {
      setShowModal(true);
      setWinner('Égalité');
    }
  };

  const resetGame = () => {
    setShowModal(false);
    setWinner(null);
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  let status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <View style={styles.modalContainer}>
        <Text>{status}</Text>
        <Board squares={squares} onPress={handleSquareClick} />
        <Modal
          visible={showModal}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setShowModal(false)}
        >
          <View style={styles.modalView}>
            <View style={styles.modalContent}>
              <Text>{`${winner === 'Égalité' ? 'Égalité !' : `${winner} A GAGNÉ :) !`}`}</Text>
              <Button title="Jouer encore" onPress={resetGame} />
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const calculateComputerMove = (squares) => {
  // Implémentez ici la logique de mouvement de l'ordinateur
  // Par exemple, vous pouvez choisir une case vide au hasard
  const emptySquares = squares.reduce((acc, square, index) => {
    if (square === null) {
      acc.push(index);
    }
    return acc;
  }, []);
  const randomIndex = Math.floor(Math.random() * emptySquares.length);
  return emptySquares[randomIndex];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  board: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Couleur de fond de la grille
    padding: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 50,
    height: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Couleur de fond des carrés
  },
  squareText: {
    fontSize: 20,
  },
});

export default Morpion;
