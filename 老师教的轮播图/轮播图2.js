var box = document.querySelector('.box');
    var right = document.querySelector('.right');
    var left = document.querySelector('.left');
    var lis = document.querySelectorAll('li');
    var img = document.querySelector('img');
    var images = ['images/1.index.jpg', 'images/2.index.jpg',
        'images/3.index.jpg', 'images/4.index.jpg', 'images/5.index.jpg'];
     
     var index=0;
     //自动轮播；
     function item(){
        index++;
         if(index==images.length){
             index=0;
         }
         img.src=images[index];
        squar();
     }
     var text=setInterval(item, 1000);
    //左右箭头
    left.onclick=function(){
        index--;
        if(index<0){
            index=images.length-1;
        }
        img.src=images[index];
        squar();
    }
    right.onclick=function(){
       item();
    }
    //点击小圆点，切换图片；
    for(var k=0;k<lis.length;k++){
        lis[k].index=k;
      lis[k].onclick=function(e){
          index=this.index;
          img.src=images[index];
          squar();
      }
    }
    box.onmouseenter=function(){
      clearInterval(text);
    }
    box.onmouseleave=function(){
        text=setInterval(item,1000);
    }
  
    function squar(){
        for(var i=0;i<lis.length;i++){
            lis[i].className='';
         }
         lis[index].className="active"; 
    }