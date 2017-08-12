//1
{
    var t = {};
    t["k"] = 0;
    t["f"] = 10;
    var a = [];
    for(let i = t; i["k"] < t["f"]; i["k"]++){
        a[i["k"]] = function(){
            console.log(t["k"]);
        };
    }
}

//2
{
    let bar = 2;
    console.log(bar);
}

//3
var tmp = 123;
if(true){
    tmp = 456;
    //let tmp;
}
//4
{
    //function bar(x = y , y = 2){
    function bar(y = 2 , x = y  ){
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
            let arg; // 不报错
        }
    }
}
//6
{{{{{let insane = 'Hello World'}}}}};