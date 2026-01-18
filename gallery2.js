const page = document.querySelector(".pictures");

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
  photos.forEach(function (photo) {
    const imageElement = document.createElement("img");

    imageElement.src = photo.src;
    imageElement.alt = photo.alt;

    imageElement.addEventListener("click", function () {
      console.log(photos);
    });
    page.append(imageElement);
  });
}
createGallery();
