// Constructor

var MammalClass = literal.createClass([], function(){

    this.construct = function(args){
    	alert(args['name']);
    }

});

var mammal = MammalClass.createNew({name:"John"});


