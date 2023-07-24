import { locList } from "../fish/database.js";

export const location = () => {
  const Locations = locList();

  let htmlString = '<article class="locList">';

  for (const location of Locations) {
    htmlString += `<section class="loc_card">
            <div class="loc_id">My trip #${location.id} was to </div>
            <div class="loc_Place"> ${location.place}</div>
        </section>
`;
  }
  htmlString += `</article>`;

  return htmlString;
};
