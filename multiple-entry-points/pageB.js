var common = require('./common');

  require.ensure(['./shared'], function(require) {
    setTimeout(function() {
 var shared = require('./shared');
    shared('This is page <B></B>');
}, 2e3)

  });


