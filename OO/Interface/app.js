// Interfaces

var VehicleInterface = literal.createInterface([], function() {

    // Place your methodos within this.run to call automatically
	this.run = function(){
		this.accelerate();
	}
 
});

var CarClass = literal.createClass([VehicleInterface], function(){
	this.accelerate = function(){
		alert("Running");
	};
});


var car = CarClass.createNew();

