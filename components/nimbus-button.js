import {html} from 'lit';
import {NimbusUI} from '../libs/NimbusUI';
import {cssObject, getStyle, styleTagHTML} from './nimbus-button-styles';

class NimbusButton extends NimbusUI {

    constructor() {
        super();
        this.key = '';
        this.eventName = '';
        this.data = {
            detail: {}
        };
        this.callback = () => {};
    };

    /**
     * Declared properties and their corresponding attributes
     */
    static get properties() {
        return {
            key: {type: String},
            eventName: {type: String, attribute: 'event-name'}
        };
    };

    static get styles() {
        return cssObject;
    };

    onClicked() {
        const data = this.callback();
        this.dispatch(this.eventName, this.key, data);
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
}

customElements.define('nimbus-button', NimbusButton);
