class Person {

    //CONSTRUCTOR +++++++++++++++++++++++++++++
    constructor() {
    }

    //PUBLIC METHODS ++++++++++++++++++++++++
    public saysHello() {
        console.log("Hello world!");
    }
}

function init() {
    var myPerson = new Person();
    myPerson.saysHello();
}

