// Immediately Invoking Function
var user = 'Alex';
(function() {
    var user = 'ravi';
    console.log('Executing IIFE');
    console.log('Executing IIFE');
    console.log('Executing IIFE');
    console.log('print name:', user);
})();

console.log('username is:', user);
