// reference type 

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

// context

const object4 = {
    a: function() {
        console.log(this);
    }
}

// instantiation

class Player{
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I am ${this.type}`);        
    }
}

class Wizard extends Player{
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEEEE I am a ${this.type}`);
    }
}

const wizard1 = new Wizard('Selly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');