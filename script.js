// scope

function faraz() {
    var a = "hello";
    console.log(a);
}

// Root scope (window)

var fun = 5;

function funfunction() {
    // child scope
    var fun = "hello";
    console.log(1, fun);
}

function funerfunction() {
    // child scope
    var fun = "bye";
    console.log(2, fun);
}

function funestfunction() {
    // child scope
    fun = "AHHHH";
    console.log(3, fun);
}

console.log("window", fun);
funfunction();
funerfunction();
funestfunction();
