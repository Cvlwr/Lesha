document.getElementById("surpriseBtn").addEventListener("click", function () {
  const surpriseMessage = document.getElementById("surpriseMessage");
  surpriseMessage.classList.remove("hidden");
  setTimeout(() => {
    surpriseMessage.classList.add("show");
  }, 10);

  const catImage = document.querySelectorAll(".cat-image");
  catImage.forEach((img, index) => {
    setTimeout(() => {
      img.style.display = "block";
    }, index * 300);
  });
});
