import React, { useEffect } from 'react';
import { View, Button, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

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

  const goToInscription = () => {
    navigation.navigate('Inscription');
  };

  const goToConnexion = () => {
    navigation.navigate('Connexion');
  };

  const goToPuissance4 = () => {
    navigation.navigate('Puissance4');
  };

  const goStickMan = () => {
    navigation.navigate('StickMan');
  };

  return (
    <View>
      <Text>Comment ça va :)</Text>
      <Text> </Text>
      <Text>Mes premiers pas sur React Native Bimmmm!!!!!!  </Text>
      <Text>
        <Icon name="smile-o" size={30} color="#900" />
      </Text>
      <Icon name="gamepad" size={30} color="#000" />
      <Button
        title="Jouer au Morpion contre un ami"
        onPress={goToMorpionWithFriend}
      />
      <Button
        title="Jouer au Morpion contre le téléphone"
        onPress={goToMorpionWithComputer}
      />
      <Button
        title="Inscription"
        onPress={goToInscription}
      />
      <Button
        title="Connexion"
        onPress={goToConnexion}
      />
      <Button
        title="Puissance 4"
        onPress={goToPuissance4}
      />
      <Button
        title="Stick Man"
        onPress={goStickMan}
      />
      <Image source={require('../../assets/image/morpion.png')} />
    </View>
  );
};

export default HomePage;
