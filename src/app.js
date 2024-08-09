/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suit = randomNumber(4, 0);
  const number = randomNumber(13, 1);

  const htmlTopSuit = document.querySelector("#top-suit");
  const htmlBottomSuit = document.querySelector("#bottom-suit");
  const htmlNumber = document.querySelector("#number");

  if (number === 1) {
    htmlNumber.innerHTML = "A";
  } else if (number === 11) {
    htmlNumber.innerHTML = "J";
  } else if (number === 12) {
    htmlNumber.innerHTML = "Q";
  } else if (number === 13) {
    htmlNumber.innerHTML = "K";
  } else {
    htmlNumber.innerHTML = number;
  }

  if (suit === 0) {
    htmlTopSuit.innerHTML = `&clubs;`;
    htmlBottomSuit.innerHTML = `&clubs;`;
    htmlTopSuit.style.color = "black";
    htmlBottomSuit.style.color = "black";
    htmlNumber.style.color = "black";
  } else if (suit === 1) {
    htmlTopSuit.innerHTML = `&spades;`;
    htmlBottomSuit.innerHTML = `&spades;`;
    htmlTopSuit.style.color = "black";
    htmlBottomSuit.style.color = "black";
    htmlNumber.style.color = "black";
  } else if (suit === 2) {
    htmlTopSuit.innerHTML = `&diams;`;
    htmlBottomSuit.innerHTML = `&diams;`;
    htmlTopSuit.style.color = "red";
    htmlBottomSuit.style.color = "red";
    htmlNumber.style.color = "red";
  } else if (suit === 3) {
    htmlTopSuit.innerHTML = `&hearts;`;
    htmlBottomSuit.innerHTML = `&hearts;`;
    htmlTopSuit.style.color = "red";
    htmlBottomSuit.style.color = "red";
    htmlNumber.style.color = "red";
  }
};

const randomNumber = (number, from) => {
  const selectedNumber = Math.floor(Math.random() * number + from);
  return selectedNumber;
};
