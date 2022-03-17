
/*
自执行函数：
格式： (定义一个没有名字的函数)();
定义之后立刻执行，一般没有名字
 */
(
    function(){
        console.log(123);
    }
)();

// 自执行函数得到闭包环境下的内部函数
var inner = (function(){
    var a = 0;
    return function(increment){
        a = a + increment;
        console.log(a)
    }
})();

inner(2);

/*
new一个对象
this: 指向函数的当前调用者
对象调用属性的两种方式：点方式、是用中括号
 */

function hello(){
    console.log(this);
}
hello();

/*
回调函数：把一个函数的定义当作参数传递给另一个函数
 */
function eat(food,  callback){
    callback(food);
};

eat('羊肉串', function (food){
    alert("笑嘻嘻地，撒上一撮孜然, 开心地吃" + food);
});

