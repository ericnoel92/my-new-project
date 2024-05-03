import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const StickMan = ({ position }) => {
  return (
    <View style={[styles.stickMan, { left: position.x, bottom: position.y }]}>
      {/* Dessinez le stick man ici */}
      <View style={styles.head} />
      <View style={styles.body} />
      <View style={styles.arm} />
      <View style={[styles.arm, styles.rightArm]} />
      <View style={styles.leg} />
      <View style={[styles.leg, styles.rightLeg]} />
    </View>
  );
};

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveLeft = () => {
    setPosition(prevPos => ({ ...prevPos, x: prevPos.x - 10 }));
  };

  const moveRight = () => {
    setPosition(prevPos => ({ ...prevPos, x: prevPos.x + 10 }));
  };

  const jump = () => {
    setPosition(prevPos => ({ ...prevPos, y: prevPos.y + 50 }));
    setTimeout(() => {
      setPosition(prevPos => ({ ...prevPos, y: prevPos.y - 50 }));
    }, 500);
  };

  const punch = () => {
    // Déplace le personnage vers le bas
    setPosition(prevPos => ({ ...prevPos, y: prevPos.y + 50 }));

    // Remet le personnage à sa position initiale après un court délai
    setTimeout(() => {
      setPosition(prevPos => ({ ...prevPos, y: prevPos.y - 50 }));
    }, 500);
  };

  const kick = () => {
    // Déplace le personnage vers le bas
    setPosition(prevPos => ({ ...prevPos, y: prevPos.y + 50 }));

    // Remet le personnage à sa position initiale après un court délai
    setTimeout(() => {
      setPosition(prevPos => ({ ...prevPos, y: prevPos.y - 50 }));
    }, 500);
  };

  return (
    <View style={styles.container}>
      <StickMan position={position} />
      <TouchableOpacity onPress={moveLeft} style={styles.button}>
        <Text>Left</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={moveRight} style={styles.button}>
        <Text>Right</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={jump} style={styles.button}>
        <Text>Jump</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={punch} style={styles.button}>
        <Text>Punch</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={kick} style={styles.button}>
        <Text>Kick</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stickMan: {
    position: 'absolute',
  },
  head: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'black',
    marginBottom: 10,
  },
  body: {
    width: 10,
    height: 40,
    backgroundColor: 'black',
    marginBottom: 10,
  },
  arm: {
    width: 10,
    height: 30,
    backgroundColor: 'black',
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
  },
  rightArm: {
    transform: [{ rotate: '-45deg' }],
    right: -10,
  },
  leg: {
    width: 10,
    height: 30,
    backgroundColor: 'black',
    marginBottom: 10,
  },
  rightLeg: {
    right: 5,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 5,
  },
});
