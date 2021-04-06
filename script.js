

const btn = document.getElementById('genPass');
const input = document.getElementById('input');
const password = document.getElementById('pass');

String.prototype.firstLetterCaps = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

input.addEventListener("keyup", function(event) {
      if (event.key === 'Enter') {
        if(input.value) {
            genPass();
        }
      }
  });



function genPass() {
    var vowels = "aeiouy";
    var consonants = "bcdfghjklmnpqrstvwxz"
    let pass = '';
    for (let index = 0; index < input.value; index++) {
        // const number = Math.floor(Math.random() * array.length);
        pass += consonants.charAt(Math.floor(Math.random() * consonants.length));
        pass += vowels.charAt(Math.floor(Math.random() * vowels.length));
       
    }
    
    let number = Math.floor(Math.random() * 9999);
    password.textContent  = pass+ number;
    input.value = '';
}

btn.addEventListener('click', function(){
    genPass();
})
