angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html'
    });
}])

.controller('View2Ctrl', ['$scope', '$log', '$location', function($scope, $log, $location) {

	// Feel free to cahnge all the code below

	$scope.inputText = {
		nameInput: '',
		ageInput: '',
		messageInput: ''
	};

	$scope.blogArray = [];

	$scope.flag1 = false;

	$scope.add = function () {

		if(($scope.inputText.nameInput!='')&&($scope.inputText.ageInput!='')&&($scope.inputText.messageInput!=''))
		{
			$scope.blogArray.push({name: $scope.inputText.nameInput,age: $scope.inputText.ageInput,message: $scope.inputText.messageInput,likes: 0,dislikes: 0});
			$scope.inputText.nameInput= '';
			$scope.inputText.ageInput= '';
			$scope.inputText.messageInput= '';
			$scope.flag1 = false;
		}
		else
		$scope.flag1 = true;

	};

	$scope.remove=function($index) {

  		$scope.blogArray.splice($index,1); 

	}

	$scope.likeFun = function(index,blog) {

    	like = parseInt(blog.likes);
    	$scope.blogArray[index].likes = ++like;

 	};

    $scope.dislikeFun = function(index,blog) {

    	dislike = parseInt(blog.dislikes);
    	$scope.blogArray[index].dislikes = ++dislike;

    };

    $scope.date = new Date();

}]);