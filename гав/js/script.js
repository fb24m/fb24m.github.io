let jumpButtons = document.querySelectorAll('[data-jump]');

jumpButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		let block = document.querySelector(`#${button.dataset.jump}`);

		block.scrollIntoView({
			"behavior": "smooth",
			"block": "start"
		})
	});
});

async function loadMenu() {
	let menu = document.querySelector('.menu__list');
	let file = 'js/menu.json';

	const response = await fetch(file);
	const json = await response.json();

	console.log(json);

	json.items.forEach((item) => {
		menu.insertAdjacentHTML('beforeend', `<li class="menu__item"><a href="${item.url}" class="menu__link">${item.displayname}</a></li>`)
	});
}

loadMenu();

const getQueryVariable = (searchable) => {
	const variables = location.search.split('?')[1];
	const list = variables.split('&');

	for (let i = 0; i < list.length; i++) {
		const element = list[i];
		const name = element.split('=')[0];
		const value = element.split('=')[1];

		if (name !== searchable) continue;
		return value;
	}
	return 'Переменная не найдена (script.js / getQueryVariable(name: String))';
}

const loadZooPage = async (name) => {
	const base = 'js/zoo.json';
	const response = await fetch(base);
	const json = await response.json();

	if (json[name] === undefined) {
		document.querySelector('#error').innerHTML = '404 not found';
		return;
	};

	let main = document.querySelector('.main');

	json[name].forEach((pet, index) => {
		main.insertAdjacentHTML('beforeend', `
			<div class="pet">
				<div class="${index % 2 === 0 ? "pet__container_reverse" : ""} pet__container">
					<div div class= "pet__block" >
						<img src="${pet.image}" alt="" class="pet__image">
					</div>
					<div class="pet__block">
						<h2 class="pet__title">${pet.name}</h2>
						<p class="pet__description"> ${pet.description}</p>
					</div>
				</div >
			</div >
	`)
	});
}

if (location.pathname === '/zoo.html') {
	const pageType = getQueryVariable('page');

	loadZooPage(pageType);

	console.log(pageType);
}