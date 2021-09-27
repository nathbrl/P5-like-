/**
 * Gère l'affichage et les interactions de la page d'accueil
 */

function getArticles () {
    fetch("http://localhost:4000/api/article/")
        .then((res) => res.json())
        .then(article => article.forEach((publication,i) => {
            console.log(publication,i);
            displayArticle(article,i);
            sortDate(article, i);
            }));
        
}
getArticles();

function displayArticle(article, i) {
    let div = document.createElement('div');
    let title = document.createElement('h1');
    let p = document.createElement('p');
    let img = document.createElement('img');
    let span = document.createElement('span');
    let id = document.createElement('id');
    let icon = document.createElement('i');
    icon.innerHTML = `<i class="fas fa-star"></i>`;
    id.innerHTML = article[i].id;
    title.innerHTML = article[i].title;
    p.innerHTML = article[i].content;
    span.innerHTML = article[i].publicationDate;
    img.src = article[i].image;
    //console.log(div);
    document.body.appendChild(div);
    div.appendChild(icon);
    div.appendChild(id);
    div.appendChild(title);
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
}

function sortDate(article, i) {
    const date = article[i].publicationDate;
    console.log(date);
    date.sort;
}

/* ÉTAPE 2*/
