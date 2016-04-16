// Abstract Class

var MammalClass = literal.createAbstractClass([], function() {
    this.gender = "Male";
});

var PeopleClass = literal.createClass([MammalClass], function(){
	this.construct = function(){
		alert(this.gender);
	};
});

var AnimalClass = literal.createClass([MammalClass], function(){
	this.construct = function(){
		alert(this.gender);
	};
});

var John = PeopleClass.createNew();
var Jack = PeopleClass.createNew();

var toto = AnimalClass.createNew();
var hercules = AnimalClass.createNew();
