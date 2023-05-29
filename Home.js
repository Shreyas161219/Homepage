// Home.js

// Get all dropdown parent elements
const dropdownParents = document.querySelectorAll('.navbarsections > li');

// Attach click event listener to each dropdown parent
dropdownParents.forEach(parent => {
  const dropdown = parent.querySelector('.dropdown');
  let isClicked = false;

  parent.addEventListener('click', () => {
    if (!isClicked) {
      isClicked = true;
      return;
    }

    // Check if the dropdown is currently hidden
    const isHidden = dropdown.style.display === 'none' || getComputedStyle(dropdown).display === 'none';

    if (isHidden) {
      // Show the dropdown options
      dropdown.style.display = 'block';
    } else {
      // Hide the dropdown options
      dropdown.style.display = 'none';
    }
  });

  // Prevent the dropdown from showing when cursor is pointed for the first time
  dropdown.style.display = 'none';

  // Show dropdown options on click
  parent.addEventListener('click', () => {
    dropdown.style.display = 'block';
  });

  // Hide dropdown options when cursor is not on the parent
  parent.addEventListener('mouseleave', () => {
    dropdown.style.display = 'none';
  });
});

// Home.js

// Function to handle the zoom-in and zoom-out effect on landscape images
function zoomInOut(image, index) {
    // Set initial scale and opacity for the image
    image.style.transform = 'scale(0.8)';
    image.style.opacity = '0';
  
    // Calculate the delay for each image based on its index
    const delay = index * 1000;
    // Use setTimeout to apply the zoom-in effect after a delay
    setTimeout(() => {
      image.style.transform = 'scale(1)';
      image.style.opacity = '1';
  
      // Use setTimeout again to apply the zoom-out effect after a delay
      setTimeout(() => {
        image.style.transform = 'scale(0.8)';
        image.style.opacity = '0';
      }, 3000); // Adjust the duration of the zoom-in effect here (in milliseconds)
  
    }, delay);
  }
  
// Home.js
document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".landscape img");
    var index = 0;
    var totalImages = images.length;
  
    function displayNextImage() {
      images[index].classList.remove("active");
      index = (index + 1) % totalImages;
      images[index].classList.add("active");
    }
  
    images[index].classList.add("active");
    index++;
  
    setInterval(displayNextImage, 3000);
    setTimeout(displayNextImage, 0);
  });
  
  
  var askButton = document.querySelector('.AskButton');
  var sportTimings = document.querySelector('.SportTimings');
  
  askButton.addEventListener('click', toggleSportTimings());
  
  function toggleSportTimings() {
    if (sportTimings.classList.contains('show')) {
      sportTimings.classList.remove('show');
    } else {
      sportTimings.classList.add('show');
    }
  }
  
  
  
  
  
  
  
