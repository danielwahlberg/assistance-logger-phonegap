eventLoggerApp.controller('EventController', function ($scope, $http) {

  $scope.first = "hej hopp";

  $http.post('http://assistance.dwahlberg.se/api/v1/event/createHardCoded')
    .success(
      function(data) {
        $scope.savedId = data; // Service returns the created id
      }
    )
    .error(
      function(response) {
        alert('det sket sig: ');//+ response.status);
      }
    );

});
