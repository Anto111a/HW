function myLocalScope() {
  'use strict';

  var myVar = 22;

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

console.log('outside myLocalScope', myVar);
