/**
 * Gère l'affichage et les interactions de la page d'accueil
*/

function getArticles () {
    fetch("http://localhost:4000/api/article/")
        .then((res) => res.json())
        .then(article => article.forEach((publication, i) => {
            //console.log(publication);
            //displayArticle(article,i);
            displayArticles(article,i);
            stringToDate(article, i);
            }));
        
}
getArticles();

function displayArticles(article, i) {
    let div = document.createElement('div');
    div.classList.add('article');
    let title = document.createElement('h2');
    let p = document.createElement('p');
    let img = document.createElement('img');
    let span = document.createElement('span');
    let id = document.createElement('id');
    let icon = document.createElement('i');
    icon.innerHTML = `<i class="fas fa-star"></i>`;
    //console.log(icon);
    icon.addEventListener('click', e => {
        icon.style.color = 'yellow';
        if (icon.style.color === 'yellow') {
            icon.addEventListener('click', e => {
                icon.style.color = 'white';
            })
        }
    })
    id.innerHTML = article[i].id;
    title.innerHTML = article[i].title;
    p.innerHTML = article[i].content;
    span.innerHTML = article[i].publicationDate;
    img.src = 'http://localhost:4000/' + article[i].image;
    //console.log(div);*/
    document.body.appendChild(div);
    div.appendChild(icon);
    div.appendChild(id);
    div.appendChild(title);
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
}
function stringToDate(article, i) {
    const stringDate = article[i];
    console.log(stringDate);
    const stringToDate = new Date(stringDate.publicationDate);
    console.log(stringToDate)
    /*const sortedDates = stringToDate.sort((a, b) => a.publicationDate - b.publicationDate)
    console.log(sortedDates);*/
}
/*function displayArticle(article, i) {
    const divArticle = document.getElementById(`article-${i}`);
    console.log(divArticle);
}
const div1 = document.getElementById('article-1');
const div2 = document.getElementById('article-2');
const div3 = document.getElementById('article-3');
const div4 = document.getElementById('article-4');
const div5 = document.getElementById('article-5');*/
/* ÉTAPE 2*/
