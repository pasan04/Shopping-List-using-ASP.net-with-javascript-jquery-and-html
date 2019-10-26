var myNinjaApp =angular.module('myNinjaApp',[]);



myNinjaApp.controller('NinjaController',['$scope',function($scope){

  $scope.removeNinja = function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja,1);


  };
  $scope.addNinja = function(newninja){


      $scope.ninjas.push({
        name: $scope.newninja.name,
        belt: $scope.newninja.belt,
        rate: parseInt($scope.newninja.rate),
        available:true
      });

      $scope.newninja.name = " ";
      $scope.newninja.belt = " ";
      $scope.newninja.rate = " ";

      $window.alert('Hi!! ');
  };

  $scope.ninjas=[
    {
      name :"YOSHI",
      belt:"green",
      rate :50,
      available:false

    },
    {
      name :"Pasan",
      belt:"red",
      rate :50,
      available:true

    },
    {
      name :"Naveen",
      belt:"yellow",
      rate :50,
      available:true

    },
    {
      name :"A.u",
      belt:"green",
      rate :50,
      available:true

    },
    {
      name :"Naveen",
      belt:"green",
      rate :50,
      available:true

    },
    {
      name :"Charith",
      belt:"pink",
      rate :50,
      available:true

    }

  ];

}]);