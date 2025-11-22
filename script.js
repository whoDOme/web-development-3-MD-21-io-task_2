document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.querySelector('.close');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

const form = document.getElementById('rental-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const game = form.querySelector('select').value;

    if (!name || !phone || !game) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
        alert('Пожалуйста, введите корректный номер телефона');
        return;
    }

    alert(`Спасибо, ${name}! Мы скоро свяжемся с вами для подтверждения заказа игры.`);
    form.reset();
    modal.style.display = 'none';
});

// Загрузка игр в каталог
const games = [
    {
        name: 'Колонизаторы',
        players: '3-4',
        time: '60-90 мин',
        age: '10+',
        price: '500₽/неделя',
        image: 'images/catan.jpg'
    },
    {
        name: 'Кодовые имена',
        players: '2-8',
        time: '15-30 мин',
        age: '10+',
        price: '300₽/неделя',
        image: 'images/codenames.jpg'
    },
    {
        name: 'Диксит',
        players: '3-6',
        time: '30 мин',
        age: '8+',
        price: '400₽/неделя',
        image: 'images/dixit.jpg'
    }
];

const gamesGrid = document.querySelector('.games-grid');

games.forEach(game => {
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card';
    gameCard.innerHTML = `
        <div class="game-image">
            <img src="${game.image}" alt="${game.name}" onerror="this.style.display='none'">
        </div>
        <h3>${game.name}</h3>
        <p>Игроки: ${game.players}</p>
        <p>Время: ${game.time}</p>
        <p>Возраст: ${game.age}</p>
        <p class="price">${game.price}</p>
        <button class="rent-btn">Арендовать</button>
    `;
    gamesGrid.appendChild(gameCard);
});