"use strict";

const imagesContainer = document.querySelector(".images");
// we define a global variable for image as we define img in one function and use it to set style to it in another function
let currentImage;

function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}

function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;

    img.onload = () => {
      imagesContainer.appendChild(img);
      resolve(img);
    };

    img.onerror = () => {
      reject(new Error(`Error loading image from ${imgPath}`));
    };
  });
}

createImage("img/img-1.jpg")
  .then((img) => {
    currentImage = img;
    console.log("First image loaded:", img);
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImage = img;
    console.log("Second image loaded:", img);
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
  })
  .catch((error) => {
    console.error("Error loading image:", error);
  });
