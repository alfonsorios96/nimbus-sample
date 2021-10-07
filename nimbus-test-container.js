import {html} from 'lit';

import {NimbusUI} from './NimbusUI';
import './nimbus-button';
import './nimbus-users';
import subscriptions from './nimbus-test-container-subscriptions';

class NimbusTestContainer extends NimbusUI {
    
    static get properties() {
        return {
            users: {type: Array}
        };
    }

    constructor() {
        super();
        this.setSubscriptionsArray(subscriptions);
        this.users = [];
    };

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        const userRequester = this.takeShadowElement('nimbus-users');
        this.users = await userRequester.getUsers();
    };

    render() {
        return html`
            <nimbus-users></nimbus-users>
            <nimbus-button>
                <p>
                    Click me!
                </p> 
            </nimbus-button>

            <ul>
                ${this.users.map(user => html`
                    <li>Nombre: ${user.name.first}</li>
                `)}
            </ul>
        `;
    };
};

customElements.define('nimbus-test-container', NimbusTestContainer);
