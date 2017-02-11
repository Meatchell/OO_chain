/**
 * Created by Administrator on 2017/1/15.
 */
define(function(require,exports,module){
    function add(x,y){
        return parseFloat(x) + parseFloat(y);
    }
    function str(x,y){
        return parseFloat(x) - parseFloat(y);
    }
    function mul(x,y){
        return parseFloat(x) * parseFloat(y);
    }
    function div(x,y){
        return parseFloat(x) / parseFloat(y);
    }

    module.exports = {
        add:add,
        str:str,
        mul:mul,
        div:div
    }
})
