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

  var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  $('#botonEnviar').on('click', function(){
    if( $('#nombres').val()  === ''){
      mostrarMensaje('NOMBRES','nombres')
      return false
    }else if( $('#apellidos').val()  === ''){
      mostrarMensaje('APELLIDOS','apellidos')
      return false
    }else if( $('#edad').val() === ''){
      mostrarMensaje('EDAD', 'edad')
      return false
    }else if( $('#telefono').val()  === ''){
      mostrarMensaje('TELÉFONO','telefono')
      return false
    }else if( $('#correo').val()  === ''){
      mostrarMensaje('CORREO ELÉCTRONICO','correo')
      return false
    }else if( $('#ciudad').val()  === ''){
      mostrarMensaje('CIUDAD','ciudad')
      return false
    }else {

    }
  })

  function mostrarMensaje(campo, valorID){
    $(".contenedor-mensaje").slideDown()
    if( valorID === 'correo' ){
      if( testEmail.test($('#correo').val()) ){
  
      }else{
        $('#'+valorID).focus();
        setTimeout(function() {
          $('#textoMensaje').text('Campo '+campo+' esta mal digitado.')      
          $(".contenedor-mensaje").fadeOut(2500);
        },0);
        return false
      }
    }
    $('#'+valorID).focus();
    setTimeout(function() {
      $('#textoMensaje').text('Campo '+campo+' no puede ser vacío.')      
      $(".contenedor-mensaje").fadeOut(2500);
    },0);
  }


  $('#btnInformacion').on('click', function(){
    if( $('.overlay-mensaje').is(':hidden') ){
      $('.overlay-mensaje').fadeIn();
    }
  })

  $('#boton-cerrar').on('click', function(){
    $('.overlay-mensaje').fadeOut();
  })
  

});  

WebFontConfig = {
google: { families: [ 'Roboto', 'Open+Sans', 'Anton', 'Acme'] } };
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

