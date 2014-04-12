'use strict';

angular.module('honeypotApp')
    .controller('GameCtrl', function ($scope, GameManager, GameMapService) {
    	$scope.player = GameManager.getPlayer();
    	$scope.blackMarket = GameManager.getBlackM();

    	$scope.notifyBuy = GameManager.buy;
    	$scope.notifySell = GameManager.sell;
    });
