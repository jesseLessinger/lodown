'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
 /*
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

*/

var _ = {};


/**
* START OF OUR LIBRARY!
*/


/**
 * _.identity: Designed to return whatever value it's passed as a single arguement
 * 
 * @param {any type} value: the value to be returned
 */

_.identity = function(value) {
    return value;
};

 /**
 * _.typeOf: Designed to return a string represention of whatever 
 * datatype the function is passed
 * 
 * @param {any type} value: the value whose type will be returned
 */

_.typeOf = function(value) {
    
    if (value instanceof Array) {
        return 'array';
    } else if (value instanceof Date) {
        return 'date';
    } else if (value === null) {
        return 'null';
    } else {
        return typeof value;
    }
};

/**
 * _.first: designed to return an array containing the first (n) elements of a given array.
 * 
 * @param {Array} arr: the array from which the first (n) elements will be found
 * @param {Number} n: the number of element to include in the output array
 */

_.first = function(arr, n) {
    if (!Array.isArray(arr) || n < 0) {
        return [];
    }
    if (n === undefined || typeof n !== 'number') {
        return arr[0];
    }
    if (n > arr.length) {
        n = arr.length;
    }
    
    let results = [];
    for (let i = 0; i < n; i++) {
        results.push(arr[i]);
    }

    return results;
};


/**
 * _.last: designed to return an array containing the last (n) elements of a given array.
 * 
 * @param {Array} arr: the array from which the last (n) elements will be found
 * @param {Number} n: the number of element to include in the output array
 */

_.last = function(arr, n) {
     if (!Array.isArray(arr) || n < 0) {
        return [];
    }
    if (n === undefined || typeof n !== 'number') {
        return arr[arr.length-1];
    }
    if (n >= arr.length) {
       return arr;
    }
    
    let results = [];
    for (let i = arr.length-n; i < arr.length; i++) {
        results.push(arr[i]);
    }

    return results;
};

/**
 * _.indexOf: returns the index of a given element in a given array or -1 if the elemement is not found 
 * 
 * @param {Array} arr: the array that will be looked through.
 * @param {any type} value: the element that is sought in the array.
 */

_.indexOf = function(arr, value) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
};


/**
 * _.contains: returns true if a given value is found in a given array 
 * or false if it is not found
 * 
 * @param {arr} arr: the given array to look through
 * @param {any type} value: the value being looked for
 */

_.contains = function(arr, value) {
    
    for(let i = 0; i < arr.length; i++) {
        let c = (arr[i] === value) ? true : false;
        if (c) {
            return true;
        }
    }
    return false;
    
};

/**
 * _.each: loops through a collection and calls a given function for each element in the collection
 * 
 * @param {Array or Object} collection: the collection that will be looped thru
 * @param {Function} callback: the function to be called in the loop which will be passed
 * the current element, the current index and the collection.
 */

_.each = function(collection, callback) {
    
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                callback(collection[i], i, collection);
            }
        } else {
            console.log(collection);
            for (let key in collection) {
                callback(collection[key], key, collection);
            }
        }
    
    
};


/**
 * _.unique: returns an array of unique values in a given array 
 * (i.e. removes duplicate elements) 
 * 
 * @param {Array} arr: the source array which will not be modified
 */


_.unique = function(arr) {
    
    return _.filter(arr, (elem, index, array) => {
        return _.indexOf(array, elem) == index;
    })
    
    
};


/**
 * _.filter: returns a new array of elements by looping thru a given array only 
 * when a given function returns true
 * 
 * @param {Array} arr: the source array which will not be modified
 * @param {Function} callback: a function which is expected to return a boolean
 * and is passed the current element, current index and the array 
 */

_.filter = function(arr, callback) {
    let results = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            results.push(arr[i]);
        }
    }
    
    return results;
};


/**
 * _.reject: returns a new array of elements by looping thru a given array only 
 * when a given function returns false. 
 *  
 * @param {Array} arr: the source array which will not be modified
 * @param {Function} callback: a function which is expected to return a boolean
 * and is passed the current element, current index and the array 
 */

