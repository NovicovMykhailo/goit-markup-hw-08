//json
import data from "../project-cards.json" with  { type: "json" };

import portfolioCard from "./portfolio-card.js";
import converter from "./category-converter.js";

const portfolioContainer = document.querySelector(".portfolio__cards");
const filterList = document.querySelectorAll("[data-filter-buttons]");

const list = data.map(item => portfolioCard(item));
portfolioContainer.insertAdjacentHTML("afterbegin", list.join(" "));

filterList.forEach(item => item.addEventListener("click", handkeClick));

function handkeClick(e) {
	if (e.target.nodeName === "BUTTON") {
		const category = e.target.innerHTML;
		portfolioContainer.innerHTML = list.join(" ");

		if (category !== "Усі") {
			const filteredList = data.filter(
				item => item.category === converter(category),
			);
			const list = filteredList.map(item => portfolioCard(item));
			portfolioContainer.innerHTML = list.join(" ");
		}
	}
}
