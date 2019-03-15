var Local=function(){
    //游戏对象
    var game;
    //时间间隔
    var INTERVAL=200;
    //定时器
    var timer=null;
    //事件计数器
    var timeCount=0;
    //时间
    var time=0;
    //绑定键盘事件
    var bindKeyEvent=function(){
        document.onkeydown=function(e){
            if(e.keyCode==38){  //up
                game.rotate();
            }else if(e.keyCode==39){  //right
                game.right();
            }else if(e.keyCode==40){  //down
                game.down();
            }else if(e.keyCode==37){  //left
                game.left();
            }else if(e.keyCode==32){ //space 直接落下去
                game.fall();
            }
        }
    }
    //移动
    var move=function(){
        timeFunc();
        if(!game.down()){
            game.fixed();
            var line=game.checkClear();
            if(line){
                game.addScore(line);
            }
            var gameOver=game.checkGameOver();
            if(gameOver){
                game.gameOver(false);
                stop();
            }else{
                game.performNext(generateType(),generateDir());
            }
        }
    }
    //计数函数
    var timeFunc = function () {
        timeCount += 1;
        if (timeCount == 5) {//1秒
          timeCount = 0;
          time += 1;
          game.setTime(time);
        }
    }
    //随机生成一个方块种类
    var generateType=function(){
        return Math.ceil(Math.random()*7)-1;//0-6整数
    }
    //随机生成一个旋转次数
    var generateDir=function(){
        return Math.ceil(Math.random()*4)-1;//
    }
    //开始
    var start=function(){
        var doms={
            gameDiv:document.getElementById('game'),
            nextDiv:document.getElementById('next'),
            timeDiv:document.getElementById('time'),
            scoreDiv:document.getElementById('score'),
            resultDiv:document.getElementById('gameover')
        }
        game=new Game();
        game.init(doms,generateType(),generateDir());
        bindKeyEvent();
        game.performNext(generateType(),generateDir());
        timer=setInterval(move,INTERVAL);//每隔200触发move  setInterval方法可按照指定的周期（以毫秒计）来调用函数或计算表达式
    }
    //导出API
    this.start=start;
}