const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

searchButton.addEventListener('click', performSearch);

function performSearch() {
  const searchTerm = searchInput.value;
  const resultElement = document.createElement('p');
  resultElement.textContent = searchTerm;
  searchResults.appendChild(resultElement);


  searchInput.value = '';
}
