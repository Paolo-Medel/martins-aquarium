// Import the function that returns a copy of the fish array
import { getFish } from "./database.js";

const mostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  const fishes = getFish();

  let holyFish = [];

  for (const fish of fishes) {
    if (fish.length % 3 === 0) {
      holyFish.push(fish);
    }
  }

  return holyFish;
};

const soldierFish = () => {
  // 5, 10, 15, 20, 25, etc... fish
  const fishes = getFish();

  let soldiers = [];

  for (const fish of fishes) {
    if (fish.length % 5 === 0 && fish.length % 3 != 0) {
      soldiers.push(fish);
    }
  }

  return soldiers;
};

const nonHolyFish = () => {
  // Any fish not a multiple of 3 or 5
  const fishes = getFish();

  let regularFish = [];

  for (const fish of fishes) {
    if (fish.length % 3 != 0 && fish.length % 5 != 0) {
      regularFish.push(fish);
    }
  }
  return regularFish;
};

const holyFish = mostHolyFish();
const soldier = soldierFish();
const nonHoly = nonHolyFish();

const newFishOrder = [...holyFish, ...soldier, ...nonHoly];

export const FishList = () => {
  // Invoke the function that you imported from the database module
  const fishes = newFishOrder;

  // Start building a string filled with HTML syntax
  let htmlString = '<article class="fishList">';

  // Create HTML representations of each fish here
  for (const fish of fishes) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="fish_card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`;
  }
  htmlString += `</article>`;

  return htmlString;
};
