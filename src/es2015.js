let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0caa4331dfcf4d9dab206476d332995e`;
let request = new Request(url);

(function() {
fetch(request)
    .then(response => {
        return response.json();
    })
    .then(responseJSON => {
        let news = document.querySelector('.news');
        responseJSON.articles.forEach((item, i) => {
            if (i < 10) {
                let a = document.createElement('a');
                let articleBlock = document.createElement('div');

                //for article block
                articleBlock.className = `title ${i}`;
                articleBlock.innerHTML += item.title;

                //for link
                a.href = item.url;
                a.target = '_blank';

                //styles for block
                articleBlock.style.background = `url(${item.urlToImage}) no-repeat`;
                articleBlock.style.backgroundSize = 'cover';

                a.appendChild(articleBlock);
                news.appendChild(a);
            }
        });
    });
})();

function showMoreArticles() {
    fetch(request)
        .then(response => {
            return response.json();
        })
        .then(responseJSON => {
            let news = document.querySelector('.news');
            responseJSON.articles.forEach((item, i) => {
                if (i > 10) {
                    let a = document.createElement('a');
                    let articleBlock = document.createElement('div');

                    //for article block
                    articleBlock.className = `title ${i}`;
                    articleBlock.innerHTML += item.title;

                    //for link
                    a.href = item.url;
                    a.target = '_blank';

                    //styles for block
                    articleBlock.style.background = `url(${item.urlToImage}) no-repeat`;
                    articleBlock.style.backgroundSize = 'cover';

                    a.appendChild(articleBlock);
                    news.appendChild(a);
                }
            });
        })
        .then( () => {
            document.querySelector('.showMoreBtn').style.display = 'none';
        });
}