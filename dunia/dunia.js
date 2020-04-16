var app = angular.module('myApp', []);

app.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header containing XMLHttpRequest used to identify ajax call 
    //that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller('SummaryCtrl', function($scope, $http) {
    $http.get("https://api.kawalcorona.com/indonesia/").success(function(result) {
        console.log("Success", result);
        $scope.resultSummary = result;
    }).error(function() {
        console.log("error");
    });
});
 
app.controller('SumPositifCtrl', function($scope, $http) {
    $http.get("https://api.kawalcorona.com/positif/").success(function(result) {
        console.log("Success", result);
        $scope.resSumPositif = result;
    }).error(function() {
        console.log("error");
    });
});
 
app.controller('SumSembuhCtrl', function($scope, $http) {
    $http.get("https://api.kawalcorona.com/sembuh/").success(function(result) {
        console.log("Success", result);
        $scope.resSumSembuh = result;
    }).error(function() {
        console.log("error");
    });
});
 
app.controller('SumMeninggalCtrl', function($scope, $http) {
    $http.get("https://api.kawalcorona.com/meninggal/").success(function(result) {
        console.log("Success", result);
        $scope.resSumMeninggal = result;
    }).error(function() {
        console.log("error");
    });
});
 
app.controller('DetailCtrl', function($scope, $http) {
    $http.get("https://api.kawalcorona.com/").success(function(result) {
        console.log("Success", result);
        $scope.resulDetails = result;
        $('#myDetails').DataTable({
           "ordering": true,
            "data": $scope.resulDetails,
            "searching": true,
            "columns": [
              {'data':'attributes.Country_Region'},
              {'data':'attributes.Confirmed'},
              {'data':'attributes.Deaths'},
              {'data':'attributes.Recovered'},
              {'data':'attributes.Active'}
            ]
       });
        
    }).error(function() {
        console.log("error");
    });
});


