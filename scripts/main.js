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
		if (this.attempts !== 0) {
			return Math.round((this.completions / this.attempts) * 100);
		} else {
			return 0;	
		}
	}
	this.yardsPerAttempt = function() {
		return 'Yards per attempt: ' + (this.yards / this.attempts).toFixed(2);
	}
	this.addAttempt = function(type, yards) {
		if (type === 'completions') {
			this.attempts++;
			this.completions++;
			this.yards += yards;
		} else if (type === 'touchdowns') {
			this.attempts++;
			this.completions++;
			this.yards += yards;
			this.touchdowns++;
		} else if (type === 'interceptions') {
			this.attempts++;
			this.interceptions++;
		} else if (type === 'sacks') {
			this.yards += yards;
			this.sacks++;
		} else {
			this.attempts++;
		}

		if(yards > this.longestCompletion) {
			this.longestCompletion = yards;
		}
	}
	this.displayStats = function() {
		$('#QB').append('<tr class="newQdata"><td>'+ this.name +'</td><td>'+ this.team +'</td><td>'+ this.completions +'</td><td>'+ this.attempts +'</td><td>'+ this.completionPercentage() +'</td><td>'+ this.yards +'</td><td>'+ this.touchdowns +'</td><td>'+ this.interceptions +'</td><td>'+ this.sacks +'</td><td>'+ this.longestCompletion +'</td></tr>');
	}
}

var peytonManning = new Quarterback('Peyton Manning', 'Denver Broncos');
var tonyRomo = new Quarterback('Tony Romo', 'Dallas Cowboys');
var qbs = [peytonManning,tonyRomo];

for(var i = 0; i < 	qbs.length; i++) {
	qbs[i].displayStats();
}


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
		if(this.attempts !== 0) {
			return (this.yards/this.attempts).toFixed(2);
		} else {
			return 0;
		}
	}
	this.addAttempt = function(type, yards) {
		if (type === 'rush') {
			this.yards += yards;
		} else if (type === 'touchdowns') {
			this.touchdowns++;
			this.yards += yards;
		} else if(type === 'fumbles') {
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
	this.displayStats = function() {
		$('#RB').append('<tr class="newRdata"><td>'+ this.name +'</td><td>'+ this.team +'</td><td>'+ this.attempts +'</td><td>'+ this.yards +'</td><td>'+ this.yardsPerAttempt() +'</td><td>'+ this.touchdowns +'</td><td>'+ this.firstDowns +'</td><td>'+ this.over20 +'</td><td>'+ this.longestRush +'</td><td>'+ this.fumbles +'</td></tr>');
	}
}

var marshawnLynch = new Runningback('Marshawn Lynch', 'Seattle Seahawks');
var adrianPetterson = new Runningback('Adrian Peterson', 'Minnesota Vikings');
var rbs = [marshawnLynch, adrianPetterson];

for(var i = 0; i < 	rbs.length; i++) {
	rbs[i].displayStats();
}

function Kicker(name, team) {
	this.name = name;
	this.team = team;
	this.attempts = 0;
	this.made = 0;
	this.longestFieldGoal = 0;
	this.fieldGoalPercentage = function() {
		if (this.attempts !== 0) {
			return Math.round((this.made/this.attempts) * 100);
		} else {
			return 0;
		}
	}
	this.addAttempt = function(type, yards) {
		if (type === 'made') {
			this.made++;

		}

		this.attempts++;

		if (yards > this.longestFieldGoal) {
			this.longestFieldGoal = yards;
		}
	}
	this.displayStats = function() {
		$('#K').append('<tr class="newKdata"><td>'+ this.name +'</td><td>'+ this.team +'</td><td>'+ this.made +'</td><td>'+ this.attempts +'</td><td>'+ this.fieldGoalPercentage() +'</td><td>'+ this.longestFieldGoal +'</td></tr>');
	}
}

var danBailey = new Kicker('Dan Bailey', 'Dallas Cowboys');
var masonCrosby = new Kicker('Mason Crosby', 'Green Bay Packers');
var ks = [danBailey, masonCrosby];

for(var i = 0; i < 	ks.length; i++) {
	ks[i].displayStats();
}

$('#qbForm').submit(function(e) {
	e.preventDefault();
	var yards = parseFloat($('#passYards').val());
	if($('#qbDropDown option:selected').text() === 'Manning') {
		peytonManning.addAttempt($('#passType').val(), yards);
	} 
	if ($('#qbDropDown option:selected').text() === 'Romo') {
		tonyRomo.addAttempt($('#passType').val(), yards);
	}
	$('.newQdata').html('');
	for(var i = 0; i < 	qbs.length; i++) {
	qbs[i].displayStats();
	}


})

$('#rbForm').submit(function(e) {
	e.preventDefault();
	var yards = parseFloat($('#rushYards').val());
	console.log(yards);
	if($('#rbDropDown option:selected').text() === 'Lynch') {
		marshawnLynch.addAttempt($('#rushType').val(), yards);
	} 
	if ($('#rbDropDown option:selected').text() === 'Peterson') {
		adrianPetterson.addAttempt($('#rushType').val(), yards);
	}
	$('.newRdata').html('');
	for(var i = 0; i < 	rbs.length; i++) {
		rbs[i].displayStats();
	}


})

$('#kForm').submit(function(e) {
	e.preventDefault();
	var yards = parseFloat($('#kYards').val());
	console.log(yards);
	if($('#kDropDown option:selected').text() === 'Bailey') {
		danBailey.addAttempt($('#kickType').val(), yards);
	} 
	if ($('#kDropDown option:selected').text() === 'Crosby') {
		masonCrosby.addAttempt($('#kickType').val(), yards);
	}
	$('.newKdata').html('');
	for(var i = 0; i < 	ks.length; i++) {
		ks[i].displayStats();
	}


})




