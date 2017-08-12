//1
{
    var t = {};
    t["k"] = 0;
    t["f"] = 10;
    var a = [];
    for (var i = t; i["k"] < t["f"]; i["k"]++) {
        a[i["k"]] = function () {
            console.log(t["k"]);
        };
    }
}
//2
{
    var bar_1 = 2;
    console.log(bar_1);
}
//3
var tmp = 123;
if (true) {
    tmp = 456;
}
//4
{
    //function bar(x = y , y = 2){
    function bar(y, x) {
        if (y === void 0) { y = 2; }
        if (x === void 0) { x = y; }
    }
}
//5
{
    /*
    function func(arg) {
        let arg; // 报错
    }
    */
    function func(arg) {
        {
            var arg_1; // 不报错
        }
    }
}
//6
{
    {
        {
            {
                {
                    var insane = 'Hello World';
                }
            }
        }
    }
}
;
