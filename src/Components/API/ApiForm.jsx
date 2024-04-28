axios.post('http://votre-api.com/endpoint-creation-utilisateur', {
  nom: 'John',
  prenom: 'Doe',
  email: 'john.doe@example.com',
  motDePasse: 'motdepasse123',
})
.then(response => {
  console.log('Réponse de l\'API:', response.data);
  // Faites quelque chose avec la réponse si nécessaire
})
.catch(error => {
  console.error('Erreur lors de la requête:', error);
  // Gérez les erreurs si nécessaire
});
