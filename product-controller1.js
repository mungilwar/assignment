(function ( angular ) {
  'use strict';
  var mod = angular.module( 'products.controllers', [] );

  /*
   * ProductListCtrl and ProductCtrl are already complete
   * You will add ProductDetailCtrl
   * It should depend on $scope, $routeParams, and $log
   * It should make productID fromt the routeParams available on the scope
   * Log that ProductDetailCtrl was invoked with product id [whatever productID]
   *
   * At this point, you're finished. Surf to
   * http://localhost:8000/Exercises/ProductRoute and see if it works!
   */


  mod.controller( 'ProductListCtrl', function ( $scope, $log ) {
    $log.log( 'Called ProductListCtrl' );
  } );

  mod.controller( 'ProductCtrl', function ( $scope, $log ) {
    $log.log( 'Called ProductCtrl.' );
  } );

})( angular );
