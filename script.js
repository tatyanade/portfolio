var fontArray = ["'Montserrat', sans-serif",
"'Mallanna', sans-serif",
"'Roboto', sans-serif",
"'Fire Sans', sans-serif",
"'Open Sans', sans-serif",
"'Aleo', serif",
"'Sarabun', sans-serif",
"'Alegreya SC', serif"]

//     selectFont = fontArray[Math.floor(Math.random() * fontArray.length)];

// [].forEach.call( document.getElementsByTagName('h1'), function(el) {
//   el.style.fontFamily = selectFont;
// });



$('img[data-enlargable]').addClass('img-enlargable').click(function(){
    var src = $(this).attr('src');
    $('<div>').css({
        background: 'RGBA(0,0,0,.5) url('+src+') no-repeat center',
        backgroundSize: 'contain',
        width:'100%', height:'100%',
        position:'fixed',
        zIndex:'10000',
        top:'0', left:'0',
        cursor: 'zoom-out'
    }).click(function(){
        $(this).remove();
    }).appendTo('body');
});





jQuery(document).ready(function($)
{
  
  $("#author_bio_wrap_toggle").click(function()
  {
    
    $("#author_bio_wrap").slideToggle( "slow");
    
      // if ($("#author_bio_wrap_toggle").text() == "˅ Expand Author Details ˅")
      // {         
      //   $("#author_bio_wrap_toggle").html("^ Hide Author Details ^")
      // }
      // else 
      // {     
      //   $("#author_bio_wrap_toggle").text("˅ Expand Author Details ˅")
      // }
    
  });  
  
});




