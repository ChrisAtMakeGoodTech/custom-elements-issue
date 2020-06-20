class ReverseInputElement extends HTMLInputElement {
    constructor() {
        super();
    }
    get valueReversed() {
        return [...this.value].reverse().join('');
    }
}
customElements.define('input-reversed', ReverseInputElement, { extends: 'input' });
export default ReverseInputElement;
