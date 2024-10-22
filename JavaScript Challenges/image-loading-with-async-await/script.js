"use strict";

const imagesContainer = document.querySelector(".images");

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

const loadNPause = async function () {
  try {
    let img = await createImage("img/img-1.jpg");
    console.log("First image loaded:", img);
    await wait(2);
    img.style.display = "none";

    img = await createImage("img/img-2.jpg");
    console.log("Second image loaded:", img);
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};

loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    console.log(imgs);

    const imgEl = await Promise.all(imgs);
    console.log(imgEl);

    imgEl.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.log(err);
  }
};

loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
