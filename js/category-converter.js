export default function converter(category) {
	switch (category) {
		case "Веб-сайти":
			return "Веб-сайт";

		case "Додатки":
			return "Додаток";

		default:
			return category;
	}
}
