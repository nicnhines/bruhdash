var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
      return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    return arr[arr.length -1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, value) {
    return arr.indexOf(value);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, value) {
    return arr.lastIndexOf(value);
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
     arr.pop();
     return arr;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    var compactArr = [];
    for (var i = 0; i < arr.length; i++){
      if(arr[i]){
        compactArr.push(arr[i]);
      }
    }
    return compactArr;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {
    var sliced = [];
    for(var i=0; i < arr.length; i++){
      if( i >= start && i < end){
        sliced.push(arr[i]);
      }
    }
    return sliced;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n){
    var dropped = [];
    if( n === undefined) {
      dropped = arr;
       dropped.shift();
    } else {
      for(var i = n; i< arr.length; i++){
        dropped.push(arr[i]);
      }
    }
    return dropped;
    },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    var dropped = [];
    if( n === undefined){
      dropped = arr;
      dropped.pop();
    }else{
      for( var i = 0; i <arr.length - n; i++){
        dropped.push(arr[i]);
      }
    }
    return dropped;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    var takeArr = [];
    for(var i = 0; i < arr.length; i++){
      if(i < n){
        takeArr.push(arr[i]);
      }else if(n === undefined){
      takeArr.push(arr[0]);
      return takeArr;
      }else if(n ===0){
        return takeArr;
      }else if(n > arr.length){
        return arr;
      }
    }
    return takeArr;
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    var arrRight = [];

    for(var i = arr.length -1; i >= 0; i--){
      if(i > arr.length - n - 1 ){
        arrRight.unshift(arr[i]);
      }else if(n === undefined){
        arrRight.push(arr[i]);
        return arrRight;
      }else if (n === 0){
        return arrRight;
      }else if ( n > arr.length){
        return arr;
      }
    }
    return arrRight;
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, v, start, end) {
    var fillArr = [];

    if(start === undefined && end === undefined) {
      for (var i = 0; i < arr.length; i++){
        fillArr.push(v);
      }
    }else{
      fillArr = arr;
      for(var i = 0; i < arr.length; i++){
        if (i >= start && i < end){
          fillArr.splice(i, 1, v)
        }
      }
    }
    return fillArr;
  },

  // removes all given values from an array
  pull: function (arr, value) {
    var find = arr.indexOf(value);
    var add = value.length + 1;
    arr.splice(find, add);
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, value) {
    var arrPull = [];
    for(var i = 0;i < arr.length; i++ ){
      if(value.indexOf(i) === -1){
        arrPull.push(arr[i]);
      }
    }
    return arrPull;
  },

  // creates an array excluding all the specified values
  without: function(arr, value) {
    for ( var i = 0; i < value.length; i++){
      var find = arr.indexOf(value[i]);
      arr.splice(find, 1);
    }
    return arr;
  },

  // returns an array with specified values excluded
  difference: function(arr1, arr2) {
    var diff = [];
    for(var i = 0; i < arr1.length; i++){
      if(arr2.indexOf(arr1[i]) === -1){
        diff.push(arr1[i]);
      }
    }
    return diff;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};