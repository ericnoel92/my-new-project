import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ROWS = 6;
const COLS = 7;

const Puissance4 = () => {
  const [board, setBoard] = useState(Array.from({ length: ROWS }, () => Array.from({ length: COLS }, () => null)));
  const [player, setPlayer] = useState('red');
  const [winner, setWinner] = useState(null);

  const dropToken = (col) => {
    if (winner || isColumnFull(col)) return;

    const newBoard = [...board];
    for (let i = ROWS - 1; i >= 0; i--) {
      if (!newBoard[i][col]) {
        newBoard[i][col] = player;
        break;
      }
    }

    setBoard(newBoard);
    checkWinner(newBoard);
    setPlayer(player === 'red' ? 'yellow' : 'red');
  };

  const isColumnFull = (col) => {
    return board[0][col] !== null;
  };

  const checkWinner = (board) => {
    // Horizontal
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col <= COLS - 4; col++) {
        if (
          board[row][col] &&
          board[row][col] === board[row][col + 1] &&
          board[row][col] === board[row][col + 2] &&
          board[row][col] === board[row][col + 3]
        ) {
          setWinner(board[row][col]);
          return;
        }
      }
    }

    // Vertical
    for (let row = 0; row <= ROWS - 4; row++) {
      for (let col = 0; col < COLS; col++) {
        if (
          board[row][col] &&
          board[row][col] === board[row + 1][col] &&
          board[row][col] === board[row + 2][col] &&
          board[row][col] === board[row + 3][col]
        ) {
          setWinner(board[row][col]);
          return;
        }
      }
    }

    // Diagonal \
    for (let row = 0; row <= ROWS - 4; row++) {
      for (let col = 0; col <= COLS - 4; col++) {
        if (
          board[row][col] &&
          board[row][col] === board[row + 1][col + 1] &&
          board[row][col] === board[row + 2][col + 2] &&
          board[row][col] === board[row + 3][col + 3]
        ) {
          setWinner(board[row][col]);
          return;
        }
      }
    }

    // Diagonal /
    for (let row = 0; row <= ROWS - 4; row++) {
      for (let col = 3; col < COLS; col++) {
        if (
          board[row][col] &&
          board[row][col] === board[row + 1][col - 1] &&
          board[row][col] === board[row + 2][col - 2] &&
          board[row][col] === board[row + 3][col - 3]
        ) {
          setWinner(board[row][col]);
          return;
        }
      }
    }
  };

  const renderCell = (row, col) => {
    return (
      <TouchableOpacity
        key={`${row}-${col}`}
        style={[styles.cell, { backgroundColor: board[row][col] || '#fff' }]}
        onPress={() => dropToken(col)}
        disabled={!!winner}
      />
    );
  };

  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map((_, colIndex) => renderCell(rowIndex, colIndex))}
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{winner ? `${winner.toUpperCase()} wins!` : `Player ${player.toUpperCase()}'s turn`}</Text>
      <View style={styles.board}>{renderBoard()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  board: {
    flexDirection: 'column-reverse',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default Puissance4;
