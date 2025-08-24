// Array of motivational thoughts
const thoughts = [
  "Curiosity is the beginning of wisdom.",
  "Every question is a doorway to understanding.",
  "Why? is the seed of innovation.",
  "The world makes sense when we seek to explore.",
  "Growth begins with a single thought: Why?"
];

const btn = document.getElementById("quoteBtn");
const display = document.getElementById("quoteDisplay");

btn.addEventListener("click", () => {
  // Pick a random thought
  const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
  display.textContent = randomThought;
});

