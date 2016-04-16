/*
Literal JS
Created By Rafael Cruz
Contact: projetosavanajs@gmail.com
Version: 1.0.0
Release: 16/04/2016
Framework JavaScript
Brazil, São Paulo - Barueri
*/

/*
The MIT License (MIT)
Copyright (c) 2016 Literal JS
......................................................................................................
Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
and associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial 
portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

!(function() {

    "use strict";

    // For IE 8
    if (!Object.keys) {
        Object.keys = function(obj) {
            var keys = [];
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    keys.push(i);
                }
            }
            return keys;
        };
    }

    var insertScript = function(files){
        // Create dynamic scripts files
        var element;
        for(var i = 0, len = files.length; i < len; i++){
            element = document.createElement('script');
            element.type = "text/javascript"
            element.src = files[i];
            document.getElementsByTagName("head")[0].appendChild(element);
        }
        return null;
    }

    var literal = function() {
        // To instantiate a class Literal
        return new Literal();
    };

    var Literal = function() {};
    // Literal function
    literal.fn = Literal.prototype = {
        // Does the count of items in an object
        objectCounter: function(objects) {
            return Object.keys(objects).length;
        },
        // Create a class that will be used in your application
        createClass: function(extendlist, callback) {
            var fn = (typeof callback == "function") ? true : false;
            // Builds the object literal
            var objectLiteral = {
                // Class instancing created
                createNew: function(args) {
                    // Runs the "constructor" if it exists in the class
                    if (typeof this.construct != "undefined")
                        this.construct(args);
                    // Runs the "run of interface" if it exists in the class
                    if (typeof this.run != "undefined")
                        this.run();
                    // Return the object literal mounted
                    return this;
                }
            };
            // Verifies that the parameters of heritage objects
            if (extendlist)
            // Heritage objects
                this.inheritance(objectLiteral, extendlist);

            if (fn)
            // Here we return the this object to associate its attributes and 
            // methods for public in the returned object literal
                callback.call(objectLiteral);

            // Returns the object literal
            return objectLiteral;

        },
        createStaticClass: function(extendlist, callback) {
            // Result of callback
            var fn = (typeof callback == "function") ? true : false;

            // Builds the object literal empty
            var objectLiteral = {};

            // Verifies that the parameters of heritage objects
            if (extendlist)
            // Heritage objects
                this.inheritance(objectLiteral, extendlist);

            // If there is return
            if (fn)
            // Here we return the this object to associate its attributes and 
            // methods for public in the returned object literal
                callback.call(objectLiteral);

            // Returns the object literal
            return objectLiteral;
        },
        createAbstractClass: function(extendlist, callback) {
            // Returns the object literal
            return this.createStaticClass(extendlist, callback);
        },
        createInterface: function(extendlist, callback) {
            // Returns the object literal
            return this.createAbstractClass(extendlist, callback);
        },
        inheritance: function(obj, props) {
            // Heritage objects
            if (!obj || !props) return;
            // Loop for multiple inheritance in the main object
            for (var c = 0, len = this.objectCounter(props); c < len; c++) {
                for (var prop in props[c]) {
                    if (props[c].hasOwnProperty(prop)) {
                        obj[prop] = props[c][prop];
                    }
                }
            }
            // Returns the object literal
            return obj;
        },
        requireScope: function(files){
            if(typeof files == "object" && files){
               insertScript(files);
            }
            return null;
        }
    };

    if (!window.literal)
        // Create a variable in the window to be accessed outside the framework of the scope
        window.literal = literal();

})();
