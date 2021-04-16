import PasswordGeneration from './passwordGenerator.js';


const input = document.getElementById('input');
const lengthLetters = input.value;

// const pass = document.getElementById('pass');
// const value = document.getElementById('value');

const setNumbees  = document.getElementById('setNumbees');
const checkSetNumbers = setNumbees.checked ? true : false;

const numLeft = document.getElementById('numLeft');
const checknumLeft = numLeft.checked ? true : false;
const numRight = document.getElementById('numRight');
const checknumRight = numRight.checked ? true : false;

const hideNumbersId = document.getElementById('hideNumbers');
const countNumbers = document.getElementById('countNumbers');
// const lengthNumbers = countNumbers.value;





window.addEventListener('DOMContentLoaded', () => {
    const obj = new PasswordGeneration(
        {
            lengthLetters: input.value,
            lengthNumbers: countNumbers.value,
            setNumbers: checkSetNumbers,
            leftNumbers: checknumLeft,
            rightNumbers: checknumRight
        }
    );
    pass.innerText = obj.genPass();
    value.innerText = input.value;
    valueCountNums.innerText = countNumbers.value;
})



input.addEventListener('input', () => {
    const checkSetNumbers = setNumbees.checked ? true : false;
    const checknumRight = numRight.checked ? true : false;
    const checknumLeft = numLeft.checked ? true : false;
    const obj = new PasswordGeneration(
        {
            lengthLetters: input.value,
            lengthNumbers: countNumbers.value,
            setNumbers: checkSetNumbers,
            leftNumbers: checknumLeft,
            rightNumbers: checknumRight
        }
    );

    pass.innerText = obj.genPass();
    value.innerText = input.value;

})


setNumbees.addEventListener('click', () => {
    const checkSetNumbers = setNumbees.checked ? true : false;
    const checknumRight = numRight.checked ? true : false;
    const checknumLeft = numLeft.checked ? true : false;
    const obj = new PasswordGeneration(
        {
            lengthLetters: input.value,
            lengthNumbers: countNumbers.value,
            setNumbers: checkSetNumbers,
            leftNumbers: checknumLeft,
            rightNumbers: checknumRight
        }
    );
    pass.innerText = obj.genPass();
    value.innerText = input.value;
})

setNumbees.addEventListener('click', () => {
    if(setNumbees.checked){
        hideNumbersId.style.display = 'block';
    }else{
        hideNumbersId.style.display = 'none';
    }
})


countNumbers.addEventListener('input', () => {
    const checkSetNumbers = setNumbees.checked ? true : false;
    const checknumRight = numRight.checked ? true : false;
    const checknumLeft = numLeft.checked ? true : false;
    const obj = new PasswordGeneration(
        {
            lengthLetters: input.value,
            lengthNumbers: countNumbers.value,
            setNumbers: checkSetNumbers,
            leftNumbers: checknumLeft,
            rightNumbers: checknumRight
        }
    );

    pass.innerText = obj.genPass();
    valueCountNums.innerText = countNumbers.value;
})

numLeft.addEventListener('click', () => {
    const checkSetNumbers = setNumbees.checked ? true : false;
    const checknumRight = numRight.checked ? true : false;
    const checknumLeft = numLeft.checked ? true : false;
    const obj = new PasswordGeneration(
        {
            lengthLetters: input.value,
            lengthNumbers: countNumbers.value,
            setNumbers: checkSetNumbers,
            leftNumbers: checknumLeft,
            rightNumbers: checknumRight
        }
    );
    if (numLeft.checked){
        pass.innerText = obj.selectNumber();
    } else {
        pass.innerText = obj.selectNumber();
    }
})

numRight.addEventListener('click', () => {
    const checkSetNumbers = setNumbees.checked ? true : false;
    const checknumRight = numRight.checked ? true : false;
    const checknumLeft = numLeft.checked ? true : false;
    const obj = new PasswordGeneration(
        {
            lengthLetters: input.value,
            lengthNumbers: countNumbers.value,
            setNumbers: checkSetNumbers,
            leftNumbers: checknumLeft,
            rightNumbers: checknumRight
        }
    );
    if (numRight.checked){
        pass.innerText = obj.selectNumber();
    } else {
        pass.innerText = obj.selectNumber();
    }
})




