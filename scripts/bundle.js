(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
	this.completionPercentage = function () {
		return 'Completion percentage: ' + Math.round(this.completions / this.attempts * 100);
	};
	this.yardsPerAttempt = function () {
		return 'Yards per attempt: ' + (this.yards / this.attempts).toFixed(2);
	};
	this.addAttempt = function (type, yards) {
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

		if (yards > this.longestCompletion) {
			this.longestCompletion = yards;
		}
	};
	this.displayStats = function () {
		$('#QB').append('<tr><td>' + this.name + '</td><td>' + this.team + '</td><td>' + this.completions + '</td><td>' + this.attempts + '</td><td>' + this.yards + '</td><td>' + this.touchdowns + '</td><td>' + this.interceptions + '</td><td>' + this.sacks + '</td><td>' + this.longestCompletion + '</td></tr>');
	};
	this.upDateStats = function () {};
}

var peytonManning = new Quarterback('Peyotn Manning', 'Denver Broncos');
var tonyRomo = new Quarterback('Tony Romo', 'Dallas Cowboys');
var qbs = [peytonManning, tonyRomo];

for (var i = 0; i < qbs.length; i++) {
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
	this.yardsPerAttempt = function () {
		return (this.yards / this.attempts).toFixed(2);
	};
	this.addAttempt = function (type, yards) {
		if (type === 'rush') {
			this.yards += yards;
		} else if (type === 'touchdown') {
			this.touchdowns++;
			this.yards += yards;
		} else if (type === 'fumble') {
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
	};
	this.displayStats = function () {
		$('#RB').append('<tr><td>' + this.name + '</td><td>' + this.team + '</td><td>' + this.attempts + '</td><td>' + this.yards + '</td><td>' + this.touchdowns + '</td><td>' + this.firstDowns + '</td><td>' + this.over20 + '</td><td>' + this.longestRush + '</td><td>' + this.fumbles + '</td></tr>');
	};
}

var marshawnLynch = new Runningback('Marshawn Lynch', 'Seattle');
var adrianPetterson = new Runningback('Adrian Peterson', 'Minnesota Vikings');
var rbs = [marshawnLynch, adrianPetterson];

for (var i = 0; i < rbs.length; i++) {
	rbs[i].displayStats();
}

function Kicker(name, team) {
	this.name = name;
	this.team = team;
	this.attempts = 0;
	this.made = 0;
	this.longestFieldGoal = 0;
	this.fieldGoalPercentage = function () {
		return Math.round(this.attempts / this.made);
	};
	this.addAttempt = function (type, yards) {
		if (type === 'made') {
			this.made++;
		}

		this.attempt++;

		if (yards > this.longestFieldGoal) {
			this.longestFieldGoal = yards;
		}
	};
	this.displayStats = function () {
		$('#K').append('<tr><td>' + this.name + '</td><td>' + this.team + '</td><td>' + this.made + '</td><td>' + this.attempts + '</td><td>' + this.longestFieldGoal + '</td></tr>');
	};
}

var danBailey = new Kicker('Dan Bailey', 'Dallas Cowboys');
var masonCrosby = new Kicker('Mason Crosby', 'Green Bay Packers');
var ks = [danBailey, masonCrosby];

for (var i = 0; i < ks.length; i++) {
	ks[i].displayStats();
}

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map