export default class PasswordGenerator {
    static ck = false;

    constructor(options){
        this.numLeft = options.numLeft;
        this.numRight = options.numRight;
        this.countNumbers = options.countNumbers;
        this.valueCountNums = options.valueCountNums;
    }

    checkedNums(checkBox, tagId) {
        if(checkBox.checked){
            tagId.style.display = 'block';
            PasswordGenerator.ck = true;
        }else{
            tagId.style.display = 'none';
            PasswordGenerator.ck = false;
        }
    }


    genNumbers(){
        this.valueCountNums.innerText =  this.countNumbers.value;
        var number = '';
        var size =  this.countNumbers.value;
        for (let index = 0; index <  size; index++) {
            number+='9';    
        }
        number = Number(number);
        return number;
    }

    genLetters() {
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

        return pass;
    }

    genPass(){
        if (PasswordGenerator.ck){
            return this.selectNumber( this.numLeft,this.numRight);
        } 
        return this.genLetters();    
    }

    selectNumber(numLeft,numRight){
        
        if(numLeft.checked && numRight.checked){
            return this.randomNumber(this.genNumbers()) + this.genLetters() + this.randomNumber(this.genNumbers());
        } else if (numLeft.checked) {
            return this.randomNumber(this.genNumbers()) + this.genLetters(); 
        } else if (numRight.checked) {
           return this.genLetters() + this.randomNumber(this.genNumbers())
        }  
        return  this.genLetters();
    }

    randomNumber(number){
        return Math.floor(Math.random() * number)   
    }
}