'use strict';

function Quarterback(name, team) {
	this.name = name;
	this.team = team;
	this.attempts = 0;
	this.completions = 0;
	this.yards = 0;
	this.touchdowns = 0;
	this.interceptions = 0;
	this.sacks = 0;
	this.longestCompletion = 0;
	this.completionPercentage = function() {
		return 'Completion percentage: ' + Math.round((this.completions / this.attempts) * 100);
	}
	this.yardsPerAttempt = function() {
		return 'Yards per attempt: ' + (this.yards / this.attempts).toFixed(2);
	}
	this.addAttempt = function(type, yards) {
		if (type === 'completion') {
			this.attempts++;
			this.completions++;
			this.yards += yards;
		} else if (type === 'touchdown') {
			this.attempts++;
			this.completions++;
			this.yards += yards;
			this.touchdowns++;
		} else if (type === 'interception') {
			this.attempts++;
			this.interceptions = 0;
		} else if (type === 'sack') {
			this.yards += yards;
			this.sacks++;
		} else {
			this.attemps++;
		}
		
		if(yards > this.longestCompletion) {
			this.longestCompletion = yards;
		}
	}
}

var peytonManning = new Quarterback('Peyotn Manning', 'Denver Broncos');
var tonyromo = new Quarterback('Tony Romo', 'Dallas Cowboys');

function Runningback(name, team) {
	this.name = name;
	this.team = team;
	this.attempts = 0;
	this.yards = 0;
	this.over20 = 0;
	this.touchdowns = 0;
	this.firstDowns = 0;
	this.fumbles = 0;
	this.longestRush = 0;
	this.yardsPerAttempt = function() {
		return (this.yards/this.attempts).toFixed(2);
	}
	this.addAttempt = function(type, yards) {
		if (type === 'rush') {
			this.yards += yards;
		} else if (type === 'touchdown') {
			this.touchdowns++;
			this.yards += yards;
		} else if(type === 'fumble') {
			this.fumbles++;
		} else if (type === 'firstDowns') {
			this.yards += yards;
			this.firstDowns++;
		}

		this.attempts++;

		if (yards > this.longestRush) {
			this.longestRush = yards;
		}

		if (yards >= 20) {
			this.over20++;
		}
	}
}

var marshawnLynch = new Runningback('Marshawn Lynch', 'Seattle');
var adrianPetterson = new Runningback('Adrian Peterson', 'Minnesota Vikings');

function Kicker(name, team) {
	this.name = name;
	this.team = team;
	this.attempts = 0;
	this.made = 0;
	this.longestFieldGoal = 0;
	this.fieldGoalPercentage = function() {
		return Math.round(this.attempts/this.made);
	}
	this.addAttempt = function(type, yards) {
		if (type === 'made') {
			this.made++;
		}

		this.attempt++;

		if (yards > this.longestFieldGoal) {
			this.longestFieldGoal = yards;
		}
	}
}

var danBailey = new Kicker('Dan Bailey', 'Dallas Cowboys');
var masonCrosby = new Kicker('Mason Crosby', 'Green Bay Packers');