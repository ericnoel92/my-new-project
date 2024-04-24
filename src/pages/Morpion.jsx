import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

const Square = ({ value, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{
        width: 50,
        height: 50,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Board = ({ squares, onPress }) => {
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Square value={squares[0]} onPress={() => onPress(0)} />
        <Square value={squares[1]} onPress={() => onPress(1)} />
        <Square value={squares[2]} onPress={() => onPress(2)} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Square value={squares[3]} onPress={() => onPress(3)} />
        <Square value={squares[4]} onPress={() => onPress(4)} />
        <Square value={squares[5]} onPress={() => onPress(5)} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Square value={squares[6]} onPress={() => onPress(6)} />
        <Square value={squares[7]} onPress={() => onPress(7)} />
        <Square value={squares[8]} onPress={() => onPress(8)} />
      </View>
    </View>
  );
};

const Morpion = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const squaresCopy = [...squares];
    if (calculateWinner(squaresCopy) || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);

    if (calculateWinner(squaresCopy)) {
      // Si un joueur a gagné, réinitialiser les cases du tableau
      setSquares(Array(9).fill(null));
    }
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <ImageBackground source={require('./assets/image/morpion.png')} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{status}</Text>
        <Board squares={squares} onPress={handleClick} />
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

export default Morpion;
