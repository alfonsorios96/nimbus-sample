import {LitElement} from 'lit';

export class NimbusUI extends LitElement {

    subscribe(event_names) {
        for (const name of event_names) {
            this.addEventListener(name, (event) => {
                console.log(event);
            });
        }
    }

    dispatch(event_name, key, data) {
        this.dispatchEvent(new CustomEvent(event_name, {
            bubbles: false,
            composed: true,
            detail: {
                key, data
            }
        }));
    }
}
