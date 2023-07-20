import { getFish } from "./database.js";
import { FishList } from "./FishLists.js";

const allFish = getFish();

for (const fish of allFish) {
  console.log(fish);
}

const parentHTMLElement = document.querySelector(".fishInserted");

parentHTMLElement.innerHTML = FishList();
