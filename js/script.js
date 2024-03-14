$(document).ready(function(){

    // init Isotope
    var $filterMainPart = $('.filterMainPart').isotope({
      // options
    });
    // filter items on button click
    $('.work-btn').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $filterMainPart.isotope({ filter: filterValue });
    });
    
    // 000000000000000000000000000000000000000000000000
    
    // $(window).scroll(function(){
    //   if($(this).scrollTop() > 100 ){
    //     $('.scroll-top').fadeIn();
    //   }
    //   else{
    //     $('.scroll-top').fadeOut();
    //   };
    // });
    // $('.scroll-top').click(function(){
    //  $('html,body').animate({
    //    scrollTop:0
    //  },2000);
    // });
    
    // Custom click event - open fancyBox manually
$('.fancybox').on('click', function() {
  var visibleLinks = $('.fancybox:visible');
  
  $.fancybox.open( visibleLinks, {}, visibleLinks.index( this ) );
  
  return false;
});
    
    
    });
    




