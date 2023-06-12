/*
 * Sign All
 */
(function( $ ){


	
$(document).ready(function(){




$(".RingsContainer").mouseenter(function(){  
    $(".image-thumbnail-2").animate({ height:'88px', width:'88px', lineHeight:"88px", },'fast'); 
   
    $(".menutitle").fadeIn("fast");
});
$(".RingsContainer").mouseleave(function(){
    $(".image-thumbnail-2").animate({ height:'78px', width:'78px', lineHeight:"78px", },'fast');
    
    $("#textAudio").fadeOut("fast");
});





});



})( jQuery );
