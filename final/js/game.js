var Game=function(){
    //dom元素
    var gameDiv;
    var nextDiv;
    //游戏矩阵
    var gameData=[
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ]
    //当前方块
    var cur;
    //下一个方块
    var next;
    //divs
    var nextDivs=[];
    var gameDivs=[];
    //初始化dic
    var initDiv=function(container,data,divs){ //创建div，然后保存到gamediv里面
        for(var i=0;i<data.length;i++){
            var div=[];
            for(var j=0;j<data[0].length;j++){
                var newNode=document.createElement('div');//动态创建一个div元素
                newNode.className='none'; //属性设置或返回元素的 class 属性。
                newNode.style.top=(i*20)+'px';
                newNode.style.left=(j*20)+'px';//设置小方块的位置
                container.appendChild(newNode);
                div.push(newNode);
            }
            divs.push(div);//将一维数组放到二维数组中
        }
    }
    //刷新Div
    var refreshDiv=function(data,divs){ //根据gameData里的数据改变gameDivs里的class
        for(var i=0;i<data.length;i++){
            for(var j=0;j<data[0].length;j++){
                if(data[i][j]==0){
                    divs[i][j].className='none';
                }else if(data[i][j]==1){
                    divs[i][j].className='done';
                }else if(data[i][j]==2){
                    divs[i][j].className='current';
                }
            }
        }
    }
    //检测点是否合法pos:cur.origin;x,y:cur.data[i][j];
    var check=function(pos,x,y){
        if(pos.x+x<0){//超出上边界
            return false;
        }else if(pos.x+x>=gameData.length){//超出下边界
            return false;
        }else if(pos.y+y<0){
            return false;
        }else if(pos.y+y>=gameData[0].length){
            return false;
        }else if(gameData[pos.x+x][pos.y+y]==1){//该点已经有落下来(down)的点了；
            return false;
        }else{
            return true;
        }
    }
    //检测数据是否合法
    var isValid=function(pos,data){
        for(var i=0;i<data.length;i++){
            for(var j=0;j<data[0].length;j++){
                if(data[i][j]!=0){
                    if(!check(pos,i,j)){ //点不等于0，却又是非法的
                        return false;
                    }
                }
            }
        }
        return true;
    }
    //清除数据
    var clearData=function(){
        for(var i=0;i<cur.data.length;i++){
            for(var j=0;j<cur.data[0].length;j++){
                if(check(cur.origin,i,j)){
                    gameData[cur.origin.x+i][cur.origin.y+j]=0
                }
            }
        }
    }
    //设置数据
    var setData=function(){
        for(var i=0;i<cur.data.length;i++){
            for(var j=0;j<cur.data[0].length;j++){
                if(check(cur.origin,i,j)){
                    gameData[cur.origin.x+i][cur.origin.y+j]=cur.data[i][j]//将cur中的数据拷贝到gamedata中
                }
            }
        }
    }
    //下移
    var down = function () {
        if (cur.canDown(isValid)) {
          clearData();
          cur.down();
          setData();
          refreshDiv(gameData, gameDivs);
          return true;
        } else {
          return false;
        }
      }
      //左移
    var left = function () {
        if (cur.canLeft(isValid)) {
          clearData();
          cur.left();
          setData();
          refreshDiv(gameData, gameDivs);
          return true;
        } else {
          return false;
        }
      }
      //右移
    var right = function () {
        if (cur.canRight(isValid)) {
          clearData();
          cur.right();
          setData();
          refreshDiv(gameData, gameDivs);
          return true;
        } else {
          return false;
        }
      }
      //右移
    var rotate = function () {
        if (cur.canRotate(isValid)) {
          clearData();
          cur.rotate();
          setData();
          refreshDiv(gameData, gameDivs);
          return true;
        } else {
          return false;
        }
      }
    //初始化方法
    var init=function(doms){
        gameDiv=doms.gameDiv;
        nextDiv=doms.nextDiv;
        cur=SquareFactory.prototype.make(2,2);
        next=SquareFactory.prototype.make(3,3);
        initDiv(gameDiv,gameData,gameDivs);
        initDiv(nextDiv,next.data,nextDivs);
        setData();
        refreshDiv(gameData,gameDivs);
        refreshDiv(next.data,nextDivs);
    }
    //导出API,在函数外面也能通过init调用里面的init函数
    this.init=init;
    this.down=down;
    this.left=left;
    this.right=right;
    this.rotate=rotate;
    this.fall=function(){while(down());}
}