import { LitElement } from 'lit';

export class NimbusUI extends LitElement {

    constructor() {
        super();
        /**
         * this property is an array of objects. Prototype:
         * {
         *   eventName: '',
         *   eventHandler: () => {}
         * }
         */
        this._subscriptions = [];
    };

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        for (const eventData of this._subscriptions) {
            this.subscribe(eventData.eventName, eventData.eventHandler);
        };
    };

    subscribe(event_name, listener) {
        this.addEventListener(event_name, listener);
    };

    setSubscriptionsArray(subscriptionsArray){
        this._subscriptions = subscriptionsArray;
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
};