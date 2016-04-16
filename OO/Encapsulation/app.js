// Encapsulation

var MammalClass = literal.createClass([], function(){

    // this leaves the public attribute
	this.name = "John"; 
    // var leaves the private attribute
	var _email = "john@gmail.com";  

    // this leaves the public method
    this.showName = function(){
    	return this.name;
    }
    // var leaves the private method
    var _showEmail = function(){
    	return this._email;
    }

});

var mammal = MammalClass.createNew();

alert(mammal.showName()); // John
alert(mammal._showEmail()); // Undefined method

