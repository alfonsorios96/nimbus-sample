import {html} from 'lit';

import {NimbusUI} from './NimbusUI';
import './nimbus-button';

class NimbusTestContainer extends NimbusUI {

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.subscribe(['one-event']);
    }

    render() {
        return html`
            <nimbus-button>Click me!</nimbus-button>
        `;
    }
}

customElements.define('nimbus-test-container', NimbusTestContainer);
