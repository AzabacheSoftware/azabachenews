
let key = "0861aea2ff124fb585242b9630fa0931";
let country = "us";
let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`;
let showNews = document.getElementById("news");

fetch(url)
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        let news = data.articles;
        news.forEach(function(article) {
            let div = document.createElement("div");
            div.className = "article-container"; // Agrega la clase al contenedor
            div.innerHTML = `
                <br>
                <div class="image-container"> <!-- Contenedor para la imagen -->
                    <img src="${article.urlToImage}" alt="Article Image">
                </div>
                <h1>${article.title}</h1><br>
                <h2>${article.description}</h2><br>
                <a href="${article.url}" target="_blank" class="more-button">Continue reading</a>`;
            showNews.appendChild(div);
        });
    })
    .catch(error => {
        console.error("Error fetching news:", error);
    });

