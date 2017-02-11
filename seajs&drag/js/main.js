/**
 * Created by Administrator on 2017/1/15.
 */
define(function(require,exports,moudle){
    var $ = require('dom');
    var Drag = require('drag');
    var tab = require('tab');
    var method = require('cal');

    //tab栏部分
    tab('hd','body')


    //拖拽部分
    var box1 = new Drag('box1',320,300);
    box1.init();
    var box2 = new Drag('box2',320,300);
    box2.init()

    //计算器部分

    var result = $('result'),
        btn = $('btn');
    window.onload = function(){
        console.log(result)
        btn.addEventListener('click',function(){
            var a = $('a').value,
                b = $('b').value,
                operator = $('operator').value - 0;
            switch(operator){
                case 0:
                    result.value = method.add(a,b);
                break;
                case 1:
                    result.value = method.str(a,b);
                break;
                case 2:
                    result.value = method.mul(a,b);
                break;
                case 3:
                    result.value = method.div(a,b);

            }
        })
    }

})