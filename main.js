document.addEventListener("DOMContentLoaded", function () {
  let bookCart = Array.from(document.querySelectorAll(".book-card"));
  const displayedImage = document.getElementById("displayed-image");

  bookCart.forEach((box) => {
    box.addEventListener("click", function () {
      bookCart.forEach((ele) => {
        ele.classList.remove("active");
        this.classList.add("active");
      });

      const imgSrc = this.getAttribute("data-img");

      displayedImage.src = imgSrc;
    });
  });

  bookCart.forEach((card) => {
    card.addEventListener("click", function () {
      const newImgSrc = this.getAttribute("data-img");

      displayedImage.classList.add("rotate-animation");

      setTimeout(() => {
        displayedImage.src = newImgSrc;
      }, 250);

      setTimeout(() => {
        displayedImage.classList.remove("rotate-animation");
      }, 500);
    });
  });
});
