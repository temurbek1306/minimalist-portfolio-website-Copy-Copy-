// Get the toggle button and the navigation list
const toggleButton = document.querySelector('.toggle-tugmasi');
const navList = document.querySelector('.nav-list');

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', () => {
  // Toggle the 'show' class on the navigation list
  navList.classList.toggle('show');
});