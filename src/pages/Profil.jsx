// Profil.js
import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage } from 'react-native';

export default class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {} // Initialisez l'utilisateur avec un objet vide
    };
  }

  componentDidMount() {
    // Récupérez les informations de l'utilisateur à partir d'AsyncStorage
    AsyncStorage.getItem('user').then((user) => {
      if (user) {
        this.setState({ user: JSON.parse(user) });
      }
    });
  }

  render() {
    const { user } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profil de {user.name}</Text>
        <Text>Email: {user.email}</Text>
        <Image source={{ uri: user.profileImage }} style={{ width: 100, height: 100, marginTop: 20 }} />
      </View>
    );
  }
}
