$( document ).ready(function(){
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".nav_bar");
    if(windowWidth < 480){
      elem.addClass('mobile_bg');
    }
    else{
      elem.removeClass('mobile_bg');
    }
  }
  checkWidth();
  $(window).resize(function(){
    checkWidth();
  });
  $(".mobile_on").click(function(){ 
  $(".nav_bar").toggleClass('mobile_bg'); 
    });
//  $('.en').addClass('dis');
//  $( ".first" ).hover(function(){
//	  $( this ).toggleClass( "under" );
//  $( ".en" ).toggleClass( "dis" ) ;
//	 });
	});