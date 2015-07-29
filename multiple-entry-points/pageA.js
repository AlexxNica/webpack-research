var common = require('./common')



 require(['./shared'], function(shared) {
  setTimeout(function() {
   shared('This is page A');
   }, 2e3);
 });


