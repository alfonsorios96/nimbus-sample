import {html} from 'lit';

import {NimbusUI} from './NimbusUI';

class NimbusButton extends NimbusUI {

    onClicked() {
       this.dispatch('one-event', 'NIMBUS_BUTTON_PAGE_1', 'hello');
    }

    render() {
        return html`
            <button @click="${this.onClicked}">
                <slot></slot>
            </button>
        `;
    }
}

customElements.define('nimbus-button', NimbusButton);
