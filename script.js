// Replace with your API endpoint
const apiKey = 'YOUR_API_KEY';

const searchButton = document.querySelector('#search button');
const resultsSection = document.querySelector('#results');

searchButton.addEventListener('click', () => {
  const searchTerm = document.querySelector('#search input').value;

  // Make API request to fetch restaurants
  fetch(`https://api.example.com/restaurants?search=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      resultsSection.innerHTML = '';
      data.forEach(restaurant => {
        const card = document.createElement('div');
        card.classList.add('restaurant-card');
        card.innerHTML = `
          <img src="${restaurant.image}" alt="${restaurant.name}">
          <h2>${restaurant.name}</h2>
          <p>${restaurant.address}</p>
        `;
        resultsSection.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching restaurants:', error);
    });
});