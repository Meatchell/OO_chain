/**
 * Created by Administrator on 2017/1/15.
 */
define(function(require,exports,moudle){
    var $ = require('dom');

    function tab(hdDom,bdDom){
        var heads = $(hdDom).children

        var bodys = $(bdDom).children
        console.log(heads);
        console.log(bodys);

        for(var i =0; i<heads.length; i++){
             heads[i].index = i
             heads[i].onclick = function(){

                 for(var j = 0; j<heads.length; j++){
                     bodys[j].className = '';
                     heads[j].className = '';
                 }
                 bodys[this.index].className = 'active';
                 heads[this.index].className = 'active';
            }
        }
    }

    moudle.exports = tab
})