function toggleSidebar() {
  const $sideNav = $('#sideNav'); // Select the side navigation element
  const isSidebarOpen = $sideNav.css('left') === '0px'; // Check if the sidebar is open

  if (isSidebarOpen) {
    $sideNav.css('left', '-250px'); // Close sidebar
  } else {
    $sideNav.css('left', '0'); // Open sidebar
  }
}

$(document).ready(function () {
  const images = ['sheep.jpeg', 'Cows.jpeg']; // Add your image paths here
  let currentImageIndex = 0;

  function switchImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    $('#image').attr('src', images[currentImageIndex]); // Update the src attribute
  }

  // Set the interval to switch images every 3 seconds (3000 milliseconds)
  setInterval(switchImage, 3000);

  // Inline description display on hover
  $('.job-list li').hover(
    function () {
      const description = $(this).data('description');
      if (description) {
        $(this).find('.description-container').remove();
        $(this).append(`<div class='description-container'>${description}</div>`);
      }
    },
    function () {
      $(this).find('.description-container').remove();
    }
  );
});
