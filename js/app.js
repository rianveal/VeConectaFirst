$(document).ready(function(){

  var iconMenu = $('.icon-menu--content')
  var overlay = $('.overlay-menu')
  var width = window.innerWidth
  var navig = $('nav.menu-options')

  // Acción para abrir menu de opciones en mobiles
  $(iconMenu).on('click', function(e) {
    e.preventDefault()
    var el = $(this)
    if( width < 992 ){
      if ($(overlay).is(':hidden')){
        //$('header').css('background-color', 'transparent')
        el.addClass('icon-menu--active')
        $(overlay).fadeIn('slow')
      }else{
        //$('header').css('background-color', 'rgba(0,0,0,0.25)')
        el.removeClass('icon-menu--active')
        $(overlay).fadeOut('slow')
      }
    }
  })

  // Transformando el menu de opciones -- mobile - Desktop
  $(window).resize(function(){
    var w = $(window).width()
    if(w >= 1024 && $(overlay).is(':hidden')){
      $(overlay).css('display','block')
      $(overlay).removeAttr('style')
    }else if( w <= 1185){
      if($('.tooltip').is('hidden')){
        $('.tooltip').css('display','none')
      }else{
        $('.tooltip').css('display','none')
      }
    }
  })

  // Eventos que cierra el modal de menu, al seleccionar una de las 
  // opciones del mismo (Solo para versiones moviles)
  $('.item-menu').on('click', function(e){
    e.preventDefault()
    var el = $(this)
    var width = window.innerWidth
    var navig = $('nav.menu-opt')
    if( width < 992 ){
    	$(iconMenu).removeClass('icon-menu--active')
      $(overlay).fadeOut('slow')	
    }else if( width >= 1024 ){}
  })

  // Efecto de scroll en el body cuando se escoge una opción de usuario.
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({scrollTop: targetOffset - 100}, 900);
        return false;
      }
    }
  });

  // Método para el manejo de link en nueva pestaña
  $('.external-link').click(function() {
    url = $(this).attr("href");
    window.open(url, '_blank');
    return false;
  });

});  