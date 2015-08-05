'use strict';

/**
 * @ngdoc function
 * @name geekAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the geekAngularApp
 */
angular.module('geekAngularApp')
  .controller('MainCtrl', function ($scope,$http) {
    $scope.blogs = []; // Array 

 	$scope.refreshBlogs = function (){
    $http.get('http://localhost:9001/blogs').
    then(function(response) {
		  	// Success
		  	 //debugger;
		  	 $scope.blogs = response.data; // Assign value to array

		  	}, function(response) {

		    // Error
		    $scope.error = 'Service not ready.';

		});
	};




    $scope.createNewBlogPost = function(){

    	var newPost = {
    	title:$scope.title,
    	content:$scope.content,
    	post_by:"Kae",
    	comment:[]
    	};

    	$scope.title = ''; // Reset 
    	$scope.content = ''; // Reset

		$http.post('http://localhost:9001/blogs', newPost).
		 then(function(response) {
		    // this callback will be called asynchronously
		    // when the response is available
		    $scope.refreshBlogs();
		  }, function(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    $scope.error = 'Service not ready.';
		  });

    }


  });
