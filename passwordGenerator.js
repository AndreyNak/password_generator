export default class PasswordGeneration {

    constructor(options){
        this.lengthLetters = options.lengthLetters;
        this.lengthNumbers = options.lengthNumbers;
        this.setNumbers = options.setNumbers;
        this.leftNumbers = options.leftNumbers;
        this.rightNumbers = options.rightNumbers;
    }

    genNumbers(){
        var number = '';
        var size =  this.lengthNumbers;
        for (let index = 0; index <  size; index++) {
            number+='9';    
        }
        number = Number(number);
        return number;
    }


    genLetters(){
        const combination1 = ['tch','ck','nk','gh','tion','ture','sure', 'igh'];
        const combination2 = ['wh','qu','wr','kn','wo','wa'];
        var vowels = "aeiouy";
        var consonants = "bcdfghjklmnpqrstvwxz"
        let pass = '';
        for (let index = 0; index < this.lengthLetters; index++) {
            if (index%2 === 0){
                pass += consonants.charAt(Math.floor(Math.random() * consonants.length));
            } else {
                pass += vowels.charAt(Math.floor(Math.random() * vowels.length));
            }
        
        }
        if(pass.length > 10){
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
    if (this.setNumbers){
        return this.selectNumber( this.leftNumbers,this.rightNumbers);
    } 
    return this.genLetters();    
    }


    selectNumber(){
            
        if( this.leftNumbers && this.rightNumbers){
            return this.randomNumber(this.genNumbers()) + this.genLetters() + this.randomNumber(this.genNumbers());
        } else if (this.leftNumbers) {
            return this.randomNumber(this.genNumbers()) + this.genLetters(); 
        } else if (this.rightNumbers) {
        return this.genLetters() + this.randomNumber(this.genNumbers())
        }  
        return  this.genLetters();
    }

    randomNumber(number){
        return Math.floor(Math.random() * number)   
    }
}
