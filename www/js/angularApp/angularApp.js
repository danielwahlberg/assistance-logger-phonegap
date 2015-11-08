var eventLoggerApp = angular.module('eventLoggerApp', [/*'ngRoute', 'ui.bootstrap'*/]);

/** Make sure we wait for Cordova to be ready before initializing anything */
eventLoggerApp.factory('cordovaReady', function() {
  return function (fn) {

    var queue = [];

    var impl = function () {
      queue.push(Array.prototype.slice.call(arguments));
    };

    document.addEventListener('deviceready', function () {
      queue.forEach(function (args) {
        fn.apply(this, args);
      });
      impl = fn;
    }, false);

    return function () {
      return impl.apply(this, arguments);
    };
  };
});
