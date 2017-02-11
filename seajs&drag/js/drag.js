/**
 * Created by Administrator on 2017/1/15.
 */
define(function(require,exports,moudle){
    var $ = require('dom')

function Drag(id,x,y){
    this.dom = document.getElementById(id);
    this.x = getComputedStyle(this.dom)['left'].slice(0,-2)-0 - this.dom.offsetWidth + x; //带px单位
    this.y = getComputedStyle(this.dom)['top'].slice(0,-2)-0 - this.dom.offsetHeight + y; //带px单位
}
Drag.prototype.init =function(){
        var that = this;
    this.dom.onmousedown = function(e){
        var currX = e.clientX - this.offsetLeft;
        var currY = e.clientY - this.offsetTop;
        document.onmousemove = function(e){
            var distX = e.clientX - currX;
            var distY = e.clientY - currY;
            if(distX > that.x){
                that.dom.style.left = this.x + 'px';
            }
            else if(distY > that.y){
                that.dom.style.top = this.y + 'px';
            }else if(distY < 0){
                that.dom.style.top = 0 + 'px';
            }else if(distX < 0){
                that.dom.style.left = 0 + 'px';
            }else {
                that.dom.style.left = e.clientX - currX +'px';
                that.dom.style.top = e.clientY - currY + 'px';
            }
        }
    }
    document.onmouseup = function(){
        document.onmousemove = null;
    }
}

moudle.exports = Drag;
})