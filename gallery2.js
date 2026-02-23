const page = document.querySelector(".pictures");
const larger = document.getElementById(bigger);

const photos = [
  {
    src: "img/streetwear/chic.jpg",
    alt: "streetwear picture",
  },
  {
    src: "img/streetwear/fash1.webp",
    alt: "streetwear basketball court",
  },
  {
    src: "img/streetwear/fash2.webp",
    alt: "group picture",
  },
  {
    src: "img/streetwear/fash3.webp",
    alt: "group picture2",
  },
  {
    src: "img/streetwear/fash4.webp",
    alt: "group picture3",
  },
  {
    src: "img/streetwear/fash5.webp",
    alt: "group picture4",
  },
  {
    src: "img/streetwear/fash6.webp",
    alt: "group picture5",
  },
  {
    src: "img/streetwear/teenpic.jpg",
    alt: "teenagers in streetwear",
  },
  {
    src: "img/streetwear/urban.jpeg",
    alt: "urban fashion",
  },
];

function createGallery() {
  for (let i = 0; i < photos.length; i++) {
    const imageElement = document.createElement("img");
    debugger;
    imageElement.src = photos[i].src;
    imageElement.alt = photos[i].alt;

    imageElement.addEventListener("click", function () {
      console.log(photos[i]);
      createBiggallery(photos[i]);
    });

    page.append(imageElement);
  }
}
createGallery();

function createBiggallery(bigPhoto) {
  const bigger = document.createElement("img");

  bigger.src = bigPhoto.src;
  bigger.alt = bigPhoto.alt;

  larger.append(bigger);
}
