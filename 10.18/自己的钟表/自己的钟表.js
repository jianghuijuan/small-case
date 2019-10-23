(function(){
 var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ],
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  function item(select,trans){
      for(let i=0;i<60;i++){
          $(select).append('<span class="sec">'+(i)+'</span>');
          var deg=i*(6);
          $(select+' span').eq(i).css({'transform':'rotate('+deg+'deg) translateX('+trans+'px)'})
      } 
     
  }
  for(let i=1;i<13;i++){
      $('.hour').append('<span>'+(i)+'</span>')
      let deg=i*(30);  
      $('.hour span').eq(i-1).css({'transform':'rotate('+deg+'deg) translateX(100px)'})
  }
  item('.second',195);                                                                                                                
  item('.minute',150);
  item('.dai',230);   

  function item1(){
      var time=new Date();
      var year=time.getFullYear();
      var month=time.getMonth();
      var date=time.getDate();
      var day=time.getDay();
      var h = time.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true });
      var hour=time.getHours();
      var minute=time.getMinutes();
      var second=time.getSeconds()+1;
      console.log(second);
      $('.t').html(date+'.'+months[month]);
      $('.mi').html(h);
      $('.bott').html(days[day]);
      $('.second').css("transform","rotate("+(-6*second)+"deg)");
      $('.minute').css("transform","rotate("+(-6*minute)+"deg)");
      $('.hour').css("transform","rotate("+(-30*(hour))+"deg)");
  }
  setInterval(item1,1000);
  item1(); 
})()