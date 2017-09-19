define(function (require, exports, module) {

    var until = {};

    var colorRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    until.randomColor = function () {

        return {
            color: "#" + colorRange[Math.floor(Math.random() * 15)] + colorRange[Math.floor(Math.random() * 15)] + colorRange[Math.floor(Math.random() * 15)] + colorRange[Math.floor(Math.random() * 15)] + colorRange[Math.floor(Math.random() * 15)] + colorRange[Math.floor(Math.random() * 15)]
        }

    }

    //document.getElementsByTagName('body')[0].style.background = until.randomColor().color;

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;

});