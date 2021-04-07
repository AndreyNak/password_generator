const input = document.getElementById('input');
const password = document.getElementById('pass');
const myvalue = document.getElementById('value');

myvalue.innerHTML = input.value;


  const func1 = () => {
    const range = document.getElementById('input');
    const p = document.getElementById('value');
    p.innerText = range.value;
    genPass();
}


function genPass() {
    const combination1 = ['tch','ck','nk','gh','tion','ture','sure', 'igh'];
    const combination2 = ['wh','qu','wr','kn','wo','wa']
    var vowels = "aeiouy";
    var consonants = "bcdfghjklmnpqrstvwxz"
    let pass = '';
    for (let index = 0; index < input.value; index++) {
        pass += consonants.charAt(Math.floor(Math.random() * consonants.length));
        pass += vowels.charAt(Math.floor(Math.random() * vowels.length));
       
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
    var number = '';
    var size = Math.floor(Math.random() * input.value);
    for (let index = 0; index <  size; index++) {
        number+='9';    
    }
    number = Number(number);
    password.textContent  = Math.floor(Math.random() * number) + pass + Math.floor(Math.random() * number);

}
