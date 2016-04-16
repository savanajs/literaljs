// Inheritance

var MammalClass = literal.createClass([], function(){

	this.name = null;
	this.email = null;

    this.construct = function(args){
    	this.name = args['name'];
    	this.email = args['email']
    }

    this.showName = function(){
    	return this.name;
    }

    this.showEmail = function(){
    	return this.email;
    }

});

var AnimalClass = literal.createClass([], function(){

	this.fight = function(){
    	return "Fighting";
    } 

});

// Multiples inheritance [MammalClass, AnimalClass] and simple inheritance [MammalClass]
var PearsonClass = literal.createClass([MammalClass, AnimalClass], function(){ 

    this.run = function(){
    	return this.email;
    }
    
});

var mammal = MammalClass.createNew({name:"Rafael", email:"rafael@stamonica.org"});
var pearson = PearsonClass.createNew({name:"Rafael2", email:"rafael2@stamonica.org"});

// console.log(mammal);
// console.log(pearson);

alert(pearson.showName());
