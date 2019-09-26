//点击全选事件；全部选中；
$('.selec_all').click(function(){
    $('.main input').prop('checked',$('.selec_all').prop('checked'));
    $('.box1 .title input').change();
    item();
})


//给每一个店铺头的input注册事件；
var c;
$('.box1 .title input').change(function(){
    $(this).parent().siblings('.contain_1').find('input').prop('checked',$(this).prop('checked'));
    if($(this).prop('checked')){
        var d=0;
        $(this).parent().siblings('.contain_1').find('.one .two_price').each(function(i,e){
             d += Number($(e).html())
            $(this).parents('.contain_1').siblings('.title').find('.one_price').html(d);
            item();
        })
    }else{
        $(this).parent().find('.one_price').html(0);
        item();
    }
    var num=0;
    $('.main input').each(function(i,e){
        if($(e).prop('checked')){
            num++;
        }
    })
    if(num == $('.main input').length){
     $('.selec_all').prop('checked',true);
    }else{
     $('.selec_all').prop('checked',false);
    }
})
// 给每一个店铺的内容注册事件；
$('.box1 .contain_1 input').change(function(){
    var num1=0;
    c=0
    $(this).parents('.contain_1').find('input').each(function(i,e){
       if($(e).prop('checked')){
           num1++;
           c += Number($(this).parents('.one').find('.two_price').html());
           $(this).parents('.contain_1').siblings('.title').find('.one_price').html(c);
           item();
       }
   })
  
   if(num1 == $(this).parents('.contain_1').find('input').length){
    $(this).parents('.contain_1').siblings('.title').find('input').prop('checked',true);
   }else{
    $(this).parents('.contain_1').siblings('.title').find('input').prop('checked',false);
   }
   if(num1 == 0){
    $(this).parents('.contain_1').siblings('.title').find('.one_price').html(0);
    item();
   }
   var num=0;
   $('.main input').each(function(i,e){
       if($(e).prop('checked')){
           num++;
       }
   })
   if(num == $('.main input').length){
    $('.selec_all').prop('checked',true);
   }else{
    $('.selec_all').prop('checked',false);
   }
//    $('.main input').click();
})
//给除了全选框外下面所有的input注册事件；

$('.main input').click(function(){

    var num=0;
   $('.main input').each(function(i,e){
       if($(e).prop('checked')){
           num++;
       }
   })
   if(num == $('.main input').length){
    $('.selec_all').prop('checked',true);
   }else{
    $('.selec_all').prop('checked',false);
   }

})
function item(){
    var h=0;
    $('.main .title input').each(function(i,e){
        h += $(this).siblings('span').find('.one_price').html() - 0;
      })
      $('.allkan').html(h);
}