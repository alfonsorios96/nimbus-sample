import {html} from 'lit';

import {NimbusUI} from './NimbusUI';
import './nimbus-button';
import './nimbus-users';

class NimbusTestContainer extends NimbusUI {

    static get properties() {
        return {
            users: {type: Array}
        };
    }

    constructor() {
        super();
        this.users = [];
    }

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.subscribe(['one-event']);
        const userRequester = this.shadowRoot.querySelector('nimbus-users');
        const users = await userRequester.getUsers();
        this.users = [...users];
    }

    render() {
        return html`
            <nimbus-users></nimbus-users>
            <nimbus-button>Click me!</nimbus-button>
            
            <ul>
                ${this.users.map(user => html`
                    <li>Nombre: ${user.name.first}</li>
                `)}
            </ul>
        `;
    }
}

customElements.define('nimbus-test-container', NimbusTestContainer);
