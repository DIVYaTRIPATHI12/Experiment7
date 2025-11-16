const movies = [
    { title: "Esha Murder Karmphal", genre: "Action", image: "image-1.JPG" },
    { title: "Top Gear", genre: "Comedy", image:"image-2.JPG" },
    { title: "Devils Double Next Level", genre: "Drama", image: "image-3.AVIF" },
    { title: "X-Men 9 Apocalypse", genre: "Adventure", image:"image-4.JPEG" },
    { title: "Dragon Curse The Hidden Treasure", genre: "Romance", image:"image-5.JPG" },
    { title: "Mahavatar Narsimha", genre: "Thriller", image:'image-6.JPEG' },
    { title: "Kalki", genre: "Fantasy", image:"image-7.JPEG" },
    { title: "Tumbbad", genre: "Horror", image:"image-8.JPG" }
];

const movieList = document.getElementById('movieList');
const searchInput = document.getElementById('searchInput');
const tags = document.querySelectorAll('.tag');

let currentGenre = 'All'; 

function displayMovies(movieArray) {
    movieList.innerHTML = ''; 

    movieArray.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        movieList.appendChild(movieCard);
    });
}

function filterMovies() {
    const searchText = searchInput.value.toLowerCase().trim();

    const filtered = movies.filter(movie => {
        const matchesGenre = currentGenre === 'All' || movie.genre === currentGenre;
        const matchesSearch = movie.title.toLowerCase().includes(searchText);
        return matchesGenre && matchesSearch;
    });

    displayMovies(filtered);
}

// --- Initialization and Event Listeners ---
displayMovies(movies);

searchInput.addEventListener('input', filterMovies);
tags.forEach(tag => {
    tag.addEventListener('click', () => {
     
        tags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        currentGenre = tag.getAttribute('data-genre'); 
        filterMovies();
    });
});
