// Getters and Setters

var PersonClass = literal.createClass([],function() {

    this.name;
    this.gender;
    this.city;
    var _password;

    // Setters
    this.set_name = function(name) {
        this.name = name;
    }

    this.set_gender = function(gender) {
        this.gender = gender;
    }

    this.set_city = function(city) {
        this.city = city;
    }

    this.set_password = function(pwd) {
        _password = pwd;
    }

    // Getters
    this.get_name = function() {
        return this.name;
    }

    this.get_gender = function() {
        return this.gender;
    }

    this.get_city = function() {
        return this.city;
    }

    this.get_password = function() {
        return _password;
    }

    this.getUserInfo = function() {
        return "My name is " + this.get_name() + " - Sex: " + this.get_gender() + " - city: " + this.get_city() + " - password: " + this.get_password();
    }

});

var person = PersonClass.createNew();

person.set_name("John");
person.set_gender("Male");
person.set_city("Barueri");
person.set_password(123456789);

alert(person.getUserInfo()); // My name is John - Sex: Male - city: Barueri - password: 123456789
