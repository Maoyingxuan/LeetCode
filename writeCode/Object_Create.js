function Object_Create(proto){
    function F(){} //创建一个空的构造函数
    F.prototype = proto
    return new F()
}
