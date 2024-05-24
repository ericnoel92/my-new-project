axios.post('http://localhost:8000/connexion', {
  nom: 'valeur_de_nom',
  prenom: 'valeur_de_prenom',
  email: 'valeur_de_email',
  motDePasse: 'valeur_de_mot_de_passe',
})
.then(response => {
  console.log('Réponse de l\'API:', response.data);
  // Faites quelque chose avec la réponse si nécessaire
})
.catch(error => {
  console.error('Erreur lors de la requête:', error);
  // Gérez les erreurs si nécessaire
});
