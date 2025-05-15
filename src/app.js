import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generarCarta() {
  let palos = ["♦", "♥", "♠", "♣"];
  let clases = ["diamond", "heart", "spade", "club"];
  let valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let paloIndex = Math.floor(Math.random() * palos.length);
  let valorIndex = Math.floor(Math.random() * valores.length);

  let palo = palos[paloIndex];
  let clasePalo = clases[paloIndex];
  let valor = valores[valorIndex];

  let carta = document.getElementById("carta");

  carta.classList.remove("diamond", "heart", "spade", "club");
  carta.classList.add(clasePalo);

  document.getElementById("palo-1").innerHTML = palo;
  document.getElementById("palo-2").innerHTML = palo;
  document.getElementById("valor").innerHTML = valor;
};

window.onload = function () {
  generarCarta();

  document.getElementById("nuevaCarta").addEventListener("click", generarCarta); 

  setInterval(generarCarta, 10000);
  
};

