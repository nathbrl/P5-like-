/**
 * Gère l'affichage et les interactions de la page d'accueil
 */

function getArticles () {
    fetch("http://localhost:4000/api/article/")
        .then((res) => res.json())
        .then(article => (article.forEach(element => {
                console.log(element);
                createCard(article);
            })));
        
}
getArticles();

function createCard(article) {
    let div = document.createElement('div');
    let title = document.createElement('h1');
    let p = document.createElement('p');
    let img = document.createElement('img');
    let span = document.createElement('span');
    let id = document.createElement('id');
    id.innerHTML = article[0].id;
    title.innerHTML = article[0].title;
    p.innerHTML = article[0].content;
    span.innerHTML = article[0].publicationDate;
    img.src = article[0].image;
    console.log(div);
    let container = document.getElementsByClassName('container');
    document.body.appendChild(div);
    div.appendChild(id);
    div.appendChild(title);
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
}
createCard();