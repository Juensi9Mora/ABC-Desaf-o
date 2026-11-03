// Colores de la paleta (versiones oscuras para que el texto se lea bien)
const getRandomColor = () => {
  const colors = ["#c2714f", "#7d8f4e", "#a8773f", "#5a4632", "#d98b6a"];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Delegación de eventos: funciona aunque los componentes se creen después
document.addEventListener("click", (e) => {
  const name = e.target.closest("h5");
  if (name) name.style.color = getRandomColor();

  const card = e.target.closest(".letter-card");
  if (card) flip(card);
});

// Accesibilidad: voltear con Enter o Espacio
document.addEventListener("keydown", (e) => {
  const card = e.target.closest?.(".letter-card");
  if (card && (e.key === "Enter" || e.key === " ")) {
    e.preventDefault();
    flip(card);
  }
});

function flip(card) {
  card.classList.toggle("flipped");
  card.classList.add("seen"); // base para registrar letras vistas más adelante
}
