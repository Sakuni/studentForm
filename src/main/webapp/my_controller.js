/**
 * Created by Sakuni.Manamendra on 10/21/2016.
 */

angular.module('testApp', []).
    controller('my_controller', function ($scope, $http) {

        //get example
        $scope.marks;

        function getMarks() {
            return $http.get('myMarks');
        }

        getMarks().then(function (response) {
            $scope.marks = response.data;
        }, function (response) {
            //Second function handles error
            $scope.content = "Something went wrong";
        });

        //post example
        function getMarks1(data){
            return $http.post('/postMarks', data);
        }

        $scope.postMarks = function() {
            data = $scope.postmark;
            getMarks1(data).then(function(response){
                $scope.PostDataResponse = response.data;
            })
        }

        //dto example
        $scope.userDTO = {};
        //angular.extend($scope.userDTO , {name: 'dsds', id: 1})

        function saveUser(data){
            return $http.post('/saveUser', data);
        }

        $scope.saveUser = function(data) {
            saveUser(data).then(function(response){
               $scope.PostDataResponse1 = response.data;
            })
        }

        //form example
        $scope.formInfoDTO = {};

        function saveData(data){
            return $http.post('/saveData',data);
        }
        $scope.saveData = function(data) {
            //console.log($scope.formInfo);
            saveData(data).then(function(response){
                $scope.PostDataResponse2 = response.data;
            })

        };
    }
);