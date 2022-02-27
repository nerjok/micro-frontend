class Microfrontend1 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        this.shadowRoot.innerHTML = `
            <div id="container">
                <h1>Web component in sub mfe</h1>
                <div>
                    Message:
                </div>
                <div>
                    <input type="text" placeholder="From">
                </div>
                <div>
                    <input type="text" placeholder="To">
                </div>
                <div>
                    <button id="search">Search</button>
                    <button id="terms">Terms...</button>
                </div>
            </div>
        `;
    }
}

const elementName = 'microfrontend-one';
customElements.define(elementName, Microfrontend1);

export { elementName };
