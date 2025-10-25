const img1 = document.querySelector('.image1');
const img2 = document.querySelector('.image2');

// Start with only image1 visible
img1.style.display = 'block';
img2.style.display = 'none';

// Toggle on click
img1.addEventListener('click', () => {
  img1.style.display = 'none';
  img2.style.display = 'block';
});

img2.addEventListener('click', () => {
  img2.style.display = 'none';
  img1.style.display = 'block';
});
