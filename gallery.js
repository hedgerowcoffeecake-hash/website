document.addEventListener("DOMContentLoaded", () => {
  const galleryElement = document.getElementById("gallery");
  const imageGroups = [32, 12, 19];
  let images = [];
  for (let i = 0; i < 3; i++) {
    images.push([]);
    for (let ii = 0; ii < imageGroups[i]; ii++) {
      if (i == 0) {
        images[i].push({
          highRes: `coffe photos/image${ii + 1}.jpg`,
          lowRes: `coffe photos/lowqual/image${ii + 1}.jpg`,
        });
      } else {
        images[i].push({
          highRes: `coffe photos/${i}image${ii + 1}.jpg`,
          lowRes: `coffe photos/lowqual/${i}image${ii + 1}.jpg`,
        });
      }
    }
  }

  let galleryHTML = "";
  images.forEach((Iimages) => {
    Iimages.forEach((image) => {
      galleryHTML += `
        <a href="${image.highRes}" data-lightbox="gallery" class="block aspect-square overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 bg-center bg-cover" style="background-image: url('${image.lowRes}');"></a>
      `;
    });
  });

  galleryElement.innerHTML = galleryHTML;
});
