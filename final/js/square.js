var Square=function(){
    //方块数组
    this.data=[
        [0,2,0,0,],
        [0,2,0,0,],
        [0,2,0,0,],
        [0,2,0,0,],
    ];
    //原点
    this.origin={
        x:0,
        y:0
    }
}
//判断是否可以下降 下降之后，先让origin中x加1，然后再判断data中的数据是否合法
Square.prototype.canDown=function(isValid){
    var text={};
    text.x=this.origin.x+1;
    text.y=this.origin.y;
    return isValid(text,this.data);
}
Square.prototype.down=function(){
    this.origin.x=this.origin.x+1;
}