import PasswordGeneration from './passwordGenerator.js';


const options = {
    lengthLetters: 5,
    lengthNumbers: 3,
    setNumbers: true,
    leftNumbers: false,
    rightNumbers: false
}

const obj  = new PasswordGeneration(options);

console.log(obj.genPass());
