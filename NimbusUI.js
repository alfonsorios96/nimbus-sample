import { NimbusCore } from './nimbus-core';

export class NimbusUI extends NimbusCore {

    getElement(query, deep = false){
        const shadowDOMResult = this.shadowRoot.querySelector(query);
        if(shadowDOMResult !== null) {
            return shadowDOMResult;
        } else {
            // TODO implements deeping search
        }
    };

    getElements(query, deep = false){
        return this.shadowRoot.querySelectorAll(query);
    };
}
