let punkty = 0;
let autoclickerCena = 100;
let wiecejPunktowCena = 50;
let autoclickerLiczba = 0;
let wiecejPunktowLiczba = 1;

const obrazek = document.getElementById('obrazek');
const punktyElement = document.getElementById('punkty');
const autoclickerButton = document.getElementById('autoclicker');
const wiecejPunktowButton = document.getElementById('wiecejPunktow');
const resetButton = document.getElementById('resetButton');

// resetuj cala zawartosc postepu
resetButton.addEventListener('click', function() {
    punkty = 0;
    autoclickerCena = 100;
    wiecejPunktowCena = 50;
    autoclickerLiczba = 0;
    wiecejPunktowLiczba = 1;
	localStorage.setItem('punkty', punkty);
	localStorage.setItem('autoclickerLiczba', autoclickerLiczba);
	localStorage.setItem('autoclickerCena', autoclickerCena);
	localStorage.setItem('punkty', punkty);
	localStorage.setItem('wiecejPunktowLiczba', wiecejPunktowLiczba);
	localStorage.setItem('wiecejPunktowCena', wiecejPunktowCena);
	autoclickerButton.innerHTML = `Autoclicker (cena: ${autoclickerCena})`;
    wiecejPunktowButton.innerHTML = `+1 per click (cena: ${wiecejPunktowCena})`;
    punktyElement.innerHTML = punkty.toString();
});

window.onload = function() {
	// Pobierz wartości zmiennych z Local Storage
	punkty = parseInt(localStorage.getItem('punkty')) || 0;
	autoclickerLiczba = parseInt(localStorage.getItem('autoclickerLiczba')) || 0;
	autoclickerCena = parseInt(localStorage.getItem('autoclickerCena')) || 100;
	wiecejPunktowCena = parseInt(localStorage.getItem('wiecejPunktowCena')) || 50;
	wiecejPunktowLiczba = parseInt(localStorage.getItem('wiecejPunktowLiczba')) || 1;

	// Uaktualnij wyświetlane wartości
	punktyElement.innerHTML = punkty.toString();
	autoclickerButton.innerHTML = `Autoclicker (cena: ${autoclickerCena})`;
	wiecejPunktowButton.innerHTML = `+1 per click (cena: ${wiecejPunktowCena})`
};

// Funkcja obsługująca kliknięce w iobrazek
obrazek.addEventListener('click', function() {
	this.style.transform = 'scale(0.92)';
			setTimeout(() => {
				this.style.transform = 'scale(1)';
			}, 100);
    punkty = punkty + wiecejPunktowLiczba;
	punktyElement.innerHTML = punkty.toString();
	localStorage.setItem('punkty', punkty);
});

// Funkcja obsługująca zakup autoclickera
autoclickerButton.addEventListener('click', function() {
	if (punkty >= autoclickerCena) {
		punkty -= autoclickerCena;
		autoclickerLiczba++;
	autoclickerCena = Math.floor(autoclickerCena * 1.5);
	autoclickerButton.innerHTML = `Autoclicker (cena: ${autoclickerCena})`;
	localStorage.setItem('punkty', punkty);
	localStorage.setItem('autoclickerLiczba', autoclickerLiczba);
	localStorage.setItem('autoclickerCena', autoclickerCena);
}
	
});

// Funkcja obsługująca zakup ulepszenia zwiększającego liczbę punktów za kliknięcie
wiecejPunktowButton.addEventListener('click', function() {
	if (punkty >= wiecejPunktowCena) {
	  punkty -= wiecejPunktowCena;
	  punktyElement.innerHTML = punkty.toString();
	  wiecejPunktowLiczba++;
	  wiecejPunktowCena = wiecejPunktowCena * 2;
	  wiecejPunktowButton.innerHTML = `+1 per click (cena: ${wiecejPunktowCena})`;
	  localStorage.setItem('punkty', punkty);
	  localStorage.setItem('wiecejPunktowLiczba', wiecejPunktowLiczba);
	  localStorage.setItem('wiecejPunktowCena', wiecejPunktowCena);
	}
  });
// Funkcja obsługująca automatyczne klikanie
setInterval(function() {
punkty += autoclickerLiczba;
punktyElement.innerHTML = punkty.toString();
localStorage.setItem('punkty', punkty);
}, 1000);
czy
