let bookCart = Array.from(document.querySelectorAll(".book-card"));

const displayedImage = document.getElementById("displayed-image");

bookCart.forEach((box) => {

  box.addEventListener("click", function () {
    bookCart.forEach((ele)=>{
      ele.classList.remove("active")
      this.classList.add("active")
    })
    const imgSrc = this.getAttribute("data-img");
    displayedImage.src = imgSrc;
  });
});
