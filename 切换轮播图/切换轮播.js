$(function(){
    var index=0;
    function item(){
        index++;
     if(index>10){
       index=1;
       $('ul').css({left:0});
     }
    $('ul').animate({left:-300*index},400);
    }
//右箭头的点击事件；
 $('.right').click(function(){
    item();
 })
 //左箭头的点击事件；
 $('.left').click(function(){
     index--;
     if(index<0){
        
         $('ul').css({left:-300*10});
         index=9;
     }
     $('ul').animate({left:-300*index},400);
 })
 //定时器
 var time = setInterval(function(){
    item();
 },1000)
 $('.box').hover(function(){
   clearInterval(time);
 },function(){
    time = setInterval(function(){
    item();
 },1000)
 })
 //切换交换轮播
 $('a').mouseenter(function(){
     $(this).addClass('active').siblings().removeClass('active');
     var i=$(this).index();
     $('ul').eq(i).show().siblings('ul').hide();
     $('ul').css({left:0});
     index=0;
 })
})