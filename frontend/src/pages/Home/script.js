document.getElementById('service-search').addEventListener('input', function(e) {
    let searchQuery = e.target.value.toLowerCase();
  
    // Implement search functionality.
    // For now, it will log the search term to the console.
    console.log(`Search for services related to: ${searchQuery}`);
  });
  
  // Get the modal element
var addressModal = document.getElementById('addressModal');

// Get the button that opens the modal
var btnOpen = document.getElementById('service-search');

// Get the button that closes the modal
var btnClose = document.getElementById('closeModal');

// Get the button that fetches the user's location
var btnLocation = document.getElementById('useLocation');

// When the user clicks the button, open the modal
btnOpen.onclick = function() {
  addressModal.style.display = 'flex';
}

// When the user clicks on 'Use my location', fetch the location (you will need to implement this functionality)
btnLocation.onclick = function() {
  // Code to get user's location goes here
  console.log('Fetching the user location...');
}

// When the user clicks on 'Close', close the modal
btnClose.onclick = function() {
  addressModal.style.display = 'none';
}
