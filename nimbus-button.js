import {html} from 'lit';

import {NimbusUI} from './NimbusUI';

class NimbusButton extends NimbusUI {
    constructor(){
        super();
        this.key = 'button key';
        this.eventName = 'one-event';
        this.data = {
            detail: {}
        };
    };

    onClicked() {
       this.dispatch(this.eventName, this.key, this.data);
    };

    render() {
        return html`
            <button @click="${this.onClicked}">
                <slot></slot>
            </button>
        `;
    };
};

customElements.define('nimbus-button', NimbusButton);
