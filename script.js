var app = angular.module('shopCart',[]);

app.controller('HomeCtrl',['$scope',function($scope){
	$scope.message = 'Hello World !!';

	$scope.questions = [
		{'question':'Hard Disk','id':'HD','prices':[{'size':'200GB','price':'2000'},{'size':'400GB','price':'4000'}]},
		{'question':'CPU','id':'CPU','prices':[{'size':'200GB','price':'2000'}]},
		{'question':'Monitor','id':'MON','prices':[{'size':'200GB','price':'2000'}]},
		{'question':'Optical Mouse','id':'MOU','prices':[{'size':'200GB','price':'2000'}]},
		{'question':'RAM','id':'RM','prices':[{'size':'200GB','price':'2000'}]},
		{'question':'USB Keyboard','id':'KEY','prices':[{'size':'200GB','price':'2000'}]}
	];

}]);


app.directive('checkList',function(){
	return {
		restrict:'E',
		scope: {
            name: '=',
            option: '='
        },
		template: function(elem,attrs){
			return '</br>\
					<div ng-repeat="i in option">\
					<input type="radio" name="{{name}}" /> {{i.size}} Rs.{{i.price}}\
					</div>'
		},
		link:function(scope,elem,attrs){
			console.log(scope.option);
		}
	};
})