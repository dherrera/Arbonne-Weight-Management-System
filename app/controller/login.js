/**
 * Created by dherrera on 10/26/13.
 */

var UserCtrl = function($scope, $routeParams, $location, $resource) {
    var ArbonneDb = $resource('/api/user/:id', { id: '@_id' });

    var new_user = new ArbonneDb({
        firstname:'davidsmith',
        lastname:'blue',
        address:'',
        email:'',
        password:'',
        status:'',
        date:''
    });

    UserDb.get({id : '50b40dd6ed3f055a27000001'}, function(user) {
        user.firstname = 'Demetrio';
        user.$save();
    });
};