const input = document.getElementById('input');
const password = document.getElementById('pass');
const myvalue = document.getElementById('value');
const setNumbees = document.getElementById('setNumbees');
const countNumbers = document.getElementById('countNumbers');
const labelCountNums = document.getElementById('labelCountNums');
const valueCountNums = document.getElementById('valueCountNums');
const selectSide = document.getElementById('selectSide');
const numLeft = document.getElementById('numLeft');
const numRight = document.getElementById('numRight');



setNumbees.addEventListener('click', function(){
    if(setNumbees.checked){
        countNumbers.style.display = "block";
        labelCountNums.style.display = 'block';
        valueCountNums.style.display = 'block';
        selectSide.style.display = 'block';


    }else{
        countNumbers.style.display = "none";
        labelCountNums.style.display = 'none';
        valueCountNums.style.display = 'none';
        selectSide.style.display = 'none';
    }
})
   

myvalue.innerHTML = input.value;

const func2 = () => {
    const countNumbers = document.getElementById('countNumbers');
    const valueCountNums = document.getElementById('valueCountNums');
    valueCountNums.innerText = countNumbers.value;
    var number = '';
    var size = countNumbers.value;
    for (let index = 0; index <  size; index++) {
        number+='9';    
    }
    number = Number(number);
    return complite(number);
   
}

  const func1 = () => {
    const range = document.getElementById('input');
    const p = document.getElementById('value');
    p.innerText = range.value;
    genPass();
}

window.addEventListener('DOMContentLoaded', function(){
    genPass();
})


function genPass() {
    const combination1 = ['tch','ck','nk','gh','tion','ture','sure', 'igh'];
    const combination2 = ['wh','qu','wr','kn','wo','wa']
    var vowels = "aeiouy";
    var consonants = "bcdfghjklmnpqrstvwxz"
    let pass = '';
    for (let index = 0; index < input.value; index++) {
        if (index%2 === 0){
            pass += consonants.charAt(Math.floor(Math.random() * consonants.length));
        } else {
            pass += vowels.charAt(Math.floor(Math.random() * vowels.length));
        }
       
    }
    if(pass.length > 4){
        var elem = Math.floor(Math.random() * combination1.length);
        elem = combination1[elem];
        pass = pass.substring(0, pass.length - elem.length);
        pass = pass + elem;
        var elem1 = Math.floor(Math.random() * combination2.length);
        elem1 = combination2[elem1];
        pass = pass.substring(elem1.length);
        pass = elem1 + pass;
    }
    complite(pass);
}

window.addEventListener('DOMContentLoaded', function(){
    number = 1;
    pass = 'abc';
})


function complite(item){
    if(setNumbees.checked){
        if(Number.isInteger(item)){
            number = item;
            console.log(number);
            selectNumber(pass, number);
            countNumbers.style.display = "flex";
        }else{
            pass = item;
            selectNumber(pass, number);
            countNumbers.style.display = "flex";
        }

    } else {
        pass = item;
        password.textContent  = pass;
        countNumbers.style.display = "none";
    }
}

function selectNumber(pass, number){
    if(numLeft.checked && numRight.checked){
        password.textContent  = Math.floor(Math.random() * number) + pass + Math.floor(Math.random() * number);
    } else if (numLeft.checked){
        password.textContent  = Math.floor(Math.random() * number) + pass;
    } else if (numRight.checked) {
        password.textContent  = pass + Math.floor(Math.random() * number);
    } else {
        password.textContent  = pass;
    }
    
}
