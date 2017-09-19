/**
 * Created by yanghuaizhi on 2016/12/6.
 */

 //1.define >>> 定义一个模块;
define(function(require,exports,module){

	//console.log(require+":"+exports+":"+module)

	// 2.require >>> 依赖;
    var until = require('./pop');
    var $ = require('jq');

   

    $('body').html(until.randomColor().color)
    $('body').css('background',until.randomColor().color)

})



