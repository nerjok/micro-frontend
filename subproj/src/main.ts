class Microfrontend1 extends HTMLElement {
    set title(title) {
        console.log('setTitle', title);
        
    }
    get title() {
        return (this.getAttribute('custProp')as any)?.title;
    }

    static get observedAttributes() {
        return ['title', 'custProp'];
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log('[[attrChange]]', arguments);
        
        if (oldVal !== newVal) {
    
        }
      }
    async connectedCallback() {
        this.shadowRoot.innerHTML = `
            <div id="container">
                <h1>Web component in sub microfrontent</h1>
                <h2>${this.title}</h2>
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
