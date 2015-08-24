angular.module('app')
.factory('PollFactory', function($http){
	var factory ={};
	var polls = [];
    var getOne = {};
    var voteCount_1=0
    var voteCount_2=0
    var voteCount_3=0
    var voteCount_4=0

    var logged_user;

    factory.login = function(user) {
        logged_user = user;
    }   
    factory.getLoggedUser = function(callback){
        callback(logged_user);
    }
    factory.voteCount1 =function(count){
        voteCount_1 = count;
    }
    factory.voteCount2 =function(count){
        voteCount_2 = count;
    }
    factory.voteCount3 =function(count){
        voteCount_3 = count;
    }
    factory.voteCount4 =function(count){
        voteCount_4 = count;
    }

    factory.getCount1 = function(callback){
        callback(voteCount_1);
    }
    factory.getCount2 = function(callback){
        callback(voteCount_2);
    }
    factory.getCount3 = function(callback){
        callback(voteCount_3);
    }
    factory.getCount4 = function(callback){
        callback(voteCount_4);
    }


    factory.getPolls = function(callback) {
        $http.get('/polls').success(function(output){
            polls = output;
            callback(polls);
        })
    }

    factory.addPoll = function(info, callback) {
        $http.post('/polls', info).success(function(data){
             console.log('factory', info);
             if(data.success){
                callback(data.message);
            }else {
                callback(data);
            }
    	})
    }
    factory.removePoll = function(id, callback){
        console.log(id);
        $http.delete('/polls/'+id).success(function(){
            factory.getPolls(callback);
        });
        callback(polls);
    }

    factory.getinfo = function(info){
        getOne = info;
    }

    factory.getQuestion = function(callback){
        callback(getOne);
    }

    return factory;


})