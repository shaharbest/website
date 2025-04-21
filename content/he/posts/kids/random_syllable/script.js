const letterElement = document.getElementById("letter");

const letters = [
  "א",
  "ב",
  "בּ", // Bet with Dagesh
  "ג",
  "ד",
  "ה",
  "ו",
  "ז",
  "ח",
  "ט",
  "י",
  "כ",
  "כּ", // Kaf with Dagesh
  "ל",
  "מ",
  "נ",
  "ס",
  "ע",
  "פ",
  "פּ", // Pe with Dagesh
  "צ",
  "ק",
  "ר",
  "שׁ", // Shin
  "שׂ", // Sin
  "ת",
];

const nikud = [
  { type: "regular", symbol: "\u05B0" }, // sheva
  { type: "regular", symbol: "\u05B1" }, // hataf segol
  { type: "regular", symbol: "\u05B2" }, // hataf patah
  { type: "regular", symbol: "\u05B3" }, // hataf qamats
  { type: "regular", symbol: "\u05B4" }, // hiriq
  { type: "regular", symbol: "\u05B5" }, // tsere
  { type: "regular", symbol: "\u05B6" }, // segol
  { type: "regular", symbol: "\u05B7" }, // patah
  { type: "regular", symbol: "\u05B8" }, // qamats
  { type: "regular", symbol: "\u05B9" }, // holam
  { type: "regular", symbol: "\u05BB" }, // qubuts
  { type: "special", name: "Holam Male" },
  { type: "special", name: "Hirik Male" },
  { type: "special", name: "Shuruk" },
];

function showRandomLetter() {
  // Pick a random letter
  const form = letters[Math.floor(Math.random() * letters.length)];

  // Pick a random nikud
  const selectedNikud = nikud[Math.floor(Math.random() * nikud.length)];
  let display = "";

  if (selectedNikud.type === "regular") {
    display = form + selectedNikud.symbol;
  } else {
    // Handle special vowels
    if (selectedNikud.name === "Holam Male") {
      display = form + "\u05B9" + "ו";
    } else if (selectedNikud.name === "Hirik Male") {
      display = form + "\u05B4" + "י";
    } else if (selectedNikud.name === "Shuruk") {
      display = form + "ו\u05BC";
    }
  }

  letterElement.textContent = display;
}
