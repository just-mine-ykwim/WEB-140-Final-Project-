function toggleSidebar() {
  const $sideNav = $('#sideNav'); // Select the side navigation element
  const $mainContent = $('#mainContent'); // Select the main content element
  const isSidebarOpen = $sideNav.css('left') === '0px'; // Check if the sidebar is open

  if (isSidebarOpen) {
    $sideNav.css('left', '-250px'); // Close sidebar
    $mainContent.css('margin-left', '0'); // Reset content margin
  } else {
    $sideNav.css('left', '0'); // Open sidebar
    $mainContent.css('margin-left', '250px'); // Push content to the right
  }
}

$(document).ready(function() {
  const images = ['sheep.jpeg', 'Cows.jpeg']; // Add your image paths here
  let currentImageIndex = 0;

  function switchImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    $('#image').attr('src', images[currentImageIndex]); // Using jQuery to update the src attribute
  }

  // Set the interval to switch images every 3 seconds (3000 milliseconds)
  setInterval(switchImage, 3000);

  // Change link color on hover
  $('.link').hover(
    function () {
      $(this).css('color', '#005f73');
    },
    function () {
      $(this).css('color', '');
    }
  );

  // Inline description display on hover
  $('.job-list li').hover(
    function () {
      const description = $(this).data('description');
      if (description) {
        $(this).find('.description-container').remove(); // Remove existing description
        $(this).append(`<div class='description-container'>${description}</div>`); // Add description
      }
    },
    function () {
      $(this).find('.description-container').remove();
    }
  );

  // Add a blue vertical line to the left side of the body content
  $('body').prepend('<div id="left-line"></div>');  // Add left line

  // Style the left line using jQuery
  $('#left-line').css({
    'position': 'fixed',   // Fixed position to keep it on the left side while scrolling
    'top': '0',            // Start from the top of the page
    'bottom': '0',         // Extend to the bottom of the page
    'width': '5px',        // Thickness of the line
    'background-color': '#005f73', // Line color
    'z-index': '9999',     // Ensure the line is on top of content
    'left': '0'            // Position the line on the left side
  });
});
