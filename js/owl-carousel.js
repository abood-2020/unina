$(".carousel").owlCarousel({
   margin : 10 ,
   loop : true,
   autoplay : true,
   autoplayTimeout : 2000,
   autoplayHoverPause : true,
   responsive : {
    0 :{
        items : 1 ,
        nav : false
     },
     500 :{
        items : 1 ,
        nav : false
     },
    
     990 :{
        items : 2 ,
        nav : false
     }
   }
});