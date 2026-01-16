console.log("This is an image gallery.");

const backing = document.querySelector(".pics");

const images = [
  {
    src: "img/streetwear/chic.jpg",
    alt: "streetwear picture",
  },
  {
    src: "img/y2k/y2k.jpg",
    alt: "2000s",
  },
  {
    src: "img/alt/aali.jpg",
    alt: "alternative",
  },
  {
    src: "img/coquette/coq1.webp",
    alt: "coquette girl",
  },
];

function createFront() {
  images.forEach(function (image) {
    const imgElement = document.createElement("img");

    imgElement.src = image.src;
    imgElement.alt = image.alt;

    backing.append(imgElement);
  });
}
createFront();
