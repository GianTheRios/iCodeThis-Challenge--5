// Add JavaScript code here
document.getElementById("help").addEventListener("click", function (e) {
  e.preventDefault();
  let card = document.querySelector(".card");
  let helpCard = document.querySelector(".help__card");

  // Hide the current card with an animation
  card.style.scale = "0";
  card.addEventListener("transitionend", function () {
    card.style.display = "none";
    helpCard.style.display = "block";
    setTimeout(() => (helpCard.style.scale = "1"), 0);
  });
});
