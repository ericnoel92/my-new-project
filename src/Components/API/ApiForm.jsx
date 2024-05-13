axios.post('http://localhost/api/insert-user', {
  nom: 'valeur_de_nom',
  prenom: 'valeur_de_prenom',
  email: 'valeur_de_email',
  motDePasse: 'valeur_de_motDePasse',
})
.then(response => {
  console.log('Réponse de l\'API:', response.data);
  // Faites quelque chose avec la réponse si nécessaire
})
.catch(error => {
  console.error('Erreur lors de la requête:', error);
  // Gérez les erreurs si nécessaire
});
