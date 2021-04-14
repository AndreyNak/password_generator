import Costomizator from './costomizator.js';

const input = document.getElementById('input');
const pass = document.getElementById('pass');
const value = document.getElementById('value');

const HideNumbersId = document.getElementById('HideNumbers');

const setNumbees  = document.getElementById('setNumbees');
const countNumbers = document.getElementById('countNumbers');
const valueCountNums = document.getElementById('valueCountNums');
const numLeft = document.getElementById('numLeft');
const numRight = document.getElementById('numRight');


const options = {
    numLeft:numLeft,
    numRight:numRight,
    countNumbers:countNumbers,
    valueCountNums:valueCountNums
}

setNumbees.addEventListener('click', () => {
    const obj = new Costomizator(options);
    obj.checkedNums(setNumbees,HideNumbersId);
})



window.addEventListener('DOMContentLoaded', () => {
    const obj = new Costomizator(options);
    pass.innerText = obj.genPass();
    value.innerText = input.value;
})


input.addEventListener('change', () => {
    const obj = new Costomizator(options);
    pass.innerText = obj.genPass();
    value.innerText = input.value;
})

countNumbers.addEventListener('change', () => {
    const obj = new Costomizator(options);
    pass.innerText = obj.genPass();
    value.innerText = input.value;
})
