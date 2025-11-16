const movies = [
    { title: "Esha Murder Karmphal", genre: "Action", image: "image-1.jpg" },
    { title: "Top Gear", genre: "Comedy", image:"image-2.jpg" },
    { title: "Devils Double Next Level", genre: "Drama", image: "image-3.avif" },
    { title: "X-Men 9 Apocalypse", genre: "Adventure", image:"image-4.jpeg" },
    { title: "Dragon Curse The Hidden Treasure", genre: "Romance", image:"image-5.jpg" },
    { title: "Mahavatar Narsimha", genre: "Thriller", image:'image-6.jpeg' },
    { title: "Kalki", genre: "Fantasy", image:"image-7.jpeg" },
    { title: "Tumbbad", genre: "Horror", image:"image-8.jpeg" }
];

const movieList = document.getElementById('movieList');
const searchInput = document.getElementById('searchInput');
const tags = document.querySelectorAll('.tag');

let currentGenre = 'All'; 

function displayMovies(movieArray) {
    movieList.innerHTML = ''; 
    
    if (movieArray.length === 0) {
        movieList.innerHTML = '<p style="color: #ccc; grid-column: 1 / -1; text-align: center; padding: 20px;">No movies found matching your criteria.</p>';
        return;
    }

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

// 1. Initial display
displayMovies(movies);

// 2. Search input listener
searchInput.addEventListener('input', filterMovies);

// 3. Genre tag listener
tags.forEach(tag => {
    tag.addEventListener('click', () => {
        // Update active class styling
        tags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        
        // Update genre and filter
        currentGenre = tag.getAttribute('data-genre'); 
        filterMovies();
    });
});
