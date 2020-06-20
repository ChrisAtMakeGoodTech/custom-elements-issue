import ReverseInputElement from "./ReverseInputElement";

const Main = document.getElementById('main');
const Input = <ReverseInputElement>document.createElement('input', { is: 'input-reversed' });

Main?.append(Input);