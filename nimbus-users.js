// https://randomuser.me/api/?results=5000

import {NimbusRequest} from './NimbusRequest';

class NimbusUsers extends NimbusRequest {
    success() {
        console.log('Éxito');
    }

    async getUsers() {
        try {
            const users = await this.fetch({
                host: 'https://randomuser.me',
                endpoint: 'api/?results=5000',
                callbacks: [{
                    status: 200,
                    action: () => {
                        console.log('Petición de usuarios exitosa');
                    }
                    // this.success.bind(this)
                }]
            });
            return users.results;
        } catch (e) {
            // Catch error
            return [];
        }
    }
}

customElements.define('nimbus-users', NimbusUsers);
