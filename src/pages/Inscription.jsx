// InscriptionPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const InscriptionPage = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Vérifier si tous les champs sont remplis
    if (nom && prenom && email && motDePasse) {
      // Envoyer les données à votre API PHP avec Axios
      axios.post('http://localhost:127.0.0.1/api/morpion/insert', {
        nom: nom,
        prenom: prenom,
        email: email,
        motDePasse: motDePasse
      })
      .then(response => {
        console.log('Réponse de l\'API:', response.data);
        // Traiter la réponse de l'API ici
        // Par exemple, rediriger vers la page de connexion si l'inscription est réussie
        navigation.navigate('Connexion');
      })
      .catch(error => {
        console.error('Erreur lors de la requête:', error);
        // Gérer les erreurs si nécessaire
      });
    } else {
      // Afficher un message d'erreur ou une alerte indiquant que tous les champs doivent être remplis
      alert('Veuillez remplir tous les champs');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={nom}
        onChangeText={setNom}
      />
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        value={prenom}
        onChangeText={setPrenom}
      />
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
      <Button title="S'inscrire" onPress={handleSubmit} disabled={!nom || !prenom || !email || !motDePasse} />
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

export default InscriptionPage;
