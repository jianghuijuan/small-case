$(function(){
    (function(){
     var arr=[
         {bgu:'./酷狗图片/1.jpg',
          color:'rgba(0,0,0,.3)'},
          {bgu:'./酷狗图片/2.jpg',
          color:'rgba(0,0,0,.3)'},
          {bgu:'./酷狗图片/3.jpg',
          color:'rgba(0,0,0,.3)'},
          {bgu:'./酷狗图片/4.jpg',
          color:'rgba(0,0,0,.3)'},
          {bgu:'./酷狗图片/5.jpg',
          color:'rgba(0,0,0,.3)'},
          {bgu:'./酷狗图片/6.jpg',
          color:'rgba(0,0,0,.3)'},
          {bgu:'./酷狗图片/7.jpg',
          color:'rgba(0,0,0,.3)'},
          {bgu:'./酷狗图片/8.jpg',
          color:'rgba(0,0,0,.3)'},
          {bgu:'./酷狗图片/9.jpg',
          color:'rgba(0,0,0,.3)'}
     ];
     var index=0;
     function item(){
        $('.lunbo >ul li').css('opacity',0);
        index++;
        if(index>8){
            index=0;
        }
        $('.lunbo .square>ul li').eq(index).addClass('active').siblings().removeClass('active');
        $('.lunbo >ul li').stop().animate({'opacity':1},400);
        $(".lunbo .one>li").css('background-image','url('+arr[index].bgu+')');
     }
     $('.lunbo .right_arrow').click(function(){
        item();
     })
    $('.lunbo .left_arrow').click(function(){
        $('.lunbo >ul li').css('opacity',0);
        index--;
        if(index<0){
            index=8;
        }
        $('.lunbo >ul li').stop().animate({'opacity':1},400);
        $(".lunbo .one>li").css('background-image','url('+arr[index].bgu+')');
    })
    
    //生成小圆点
    arr.forEach(function(e,i){
        $('.lunbo .square>ul').append('<li>'+i+'</li>');
        if(i==0){
            $('.lunbo .square>ul li').addClass('active');
        }
    })
    $('.lunbo .square>ul').on('mouseenter','li',function(){
       $(this).addClass('active').siblings().removeClass('active');
       index=$(this).index();
       $('.lunbo >ul li').css('opacity',0);
       $('.lunbo >ul li').stop().animate({'opacity':1},400);
       $(".lunbo .one>li").css('background-image','url('+arr[index].bgu+')');
    })
    $('.lunbo').hover(function(){
      $('.lunbo span').show();
    },function(){
        $('.lunbo>span').hide();
    })
    // setInterval(function(){
    //     $('.lunbo .right_arrow').click();
    // },3000)
    })();
})