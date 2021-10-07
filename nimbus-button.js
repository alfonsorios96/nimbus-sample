import {html} from 'lit';
import {NimbusUI} from './NimbusUI';
import { cssObject, getStyle, styleTagHTML } from './nimbus-button-styles';

class NimbusButton extends NimbusUI {

    constructor(){
        super();
        this.key = 'button key';
        this.eventName = 'one-event';
        this.data = {
            detail: {}
        };
    };

    /**
      * Declared properties and their corresponding attributes
      */
    static get properties() {
        return {
            key : { type : String},
            eventName : { type : String },
            data : { type : Object }
        };
    };

    static get styles() {
        return cssObject;
    };

    onClicked() {
       this.dispatch(this.eventName, this.key, this.data);
    };

    render() {
        return html`
            ${styleTagHTML}
            <button
            id="nimbus-primitive-button"
            style="${getStyle('#nimbus-primitive-button')}"
            @click="${this.onClicked}">
            <p>
                inner text
            </p>
                <slot></slot>
            </button>
        `;
    };
};

customElements.define('nimbus-button', NimbusButton);
