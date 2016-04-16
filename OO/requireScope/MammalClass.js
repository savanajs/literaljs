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
