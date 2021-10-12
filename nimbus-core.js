import { LitElement } from 'lit';

export class NimbusCore extends LitElement {

    subscribe(eventsHandlers) {
        for (const {event_name, listener} of eventsHandlers) {
            this.addEventListener(event_name, listener);
        }
    };

    dispatch(event_name, key, data) {
        this.dispatchEvent(new CustomEvent(event_name, {
            bubbles: false,
            composed: true,
            detail: {
                key, data
            }
        }));
    };
}
