import { fromEvent } from 'rxjs';

const container = document.getElementById('container');
const flightsLink = document.getElementById('mfe');
const homeLink = document.getElementById('home');

function removeFirstChild() {
    if (container.firstChild) {
        container.firstChild.remove();
    }
}

function displayWelcomeMessage() {
    removeFirstChild();
    container.innerHTML = `<h1>Welcome!</h1>`;
}

(async function () {
    displayWelcomeMessage();

    fromEvent(flightsLink, 'click').subscribe(async () => {
        const module = await import('subproj/component');

        const elm = document.createElement(module.elementName);
        removeFirstChild();
        container.appendChild(elm);
    });

    fromEvent(homeLink, 'click').subscribe((_) => {
        displayWelcomeMessage();
    });
})();
