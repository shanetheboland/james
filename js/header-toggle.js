$(document).ready(function(){
    $( "#js-header-toggle" ).click(function() {
      $( this ).toggleClass( "is-active" );
      $( "#js-header-menu" ).toggleClass( "is-active" );
    });
});