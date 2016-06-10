'use strict'; //strict 모드 선언

/*
 * @ngdoc overview
 * @name nowalbaParseApp
 * @description
 * # nowalbaParseApp
 *
 * Main module of the application.
 */

angular.module('app', ['ngRoute'])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/', { //경로명
                templateUrl: 'views/login.html', //해당 경로일 때, 페이지
                controller: 'LoginCtrl' //해당 경로일 때 컨트롤러
            })

            .when('/regist', {
                templateUrl: 'views/regist.html',
                controller: 'RegistCtrl'
            })

            .when('/list', {
                templateUrl: 'views/list.html',
                controller: 'ListCtrl'
            })

            .when('/view', {
                templateUrl: 'views/view.html',
                controller: 'viewCtrl'
            })

            .when('/form', {
                templateUrl: 'views/form.html',
                controller: 'FormCtrl'
            })

            .otherwise({
                redirectTo: '/' //그 외의 경로는 모두 여기로 이동
            });

    });
