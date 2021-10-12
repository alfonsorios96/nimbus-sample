import {html} from 'lit';

import {NimbusUI} from './NimbusUI';
import './nimbus-button';
import './nimbus-users';
import {NimbusUsers} from './nimbus-users';

class NimbusTestContainer extends NimbusUI {

    static get properties() {
        return {
            users: {type: Array}
        };
    }

    constructor() {
        super();
        this.subscribe([
            {
                event_name: 'one-event',
                listener: (event) => {
                    // TODO Action for one-event
                }
            },
            {
                event_name: 'users-results',
                listener: (event) => {
                    this.users = event?.detail?.data;
                }
            }
        ]);
        this.users = [];
        this.usersController = new NimbusUsers();
    };

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.users = await this.usersController.getUsers();
    };

    onNimbusClicked() {
        console.log('Hello from Nimbus clicked');
        return {};
    }

    render() {
        return html`
            <nimbus-users></nimbus-users>
            <nimbus-button event-name="one-event" .callback="${this.onNimbusClicked.bind(this)}">
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
}

customElements.define('nimbus-test-container', NimbusTestContainer);
