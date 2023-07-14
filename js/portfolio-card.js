export default function portfolioCard(data) {
	const { title, description, category, image } = data;
	const { jpg, webP } = image;

	return `<li>
				<a class="portfolio__card-item" href="" onclick="event.preventDefault()">
					<div class="portfolio__card-overlay">
						<p class="portfolio__card-descr">${description}</p>
						<picture>
							<source  type="image/webp" srcset="
								${webP["370"]} 370w,
								${webP["370@2x"]} 740w" media="(min-width: 1200px)" >
							<source type="image/webp" srcset="
								${webP["354"]}  354w,
								${webP["354@2x"]}  708w" media="(min-width: 768px)" >
							<source type="image/webp" srcset="
								${webP["450"]} 450w,
								${webP["450@2x"]} 900w" media="(min-width: 480px)" >
									
							<source srcset="
								${jpg["370"]} 370w,
								${jpg["3702x"]} 740w" media="(min-width: 1200px)">
							<source srcset="
								${jpg["354"]}  354w,
								${jpg["3542x"]}  708w" media="(min-width: 768px)">
							<source srcset="
								${jpg["450"]} 450w,
								${jpg["4502x"]} 900w" media="(min-width: 480px)">

							<img src="${jpg["370@2x"]}" alt="project_illustration" />								
						</picture>
					</div>
					<div class="portfolio__card-titles">
						<h2>${title}</h2>
						<p>${category}</p>	
					</div>
				</a>
			</li>`;
}

