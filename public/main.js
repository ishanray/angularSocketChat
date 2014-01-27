var app = angular.module('chatApp', []);

app.factory('socket', function(){
    return io.connect('http://localhost:3000');
});

app.controller('ChatCtrl', function($scope, socket){
    $scope.msgs = [];

    $scope.sendMsg = function() {
        socket.emit('send msg', $scope.chat.msg);
        $scope.chat.msg = '';
    };


    socket.on('get msg', function(data) {
        $scope.msgs.push(data);
        $scope.$digest();
    });
});