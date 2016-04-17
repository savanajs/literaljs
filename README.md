![ScreenShot](https://github.com/savanajs/literaljs/blob/master/capa.jpg)

# LiteralJS
**Object orientation in the most classic way JavaScript**

Below is a practical way, how to use the framework and its features of a way of letting your Javascript-oriented and organized way of classical objects.

## How it works? ##
The framework works so return literal objects so a class is created and implemented by methods attributes. The example below shows this operation.

### Create Class ###

```javascript
var UserClass = literal.createClass([], function(){

    this.name = 'John Smith',
    this.email = 'john@email.com',
    
    this.showName = function(){
        return this.name;
    }

    this.showEmail = function(){
        return this.email;
    }

});
```

### Object literal output ###

The literal object contained in the variable **UserClass**
```javascript
{
    name: 'John Smith',
    email: 'john@email.com',
    showName: function(){
       return this.name;
    },
    showEmail: function(){
       return this.email;
    }
}
```
The literal.createClass actually creates a literal object to its use in the scope of your project

## Installation ##

The installation of this framework is very simple, just you need to import the file "**literal.min.js**" in your **<head>** or the end of the **</ body>** to start using.

```html
<!DOCTYPE html>
<html>
    <head>
         <title>Literal JS</title>
         <meta name="description" content="">
         <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
         <script type="text/javascript" src="lib/literal.min.js"></script>
     </head>
     <body>
     </body>
</html>
```

## Compatibility ##
* Chrome
* Firefox
* Safari
* IE8+

## Download ##
### **Very light and easy to use** ###
[Click here](https://github.com/savanajs/literaljs/archive/master.zip) to download the framework. Only **1.14KB** (literal.min.js)

# Use #

### Class ###
Class is a set of object attributes and methods. A class defines the behavior of objects through their methods, and which states it is able to maintain through their attributes.

If you think classes to be inherited passed as array "[]". If you do not think classes to be inherited leave this empty array.

By consensus and code pattern we will start our classes always like this:
**NameclasseClass**

```javascript
var UserClass = literal.createClass([], function(){

});
```

### Constructor ###
Constructor is a method called as soon as a new object instance is created.

The **args** get the parameters passed by New instance create

```javascript
var UserClass = literal.createClass([], function(){

    this.construct = function(args){
    	alert(args['name']);
    }

});

var user = UserClass.createNew({name:"John"});

```

### Encapsulation ###
Encapsulation is the separation of internal and external aspects of an object. This mechanism is used widely to prevent direct access to the state of an object (its attributes) externally providing methods that access (getters) and change (setters) these states

When using this to create an attribute or method, automatically we are saying that it is **public** and can be accessed outside the class. But when we create an attribute or method with the var statement are saying it is **private**, so it can not be accessed outside the class.

We will use **"_" + variable** in **private attributes** are by default organization and standard code.

```javascript
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
```

### Inheritance ###
It is the mechanism by which a class (subclass) can extend another class (superclass), taking advantage of their behaviors (methods) and possible variables (attributes).

```javascript
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
```

### Polymorphism ###
It is the principle by which two or more classes derived from a single superclass may rely on methods that have the same identification (signature) but different behaviors, specialized for each class.

```javascript
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
```

### Interface ###
It is a contract between the class and the outside world. When a class implements an interface, it is committed to providing the behavior published by the interface

```javascript
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
```

### Static Class ###
It is used to define a method or attribute in a class is static. This means that method / attribute belongs to the class rather than to an instance of it and, therefore, can be accessed without instantiate a new object.

```javascript
var mammal = literal.createStaticClass([], function() {
    this.speak = function() {
        return "Speaking";
    }
});

// It is not necessary to instantiate the class with mammal.createNew();
alert(mammal.speak()); // Speaking
```

### Abstract Class ###
Is the ability to concentrate on the essential aspects of any context, ignoring minor features or accidental. In object-oriented modeling, a class is an abstraction of existing entities in the software domain system

```javascript
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
```

### Getters and Setters ###
Create up getters and setters for all properties of a class. The advantage of using getters and setters is the possibility to validate or modify data when using this pattern.

```javascript
var PersonClass = literal.createClass([],function() {

    this.name = null;
    this.gender = null;
    this.city = null;
    var _password = null;

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
person.set_city("Miami");
person.set_password(123456789);

alert(person.getUserInfo()); // My name is John - Sex: Male - city: Barueri - password: 123456789
```

### Create New ###
The createNew features over a function, return the reference, an arrow pointing to the object in memory.

**With params**

```javascript
var nameclass = nameClass.createNew({name:"John Smith", email:"john@email.com"});
```
**Without params**

```javascript
var nameclass = nameClass.createNew();
```

#Bonus#

### Require Scope ###

The correct way to use the classes in object orientation is separalas for files and to include it as they are being used in your scope, you would then have to iserir each class file in the head. See the example:

```html
<head>
  <title>Literal JS</title>
  <meta name="description" content="">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
  <script type="text/javascript" src="lib/literal.min.js"></script>
  <script type="text/javascript" src="requireScopeUser.js"></script>
  <script type="text/javascript" src="MammalClass.js"></script>
  <script type="text/javascript" src="AnimalClass.js"></script>
  <script type="text/javascript" src="PearsonClass.js"></script>
  <script type="text/javascript" src="app.js"></script>
</head>

```
To facilitate inclusion, then we will create only a file called (**requireScopeUser.js**), and in it we include the scope of files.

To organize our inclusion the name of the file that begin like this: "**RequireScope**NameFile.js"

```html
<head>
  <title>Literal JS</title>
  <meta name="description" content="">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
  <script type="text/javascript" src="lib/literal.min.js"></script>
  <script src="requireScopeUser.js" type="text/javascript"></script>
</head>

```

**requireScopeUser.js**

```javascript
literal.requireScope(
	[
		'MammalClass.js', // 1º file of loaded
		'AnimalClass.js', // 2º file of loaded
		'PearsonClass.js', // 3º file of loaded
		'app.js' // 4º file of loaded
	]
);
```

At the end of the files will be included in your head at runtime

```html
<head>
  <title>Literal JS</title>
  <meta name="description" content="">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
  <script type="text/javascript" src="lib/literal.min.js"></script>
  <script type="text/javascript" src="requireScopeUser.js"></script>
  <script type="text/javascript" src="MammalClass.js"></script>
  <script type="text/javascript" src="AnimalClass.js"></script>
  <script type="text/javascript" src="PearsonClass.js"></script>
  <script type="text/javascript" src="app.js"></script>
</head>

```

## License ##

The MIT License (MIT)
Copyright (c) 2016 LiteralJS
