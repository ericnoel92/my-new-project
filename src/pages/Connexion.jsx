
import React, { useState } from 'react';

import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

import axios from 'axios';

import { useNavigation } from '@react-navigation/native';
 
const ConnexionPage = () => {

  const [email, setEmail] = useState('');

  const [motDePasse, setMotDePasse] = useState('');

  const navigation = useNavigation();
 
  const handleSubmit = async () => {

    if (email && motDePasse) {

      try {

        console.log('Attempting to connect to the server...');

        const response = await axios.post('http://localhost:8000/connexion', {

          email: email,

          mot_de_passe: motDePasse

        });

        console.log('Réponse de l\'API:', response.data);

        // Assume response.data contains success indicator

        if (response.data.success) {

          navigation.navigate('HomePage');

        } else {

          Alert.alert('Erreur', 'Email ou mot de passe incorrect.');

        }

      } catch (error) {

        console.error('Erreur lors de la requête:', error);

        console.log('Erreur exacte:', error.message);

        Alert.alert('Erreur', 'Impossible de se connecter. Veuillez réessayer.');

      }

    } else {

      Alert.alert('Erreur', 'Veuillez remplir tous les champs');

    }

  };
 
  return (

    <View style={styles.container}>

      <Text style={styles.title}>Connexion</Text>

      <TextInput

        style={styles.input}

        placeholder="Email"

        value={email}

        onChangeText={setEmail}

        keyboardType="email-address"

      />

      <TextInput

        style={styles.input}

        placeholder="Mot de passe"

        value={motDePasse}

        onChangeText={setMotDePasse}

        secureTextEntry

      />

      <Button title="Se connecter" onPress={handleSubmit} disabled={!email || !motDePasse} />

    </View>

  );

};
 
const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    paddingHorizontal: 20,

  },

  title: {

    fontSize: 24,

    marginBottom: 20,

  },

  input: {

    width: '100%',

    height: 40,

    borderWidth: 1,

    borderColor: '#ccc',

    borderRadius: 5,

    paddingHorizontal: 10,

    marginBottom: 10,

  },

});
 
export default ConnexionPage;
