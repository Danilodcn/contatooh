

angular.module ("contatooh", ["ngRoute"])
    .config( function($routeProvider, $locationProvider,$location){
        
        $routeProvider.when("/contatos2",{
            templateUrl: 'partials/contatos.html',
            controller: 'ContatosController'
        });

        $locationProvider.html5Mode( true );
        console.log("Danilo", $locationProvider)
        console.log($location.url());

    });

