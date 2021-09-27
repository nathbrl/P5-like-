/**
 * Représentation du format d'un article ainsi que le formatage des dates pour affichage
 */
let articles = class Article{
    constructor(){
        this.id = Article.id;
        this.title = Article.title;
        this.publicationDate = Article.publicationDate;
        this.image = Article.image;
        this.content = Article.content;
    }
}
//console.log(articles);