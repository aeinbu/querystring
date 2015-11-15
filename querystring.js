; (function () {
	"use strict";

	function parse(querystring) {
		var obj = {};

		if (querystring) {
			var params = querystring.split(/&|\?/);
			for (var i = 0; i < params.length; i++) {
				var param = params[i];
				var paramParts = param.split('=');
				if (paramParts.length == 2) {
					var name = paramParts[0];
					var value = paramParts[1];
					obj[name] = value;
				}
			}
		}
		return obj;
	}

	function format(obj) {
		var count = 0;
		var querystring = '';
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (count++) {
					querystring += '&';
				}
				querystring += key + '=' + obj[key].toString();
			}
		}

		return querystring;
	}

	var qsModule = {
		parse: parse,
		format: format
	};
	
	// Publish the library as an AMD module, CommonJS Module, or to the global window object
	if (typeof define === 'function' && define.amd) {
		define('querystring', function () {
			return qsModule;
		});
	} else if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
		module.exports = qsModule;
	} else {
		window.querystring = qsModule;
	}
})();