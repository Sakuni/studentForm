/**
 * Created by Sakuni.Manamendra on 10/25/2016.
 */

angular.module('testApp', ['ngImgCrop']).
    controller('VisitorFormController', function ($scope, $http) {

        $scope.sampledata = [
            {
                "id": 1,
                "firstName": "Curly",
                "lastName": "Howard",
                "address": "4524 Fulton Avenue",
                "city": "Van Nuys",
                "state": "CA",
                "phone": "555-555-1111",
                "email": "curly@3stooges.com",
                "zip": 91401,
                "fav": "good"
            },
            {
                "id": 2,
                "firstName": "Moe",
                "lastName": "Howard",
                "address": "9061 Thrasher Avenue",
                "city": "Los Angeles",
                "state": "CA",
                "phone": "555-555-3333",
                "email": "moe@3stooges.com",
                "zip": 91555,
                "fav": "cool"
            },
            {
                "id": 3,
                "firstName": "Larry",
                "lastName": "Fine",
                "address": "Knickerbocker Hotel",
                "city": "Hollywood",
                "state": "CA",
                "phone": "555-555-2222",
                "email": "larry@3stooges.com",
                "zip": 91999,
                "fav": "awesome"
            }]

        // Countries scope
        $scope.countries = [
            {name: 'Afghanistan', code: 'AF'},
            {name: 'Åland Islands', code: 'AX'},
            {name: 'Albania', code: 'AL'},
            {name: 'Algeria', code: 'DZ'},
            {name: 'American Samoa', code: 'AS'},
            {name: 'Sri Lanka ', code: 'SL'}
        ];

        // Used to compare current and new data
        $scope.visitorInfo = {};
        $scope.storedInfo = {};

        // Used to make sure the same sample doesn't appear twice in a row
        $scope.lastSampleIndex = 0;


        // Update visitor object with submitted info
        function update(formdata) {
            return $http.post('/update', formdata);
        }

        $scope.update = function (formData) {
            //$scope.storedInfo = angular.copy(formData);
            update(formData).then(function (response) {
                $scope.PostDataResponse = response.data;
                //alert("User saved!");
            })
        };

        // Reset form will last submitted info
        $scope.reset = function () {
            $scope.visitorInfo = angular.copy($scope.storedInfo);
        };

        // Check for difference between last submitted info
        // and info currently in form fields
        $scope.isUnchanged = function (formData) {
            return angular.equals(formData, $scope.storedInfo);
        };

        // Used solely to fill pick sample data
        $scope.populateSample = function () {
            var randomnumber;
            do {
                randomnumber = Math.floor(Math.random() * $scope.sampledata.length);
            } while (randomnumber == $scope.lastSampleIndex);
            $scope.lastSampleIndex = randomnumber;
            $scope.visitorInfo = angular.copy($scope.sampledata[randomnumber]);
        };

        // Set form to last submitted data
        $scope.reset();

        // custom directive img-crop
        $scope.myImage = '';
        $scope.myCroppedImage = '';

        var handleFileSelect = function (evt) {
            var file = evt.currentTarget.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
                $scope.$apply(function ($scope) {
                    $scope.myImage = evt.target.result;
                });
            };
            reader.readAsDataURL(file);
        };
        angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);

    }
);