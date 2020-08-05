function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(false) ? "You may enter" : "Access Denied";
console.log(answer);

var automatedAnswer = "Your account # is " + 
    ( isUserValid(true) ? "1234" : "not available");
console.log(automatedAnswer);

function condition() {
    if(isUserValid(true)) {
        return "You may enter";
    } else {
        return "Access denied";
    }
}

var answer2 = condition();

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;  
        default:  
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}
