const logSymbols = require('log-symbols');
const consoleOld = global.console;
const fs = require("fs");

const console = {
		log: function(){
				console.print(consoleOld.log, logSymbols.info, arguments);
		},
		success: function(){
				console.print(consoleOld.log, logSymbols.success, arguments);
		},
		error: function(){
				console.print(consoleOld.error, logSymbols.error, arguments);
		},
		normal: function(){
				var newArguments = Object.keys(arguments).map((key) => {
						return arguments[key];
				});

				consoleOld.log.apply(this, newArguments);
		},
		print: function(type, sign, argumentsObject){
				let arguments1 = argumentsObject;

				var newArguments = Object.keys(arguments1).map((key) => {
						return arguments1[key];
				});

				newArguments.unshift(sign+" ");

				type.apply(this, newArguments);
		}
}

module.exports = console;

