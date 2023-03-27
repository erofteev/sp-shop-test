// import { gsap } from 'gsap';

// import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';
// gsap.registerPlugin(ScrollToPlugin);

// global.gsap = gsap;

// gsap.defaults({
// 	overwrite: 'auto',
// });

class ProjectApp {
	constructor() {
		this.env = require('./utils/env').default;
		this.utils = require('./utils/utils').default;
		this.classes = {
			// Signal: require('./classes/Signal').default,
		};
		this.components = {};
		this.helpers = {};
		this.modules = {};
		document.addEventListener('DOMContentLoaded', () => {
			document.documentElement.classList.remove('_loading');
		});
	}
}

global.ProjectApp = new ProjectApp();

if (module.hot) {
	module.hot.accept();
}

// // Burger menu
// if (module.hot) {
// 	module.hot.dispose(() => {
// 		const burgerMenu = document.querySelector('.menu');
// 		console.log('hello world');
// 		burgerMenu.addEventListener('click', () => {
// 			document.querySelector('.menu__btn').classList.toggle('active');
// 			document.querySelector('.header__nav').classList.toggle('active');
// 			document.body.classList.toggle('lock');
// 		});
// 	});
// }

// Burger menu
const burgerMenu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
	document.querySelector('.menu__btn').classList.toggle('active');
	document.querySelector('.header__nav').classList.toggle('active');
	document.body.classList.toggle('lock');
});

// Basket
// Check basket
function checkBasket() {
	const basket = document.querySelector('.basket__inner');
	const basketCounter = document.querySelector('.cart__counter');
	const disabledBtn = document.querySelectorAll('.btn__submit');
	const totalPrice = document.querySelector('.total-price');
	const basketEmpty = document.querySelector('.basket__empty');
	basketCounter.innerText = basket.children.length;

	if (basket.children.length > 0) {
		basketEmpty.classList.add('none');
		totalPrice.classList.remove('none');
		disabledBtn.forEach(i => {
			i.disabled = false;
		});
	} else {
		basketEmpty.classList.remove('none');
		totalPrice.classList.add('none');
		disabledBtn.forEach(i => {
			i.disabled = true;
		});
	}
}

// Calc total basket price
function calcBasketPrice() {
	const basketItems = document.querySelectorAll('.basket__item');
	const subTotalPrice = document.querySelector('[data-total-price="subtotal"]');
	const taxPrice = document.querySelector('[data-total-tax]').innerText.replace('$', '');
	const shippingPrice = document.querySelector('[data-total-shipping').innerText.replace('$', '');
	const totalPrice = document.querySelector('[data-total-price="total"]');

	let priceTotal = 0;

	basketItems.forEach(i => {
		const amountElement = i.querySelector('[data-quantity="counter"]').innerText;
		const priceElement = i.querySelector('.basket-item__price').innerText.replace('$', '');

		priceTotal += parseInt(amountElement, 10) * parseInt(priceElement, 10);
	});

	subTotalPrice.innerText = `$ ${priceTotal}`;
	totalPrice.innerText = `$ ${
		parseInt(priceTotal, 10) + parseInt(taxPrice, 10) + parseInt(shippingPrice, 10)
	}`;
}

// Basket counter product
window.addEventListener('click', event => {
	const quantityMinus = event.target.dataset.quantity === 'minus';
	const quantityPlus = event.target.dataset.quantity === 'plus';
	let quantityCounter;

	if (quantityMinus || quantityPlus) {
		const basketItem = event.target.closest('.basket__item');
		quantityCounter = basketItem.querySelector('[data-quantity="counter"]');
	}

	if (quantityMinus) {
		if (parseInt(quantityCounter.innerText, 10) > 1) {
			quantityCounter.innerText = --quantityCounter.innerText;
		}
	}

	if (quantityPlus) {
		quantityCounter.innerText = ++quantityCounter.innerText;
	}

	// Basket delete item
	if (event.target.closest('.basket-item__delete')) {
		event.target.closest('.basket__item').remove();
		checkBasket();
		calcBasketPrice();
	}
	calcBasketPrice();
});

// Run functions
checkBasket();
calcBasketPrice();
