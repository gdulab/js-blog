'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
  }
  /* [DONE] add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);
  this.classList.add('active');

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
  }
  /* [DONE] get 'href' attribute from the clicked link */
  let aricleSelector = clickedElement.getAttribute("href");
  console.log('aricleSelector: ', aricleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(aricleSelector);
  console.log('targetArticle: ', targetArticle);

  /* [DONE] add class 'active' to the correct article */
  targetArticle.classList.add('active');
}



const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagSelector = '.post-tags .list',
  titleList = document.querySelector(optTitleListSelector),
  articles = document.querySelectorAll(optArticleSelector),
  articleTagsList = document.querySelector(optArticleTagSelector);

function generateTitleLinks(){

  /* remove contents of titleList */
  titleList.innerHTML = '';
  /* for each article */
  let html = '';
  for (let article of articles){

    /* get the article id */
    const articleID = article.getAttribute("id");
    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleID + '"><span>' + articleTitle + '</span></a></li>';

    /* insert link into titleList */
    // titleList.insertAdjacentHTML("beforeend", linkHTML);

    /* insert link into html variable */
    html = html+linkHTML

  }

  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');
  console.log(links);

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

function generateTags(){
  /* find all articles */

  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const tagsWrapper = article.querySelectorAll(optArticleTagSelector);
    /* make html variable with empty string */
    let html ='';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute("data-tags");
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      /* add generated code to html variable */
      html = html+linkHTML;

    }
    console.log('HTML: ',html);
    /* END LOOP: for each tag */
    /* insert HTML of all the links into the tags wrapper */
    articleTagsList.innerHTML = html;
    console.log('at: ',articleTagsList);
  /* END LOOP: for every article: */
  }
}

generateTags();
