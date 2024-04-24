import React, { useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Home', // Optionnel : changer le titre de la page
    });
  }, []);

  const goToMorpion = () => {
    navigation.navigate('Morpion');
  };

  return (
    <View>
      <Text>Comment ça va :)</Text>
      <Text>Mes premiers pas sur React Native Bimmmm!!!!!! :) </Text>
      <Button
        title="Jouer au Morpion"
        onPress={goToMorpion}
      />
    </View>
  );
};

export default HomePage;
