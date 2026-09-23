const seasonButtons = document.querySelectorAll('.season-filter');
const seasonPanels = document.querySelectorAll('[data-season-panel]');
const trailerVideo = document.querySelector('#trailer-video');
const trailerSeason = document.querySelector('#trailer-season');
const trailerDescription = document.querySelector('#trailer-description');

const trailers = {
    // ID corregido solo con el código del video
    1: { id: '0qSarZpylxs', description: 'El origen de dos hermanas y el choque entre dos ciudades.' },
    2: { id: '9YkyGz8ErA0', description: 'La guerra se acerca y las decisiones tendrán consecuencias.' }
};

seasonButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const season = button.dataset.season;
        seasonButtons.forEach((item) => item.classList.toggle('active', item === button));
        seasonPanels.forEach((panel) => panel.classList.toggle('is-hidden', panel.dataset.seasonPanel !== season));
        if (trailerVideo && trailers[season]) {
            trailerVideo.src = `https://www.youtube.com/embed/${trailers[season].id}`;
            trailerVideo.title = `Trailer de Arcane temporada ${season}`;
            trailerSeason.textContent = `Temporada 0${season}`;
            trailerDescription.textContent = trailers[season].description;
        }
    });
});

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
	contactForm.addEventListener('submit', (event) => {
		event.preventDefault();
		contactForm.querySelector('.form-status').textContent = 'Mensaje preparado. Gracias por escribirnos.';
		contactForm.reset();
	});
}
