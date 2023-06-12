/*
 * Fade in-out
 */

  (function( $ ){	
$(document).ready(function(){
$(".fadeinerdiv").hide();
$(".fadeouterdiv").mouseenter(function(){
$(".fadeinerdiv").fadeIn("fast");});
$(".fadeouterdiv").mouseleave(function(){
$(".fadeinerdiv").fadeOut("fast");});
});
})( jQuery );
