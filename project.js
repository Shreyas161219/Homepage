const navbarItems = document.querySelectorAll('.navbar-nav .nav-item');
navbarItems.forEach((item) => {
  const toggleButton = item.querySelector('[data-dropdown-toggle]');
  const toggleIcon = toggleButton.querySelector('svg');

  toggleButton.addEventListener('click', () => {
    toggleIcon.classList.toggle('rotate-180');
  });
});

 

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
  

  function toggleMenu() {
    var menu = document.getElementById('menu');
    var imageButton = document.getElementById('imageButton');
  
    if (menu.style.display === 'none') {
      menu.style.display = 'block';
      imageButton.style.display = 'none';
    } else {
      menu.style.display = 'none';
      imageButton.style.display = 'block';
    }
  }
  