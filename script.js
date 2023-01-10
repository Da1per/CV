function ready(){
  function checkWidth() {
    var windowWidth = document.documentElement.scrollWidth,
        elem = document.getElementById('nav_bar')
    if(windowWidth < 480){
      elem.classList.add('mobile_bg');
    }
    else{
      elem.classList.remove('mobile_bg');
    }
  }
  checkWidth();
  document.addEventListener("resize", checkWidth)
 // $(window).resize(function(){
 //   checkWidth();
 // });
 var mobOn = document.getElementById('mobile_on'),
  navBar = document.querySelector('.nav_bar');
 mobOn.onclick = function(){navBar.classList.toggle('mobile_bg'); 
    };
	}
  document.addEventListener("DOMContentLoaded", ready)