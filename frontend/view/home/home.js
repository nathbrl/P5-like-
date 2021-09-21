/**
 * Gère l'affichage et les interactions de la page d'accueil
 */

fetch("http://localhost:4000/api/article/")
    .then(res => res.json())
    .then(data => console.log(data))