angular.module('tranxact.controllers', [])

.controller('TransactCtrl', function($scope, $rootScope, $cordovaBarcodeScanner, $ionicPlatform, $http) {

  $scope.scan = function(){
    $ionicPlatform.ready(function() {
      $cordovaBarcodeScanner
      .scan()
      .then(function(result) {
        // Success! Barcode data is here
        $scope.scanResults = "[" + result.format + "] " +
        result.text + " ";
      }, function(error) {
        // An error occurred
        $scope.scanResults = 'Error: ' + error;
      });
    });
  };

  $scope.scanResults = '[test] http://google.com';

  $scope.invoice = function() {
    console.log('invoice() called', $scope.user);    
  };

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $http, jwtHelper) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.user = {
    username: 'charleschu@daex.me',
    password: 'test123'
  };

  $scope.login = function() {
      console.log('login() called', $scope.user);
      $http
        .post('http://localhost:3000/login', $scope.user)
        .success(function (data, status, headers, config) {
          console.log(data);
          console.log(jwtHelper.decodeToken(data.token));
        })
        .error(function (data, status, headers, config) {
          console.log('error');
        });          
    };
});
