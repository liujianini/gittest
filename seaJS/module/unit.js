define(function(require, exports, module){
	var $ = require("jq");
	var cookie = require("cookie");
	//加载器 => 什么时候需要什么时候加载;
	//console.log(jQuery);
	//console.log(require);
	// console.log(exports);
	// console.log(module);
	cookie($);
	//模块暴露;
	console.log($.cookie);
	module.exports = {name:"define"};
})	