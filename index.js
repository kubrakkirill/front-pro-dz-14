let index = 1;

function showImage(num) {
  const img = document.createElement('img');
  
  img.src = `./assets/${num}.jpg`;
  img.alt = 'nature';
  
  return img;
}

let image = showImage(index);
const currentDiv = document.getElementById("slider");

document.body.onload = () => {
  createElement('button', 'prev');
  currentDiv.appendChild(image);
  createElement('button', 'next');
  document.getElementById("prev").addEventListener("click", () => prev());
  document.getElementById("next").addEventListener("click", () => next());
  updateButtonVisibility();
};

function createElement(el, label) {
  const element = document.createElement(el);
  element.id = label;
  const elementContent = document.createTextNode(label);
  element.appendChild(elementContent);
  return currentDiv.appendChild(element);
}

function next() {
  index = index + 1;
  updateDisplayedImage();
  updateButtonVisibility();
}

function prev() {
  index = index - 1;
  updateDisplayedImage();
  updateButtonVisibility();
}

function updateDisplayedImage() {
  const currentImg = document.getElementById("slider").getElementsByTagName('img')[0];
  const newImage = showImage(index);
  currentImg.parentNode.replaceChild(newImage, currentImg);
}

function updateButtonVisibility() {
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  if (index === 1) {
    prevBtn.classList.add('hidden');
  } else {
    prevBtn.classList.remove('hidden');
  }

  if (index === 10) {
    nextBtn.classList.add('hidden');
  } else {
    nextBtn.classList.remove('hidden');
  }
}
