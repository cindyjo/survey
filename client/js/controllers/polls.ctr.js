angular.module('app')
.controller('pollsController', function(PollFactory){
	this.polls = [];	
	this.logged_user;
	this.getOne = {};
	var that = this;

	this.voteCount_1;
    this.voteCount_2;
    this.voteCount_3;
    this.voteCount_4;

    this.voteCount1 = function(){
    	that.voteCount_1+=1;
    	PollFactory.voteCount1(that.voteCount_1);
    }
    this.voteCount2 = function(){
    	that.voteCount_2+=1;
    	PollFactory.voteCount2(that.voteCount_2);
    }
    this.voteCount3 = function(){
    	that.voteCount_3+=1;
    	PollFactory.voteCount3(that.voteCount_3);
    }
    this.voteCount4 = function(){
    	that.voteCount_4+=1;
    	PollFactory.voteCount4(that.voteCount_4);
    }
    PollFactory.getCount1(function(data){
		that.voteCount_1 = data;
	});
	PollFactory.getCount2(function(data){
		that.voteCount_2 = data;
	});
	PollFactory.getCount3(function(data){
		that.voteCount_3 = data;
	});
	PollFactory.getCount4(function(data){
		that.voteCount_4 = data;
	});



	this.getPolls= function(){
		PollFactory.getPolls(function(data){
			that.polls = data;
		});
	}
	this.getPolls();

	PollFactory.getLoggedUser(function(data){
		that.logged_user = data;
	});

	this.login = function() {
		that.logged_user = this.user
		PollFactory.login(that.logged_user);
	}


	this.getinfo = function(poll) {
		console.log('poll',poll);
		that.getOne = poll;
		PollFactory.getinfo(that.getOne);	
	}

	PollFactory.getQuestion(function(data){
		that.getOne = data;

	})

	this.validateQuestion = function(){
		var input = this.newPoll.question;
		if(input.length < 8){
			return false;
		}
		else {
			return true;
		}
	}
	this.validateOptions = function() {
		var option_1 = this.newPoll.option_1;
		var option_2 = this.newPoll.option_2;
		var option_3 = this.newPoll.option_3;
		var option_4 = this.newPoll.option_4;
		if(option_1.length < 3 || option_2.length < 3 || option_3.length < 3 || option_4.length < 3){
			return false;
		}
		else {
			return true;
		}

	}	
	
	this.addPoll = function() {
		this.err = {};
		if(this.newPoll){
			this.newPoll.name = this.logged_user;
		}
		if(this.validateQuestion() && this.validateOptions()){
			PollFactory.addPoll(this.newPoll, function(data){
				if(data.errors){
					for(var name in data.errors){
						that.err[name] = data.errors[name].message;
					}
				}	
				else{
					that.polls = data;
				}
				that.getPolls();
				that.newPoll = {};
			});
		}
		else {
			that.err.validation = "validation failed";
		}
	};
	this.removePoll = function(poll) {
		PollFactory.removePoll(poll._id, function(data){
			that.polls = data;
		});
	};
	
	// PollFactory.getQuestion(function(data){
	// 	console.log('conroller=',data);
	// 	that.getOne = data;
	// });
	// console.log('controller',this.getOne);
})