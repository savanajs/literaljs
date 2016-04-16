// Static Class

var mammal = literal.createStaticClass([], function() {
    this.speak = function() {
        return "Speaking";
    }
});

// It is not necessary to instantiate the class with mammal.createNew();
alert(mammal.speak()); // Speaking
