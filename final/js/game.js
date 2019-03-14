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
    //初始化方法
    var init=function(doms){
        gameDiv=doms.gameDiv;
        nextDiv=doms.nextDiv;
        cur=new Square();
        next=new Square();
        initDiv(gameDiv,gameData,gameDivs);
        initDiv(nextDiv,next.data,nextDivs);
        cur.origin.x=3;
        cur.origin.y=1;
        for(var i=0;i<cur.data.length;i++){
            for(var j=0;j<cur.data[0].length;j++){
                gameData[cur.origin.x+i][cur.origin.y+j]=cur.data[i][j]//将cur中的数据拷贝到gamedata中
            }
        }
        refreshDiv(gameData,gameDivs);
        refreshDiv(next.data,nextDivs);
    }
    //导出API,在函数外面也能通过init调用里面的init函数
    this.init=init;
}