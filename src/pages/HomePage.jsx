import React, { useEffect } from 'react';
import { View, Button, Text, Image  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Home', // Optionnel : changer le titre de la page
    });
  }, []);

  const goToMorpionWithFriend = () => {
    navigation.navigate('Morpion', { againstComputer: false });
  };

  const goToMorpionWithComputer = () => {
    navigation.navigate('Morpion', { againstComputer: true });
  };

  return (
    <View>
      <Text>Comment ça va :)</Text>
      <Text> </Text>
      <Text>Mes premiers pas sur React Native Bimmmm!!!!!! :) </Text>
      <Button
        title="Jouer au Morpion contre un ami"
        onPress={goToMorpionWithFriend}
      />
      <Button
        title="Jouer au Morpion contre le téléphone"
        onPress={goToMorpionWithComputer}
      />
      <Image source={require('../../assets/image/morpion.png')} />
    </View>
  );
};

export default HomePage;
