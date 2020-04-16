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
 
app.controller('DetailCtrl', function($scope, $http) {
    $http.get("https://api.kawalcorona.com/indonesia/provinsi/").success(function(result) {
        console.log("Success", result);
        $scope.resulDetails = result;
        $('#myDetails').DataTable({
           "ordering": true,
            "data": $scope.resulDetails,
            "searching": true,
            "columns": [
              {'data':'attributes.Provinsi'},
              {'data':'attributes.Kasus_Posi'},
              {'data':'attributes.Kasus_Semb'},
              {'data':'attributes.Kasus_Meni'}
            ]
       });
        
    }).error(function() {
        console.log("error");
    });
});