_.reject = function(arr, callback) {
  
  return _.filter(arr, (e,i,arr)=>{
      return !callback(e,i,arr);
  })
   
   
    
};


/**
 * _.partition: returns an array of 2 elements, the first element is an array of elements 
 * that passed a given test function for each element in a giving array, the second
 * is all the elements which were rejected by the test function (i.e. returned false)
 * 
 * @param {Array} arr: the source array which is not modified
 * @param {Function} callback: a function which is expected to return a boolean
 * and is passed the current element, current index and the array. 
 * When callback returns true the element is put in first array, when false the element
 * is put in the second array
 */

_.partition = function(arr, callback) {
    
    return [_.filter(arr, callback), _.reject(arr, callback)];
    
};

/**
 * _.map: returns a new array filled with a value from a given function which is applied
 * to each element in the given array.
 * 
 * @param {Array} arr: the source array which will not be modified
 * @param {Function} callback: a function which returns the new value to be added to the new
 * array. It is passed the current element, current index and the original array 
 */


_.map = function(collection, callback) {
    let results = []; 
    
    _.each(collection, (e,i,c) =>{
        results.push(callback(e,i,c));
    })
    
    return results;
}

/**
 * _.pluck: loops through an array of objects and creates a new array with the value at
 * a given keys for each object
 * 
 * @param {Array (of Objects)} arr: the original array which will not be modified
 * @param {String} key: the key for the property values which will fill the new array   
 */

_.pluck = function(arr, key) {
    return _.map(arr,(obj) =>{
        return obj[key];
    })
};

/**
 * _.every: calls a given function for each element in a given array or each property of a 
 * given object and returns true only if the function returns true for every element/property
 * 
 * @param {Array or Object} collection: the collection that will be looped through
 * @param {Function} test: a function that returns a boolean and is passed
 * the current element, the current index and the collection as arguements.
 */

_.every = function(collection, test) {
   
   if (test === undefined) test = _.identity;
   
   let success = true; 
   _.each(collection, (elem, indx, col)=>{
       if (!test(elem,indx, col)) success = false;
   })
   
   return success;
      
};

/**
 * _.some: calls a given function for each element in an array or each property of an 
 * object and returns true if the function returns true at least once.
 * 
 * @param {Array or Object} collection: the collection that will be looped through
 * @param {Function} test: a function that returns a boolean and is passed
 * the current element, the current index and the collection as arguements.
 */

_.some = function(collection, test) {
    
    if (test === undefined) test = _.identity;
   
   let success = false; 
   _.each(collection, (elem, indx, col)=>{
       if (test(elem,indx, col)) success = true;
   })
   
   return success;
  
};

/**
 * _.reduce: for each element in an array or property in an object performs a given function
 * which has access to both looping collection and an additional accumulator, which stores the value 
 * the function returns and is passed to the next function call. This allows for an action 
 * to be performed across a whole array and a single value returned.
 * 
 * @param {Array} arr: the array that will be looped through
 * @param {Function} callback: a function that is passed an accumulator,
 * the current element, the current index and the collection as arguements.
 * @param {any type} seed: an optional paramater whose value is assigned to the accumulator before 
 * the loop starts. If ommitted the accumulator is set the first element/property and the loop starts 
 * at the second.
 */

_.reduce = function(arr, callback, seed) {
    
    let index = 0;
    if (seed === undefined) {
        seed = arr[0];
        index = 1;
    }
    
    for(let i = index; i < arr.length; i++) {
        seed = callback(seed, arr[i], i, arr);
    }
    
    return seed;
    
};

/**
 * _.extend: adds all the properties of any number of objects to a target object
 * 
 * @param {Object} targetObj: the object to be filled with the properties of the other Objects
 * @params {Objects} objs: any number of objects (each passed as a separate arguements) whose properties 
 * will be added to the target object
 */

_.extend = function(targetObj, ...objs) {
    _.each(objs, (sourceObj)=>{
        for (let key in sourceObj) {
            targetObj[key] = sourceObj[key];
        }
    })
    
    return targetObj;
}


//////////////////////////////////////////////////////////////////////
// ADD OUR LIBRARY TO EXPORT ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}

