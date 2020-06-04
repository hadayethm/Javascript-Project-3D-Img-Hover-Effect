const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mousemove", startRotate);
  card.addEventListener("mouseout", stopRotate);
});

function startRotate(e) {
  const cardItem = this.querySelector(".card-item");
  // cardItem.style.background = `#${e.offsetY}`
  const halfHight = cardItem.offsetHeight / 2;
  const halfWidth = cardItem.offsetWidth / 2;
  cardItem.style.transform =
    "rotateX(" +
    -(e.offsetY - halfHight) / 5 +
    "deg) rotateY(" +
    (e.offsetX - halfWidth) / 5 +
    "deg)";
}

function stopRotate() {
  const cardItem = this.querySelector(".card-item");
  cardItem.style.transform = "rotate(0)";
}
