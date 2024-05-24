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

  const goToProfil = () => {
    navigation.navigate('Profil');
  };
const goToBasket = () => {
  navigation.navigate('Basket');
}
  return (
    <View>
      <Text>Comment ça va :)</Text>
      <Text> </Text>
      <Text> </Text>
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
        title="Profil"
        onPress={goToProfil}
      />
      <Button
        title="Basket"
        onPress={goToBasket}
      />
      <Image source={require('../../assets/image/morpion.png')} />
    </View>
  );
};

export default HomePage;
