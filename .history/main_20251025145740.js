const productImg = document.getElementById('productImg');
let isImage1 = true; // to keep track of which image is shown

productImg.addEventListener('click', () => {
  if (isImage1) {
    productImg.src = 'image2.png'; // replace with your second image path
  } else {
    productImg.src = 'image1.png'; // replace with your first image path
  }
  isImage1 = !isImage1; // toggle the state
});
