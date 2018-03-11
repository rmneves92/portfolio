$(function(){
    $('.lazy').lazy({
        effect: "fadeIn",
        effectTime: 5000,
        threshold: 0
      });
        

      setTimeout(function() {
        $("p.animacao1").addClass("fadeOutLeft"); 
  },7000);



  // effect hr

  var toggle = false,
    hrs = $('hr');

$('.navbar').hover(function(){
  $.map(hrs, function(val, i){
    if(toggle === false){
      $(val)
          .addClass('grow')
          .addClass('line-color-change');
      
    }else{
      


        $(val).removeClass('grow')
        .removeClass('line-color-change');
     
       
    }
    
  });
  toggle = !toggle;
});


//--------------


  var typed = new Typed('.titulo-principal', {
    stringsElement: '#element',
    typeSpeed: 55,
    backSpeed: 55,
    startDelay: 3000,
    
    shuffle: true,
    smartBackspace: true,
    fadeOut: true
    

  });




    $(".titulo-principal").fadeIn(2000);









    
    $(".typed-cursor").css("font-size", "90px");
    $(".typed-cursor").css("margin-left", "2px");
 

    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                    //$(".navbar").css("background", "black");
                } else {
                    $('#back-to-top').removeClass('show');
                   // $(".navbar").css("background", "white");
                }
            };
      
            
        backToTop();
        $(window).on('scroll', function () {
            backToTop();

            



        });




        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
      }


});




// MENU FIXO AO SCROLLAR




/*  $(window).scroll(function() {
	  	
  var posicaoAtual = $(window).scrollTop();
  var alturaPortfolio = $(".destaque").position().top-10;
          
  if ( posicaoAtual >= alturaPortfolio ) {
    $(".navbar").fadeOut();
  } else {
    $(".navbar").fadeIn();
  }

}); */
