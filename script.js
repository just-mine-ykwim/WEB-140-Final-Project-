$(document).ready(function () {
  // Sidebar toggle
  $('#toggleButton').on('click', function () {
    $('#sideNav').toggleClass('open');
  });

  // Image switching logic
  const images = ['sheep.jpeg', 'Cows.jpeg'];
  let currentImageIndex = 0;

  function switchImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    $('#image').attr('src', images[currentImageIndex]);
  }

  setInterval(switchImage, 3000);

  // Job list hover descriptions
  $('.job-list li').hover(
    function () {
      const description = $(this).data('description');
      if (description) {
        const $descriptionContainer = $('<div class="description-container"></div>');
        $descriptionContainer.text(description);
        $(this).append($descriptionContainer);
      }
    },
    function () {
      $(this).find('.description-container').remove();
    }
  );
});
