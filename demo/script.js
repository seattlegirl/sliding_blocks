var nextData=[
    [2,2,0,0],
    [0,2,2,0],
    [0,0,0,0],
    [0,0,0,0],
];
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
    [0,0,0,0,0,2,1,0,0,0],
    [0,0,0,2,2,2,1,0,0,0],
    [1,1,1,1,1,1,1,0,0,0],
]
//gameData.length//20行
//gameData[0].length//10列
var nextDivs=[];
var gameDivs=[];//保存div
var initGame=function(){ //创建div，然后保存到gamediv里面
    for(var i=0;i<gameData.length;i++){
        var gameDiv=[];
        for(var j=0;j<gameData[0].length;j++){
            var newNode=document.createElement('div');//动态创建一个div元素
            newNode.className='none'; //属性设置或返回元素的 class 属性。
            newNode.style.top=(i*20)+'px';
            newNode.style.left=(j*20)+'px';//设置小方块的位置
            document.getElementById('game').appendChild(newNode);
            gameDiv.push(newNode);
        }
        gameDivs.push(gameDiv);//将一维数组放到二维数组中
    }
}
var initNext=function(){ //创建div，然后保存到gamediv里面
    for(var i=0;i<nextData.length;i++){
        var nextDiv=[];
        for(var j=0;j<nextData[0].length;j++){
            var newNode=document.createElement('div');//动态创建一个div元素
            newNode.className='none'; //属性设置或返回元素的 class 属性。
            newNode.style.top=(i*20)+'px';
            newNode.style.left=(j*20)+'px';//设置小方块的位置
            document.getElementById('next').appendChild(newNode);
            nextDiv.push(newNode);
        }
        nextDivs.push(nextDiv);//将一维数组放到二维数组中
    }
}
var refreshGame=function(){ //根据gameData里的数据改变gameDivs里的class
    for(var i=0;i<gameData.length;i++){
        for(var j=0;j<gameData[0].length;j++){
            if(gameData[i][j]==0){
                gameDivs[i][j].className='none';
            }else if(gameData[i][j]==1){
                gameDivs[i][j].className='done';
            }else if(gameData[i][j]==2){
                gameDivs[i][j].className='current';
            }
        }
    }
}
var refreshNext=function(){ //根据gameData里的数据改变gameDivs里的class
    for(var i=0;i<nextData.length;i++){
        for(var j=0;j<nextData[0].length;j++){
            if(nextData[i][j]==0){
                nextDivs[i][j].className='none';
            }else if(nextData[i][j]==1){
                nextDivs[i][j].className='done';
            }else if(nextData[i][j]==2){
                nextDivs[i][j].className='current';
            }
        }
    }
}
initGame();
initNext();
refreshGame();
refreshNext();