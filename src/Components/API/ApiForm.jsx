axios.post('http://localhost/phpmyadmin/index.php?route=/sql&pos=0&db=morpion&table=user', {
  nom: '',
  prenom: '',
  email: '',
  motDePasse: '',
})
.then(response => {
  console.log('Réponse de l\'API:', response.data);
  // Faites quelque chose avec la réponse si nécessaire
})
.catch(error => {
  console.error('Erreur lors de la requête:', error);
  // Gérez les erreurs si nécessaire
});
