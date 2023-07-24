import { FishList } from "./fish/FishLists.js";
import { tip } from "./tips/tip-list.js";
import { location } from "./locations/loc-list.js";

const parentHTMLElement = document.querySelector(".fishInserted");
const aside = document.querySelector(".tipInsert");
const places = document.querySelector(".locInsert");

parentHTMLElement.innerHTML = FishList();
aside.innerHTML = tip();
places.innerHTML = location();
