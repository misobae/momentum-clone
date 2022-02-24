const images = ['bg_01.jpg', 'bg_02.jpg', 'bg_03.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');
bgImage.src = `images/${chosenImage}`;
document.body.appendChild(bgImage).classList.add('bg-img');
