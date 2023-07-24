import { tipList } from "../fish/database.js";

export const tip = () => {
  const tips = tipList();

  let htmlString = '<article class="tipList">';

  for (const tip of tips) {
    htmlString += `<section class="tip_card">
            <div class="tip__name">${tip.concept}</div>
            <div class="tip__description">${tip.description}</div>
        </section>
`;
  }
  htmlString += `</article>`;

  return htmlString;
};
