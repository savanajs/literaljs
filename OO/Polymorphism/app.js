// Polymorphism

var MammalClass = literal.createClass([], function() {
    this.speak = function() {
        return "Speaking";
    }
});

var PersonClass = literal.createClass([MammalClass], function() {
    this.speak = function() {
        return "Blablabla";
    }
});

var DogClass = literal.createClass([PersonClass], function() {
    this.speak = function() {
        return "Auauauauau";
    }
});

var mammal = MammalClass.createNew();
var person = PersonClass.createNew();
var dog = DogClass.createNew();

alert(mammal.speak()); // Speaking
alert(person.speak()); // Blablabla
alert(dog.speak()); // Auauauauau
