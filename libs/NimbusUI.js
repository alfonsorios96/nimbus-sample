import { NimbusCore } from './nimbus-core';
import { NimbusTreeSearch } from './NimbusTreeSearch';

export class NimbusUI extends NimbusCore {

    getElement(query, deep = false){
        const root = this;
        const handlers = {
            analyze: (node, endSearch) => {
                const shadowResults = node.shadowRoot ? deep ? Array.from(node.shadowRoot.querySelectorAll(query)) : node.shadowRoot.querySelector(query) ? [node.shadowRoot.querySelector(query)] : [] : [];
                const lightResults = deep ? Array.from(node.querySelectorAll(query)) : node.querySelector(query) ? [node.querySelector(query)] : [];
                const queryResults = [...shadowResults, ...lightResults];
                if(queryResults.length > 0 && !deep) endSearch();
                if(queryResults.length > 0) return queryResults;
                return [];
            },
            getChilds: node => {
                const shadowChildren = node.shadowRoot ? Array.from(node.shadowRoot.children) : [];
                const ligthChilddren = Array.from(node.children)
                return [...shadowChildren, ...ligthChilddren]
            }
        };
        const analyzer = new NimbusTreeSearch(root, handlers);
        analyzer.initSearch();
        const cleanResults = new Set(analyzer.results);
        return Array.from(cleanResults);
    };
}
