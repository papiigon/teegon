const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const loveMsg = document.getElementById("loveMsg");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 40;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  loveMsg.style.display = "block";
});
