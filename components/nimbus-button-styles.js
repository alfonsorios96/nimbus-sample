import { html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

export const cssObject = css`
  :host {
    display: block;
    padding: 25px;
    color: var(--nimbus-drop-input-text-color, #000);
  }
  ::slotted(*) { color: red; };
`;

//  Cambiar implementación: de objeto a Map class
const stylesObject = {
  '#nimbus-primitive-button' : { 
    fontSize: '10rem',
    backgroundColor : 'gray'
  }
};

export const getStyle = querySelector => styleMap(stylesObject[querySelector]);

const styleRulesForComponent = `
  #nimbus-primitive-button {
    color: blue
  }
`;

export const styleTagHTML = html`
  <style>
    ${styleRulesForComponent}
  </style>
`;