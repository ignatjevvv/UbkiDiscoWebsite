const lyricsSongs = [
    ['I', 'gave', 'you', 'my', 'heart'],
    ['Кошка', 'пиписин', 'сладкий', 'спелый', 'мандарин'],
    ['Текст', 'Текст', 'Текст', 'Текст', 'Текст'],
    ['Текст', 'Текст', 'Текст', 'Текст', 'Текст'],
    ['Текст', 'Текст', 'Текст', 'Текст', 'Текст'],
    ['Текст', 'Текст', 'Текст', 'Текст', 'Текст'],
    ['Текст', 'Текст', 'Текст', 'Текст', 'Текст'],
    ['Текст', 'Текст', 'Текст', 'Текст', 'Текст'],
    ['Текст', 'Текст', 'Текст', 'Текст', 'Текст'],
    ['Текст', 'Текст', 'Текст', 'Текст', 'Текст'],
];

let count = 1;
const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        counter(e.target.className.includes('right'));
    })
})

let counters = document.querySelector('.counter__info');
counters.innerText = count + `/${lyricsSongs.length}`;

function counter(btn) {

    let i = Boolean(btn) ? ++count : --count;
    if (i < 1) count = 1;
    if (i > lyricsSongs.length) count = lyricsSongs.length;
    counters.innerText = count + `/${lyricsSongs.length}`;
    animateSlider(Boolean(btn));
}

function animateSlider(btn) {
    let classAnimateOut = btn ? 
        'animate__backOutLeft' : 
        'animate__backOutRight';

    let classAnimateIn = btn ? 
        'animate__backInRight' : 
        'animate__backInLeft';

    let b = document.querySelector('.card__data');
    b.classList.add(classAnimateOut);

    setTimeout(() => {
        b.remove();
        b = document.createElement('div');
        b.classList.add('card__data');
        cardsContainer.appendChild(b);
        renderCards(count, classAnimateIn);
    }, 500)
}

const cardsContainer = document.querySelector('.card__container');
let cardsHTML = document.querySelector('.card__data');

const colorButtonClass = [
    ['', ''],
    ['one_front', 'one_back'],
    ['two_front', 'two_back'],
    ['three_front', 'three_back'],
    ['four_front', 'four_back'],
    ['five_front', 'five_back'],
    ['six_front', 'six_back'],
    ['seven_front', 'seven_back'],
    ['eight_front', 'eight_back'],
    ['nine_front', 'nine_back'],
    ['ten_front', 'ten_back'],
];

function renderCards(count = 0, classAnimate = 'animate__backInRight') {
    cardsHTML = document.querySelector('.card__data');
    cardsHTML.classList.add('animate__animated', classAnimate);
    if (count > 0) --count;

    cardsHTML.innerHTML = '';

    let colorFront = colorButtonClass[count][0];
    let colorBack = colorButtonClass[count][1];

    lyricsSongs[count].forEach((text, count) => {
        cardsHTML.innerHTML += `
            <label class="card" for="${count}">
                <input type="checkbox" id="${count}"/>
                <div class="back ${colorBack}">${text}</div>
                <div class="front ${colorFront}">
                    <p>${++count}</p>
                <div class="suit main"></div>
                </div>
            </label>
        `
    });
}

renderCards();