
$(document).ready(function(e){
  
  $menu = $('#menu'); 
  $('#nav-ar').click(function(e){
      $menu.toggleClass('hide');
      e.preventDefault();
  });
  var wScroll = $(this).scrollTop();
  $('.slide').click(function(e){
    //Scrolling smoothly
    var linkh = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(linkh).offset().top
    });

    //Toggling the class
    e.preventDefault();
  });
  
  var header = $('#header');
  var about = $('#about');
  var games = $('#games');
  var awards = $('#awards ');
  var contact = $('#contact');
  
  
//  if(wScroll > header.offset().top){
//    $('.slide').parent().removeClass('active');
//    $('.slide[href="#header"]').parent().addClass('active');
//  }
//        else if(wScroll > about.offset().top){
//          alert('heyy');
//          $('.slide').parent().removeClass('active');
//          $('.slide[href="#about"]').parent().addClass('active');
//          
//        }
//        else if(wScroll > games.offset().top){
//          $('.slide').parent().removeClass('active');
//          $('.slide[href="#games"]').parent().addClass('active');
//          
//        }
//        else if(wScroll > awards.offset().top){
//          $('.slide').parent().removeClass('active');
//          $('.slide[href="#awards"]').parent().addClass('active');
//          
//        }
//        else if(wScroll > contact.offset().top){
//          $('.slide').parent().removeClass('active');
//          $('.slide[href="#contact"]').parent().addClass('active');
//          
//        }
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('#arrow-up').fadeIn();
  } else {
    $('#arrow-up').fadeOut();
  }
});