var $ = jQuery = require('./jquery');
$(window).on('load resize', function() {
    $('#logo').css({
        'height': $('nav').height() * .9
    });
    $('nav ul').css({
        'margin-left': $('#logo').width(),
        'width': '100%'- $('nav ul').css('margin-left')
    });
});

//$(document).keypress(function(e) {
//    if(e.which == 83) {
//        window.webContents.openDevTools();
//    }
//});


//$('html, body').animate({
//    scrollTop: $($(this).attr('href')).offset().top
//}, 500, 'linear');

//var e = $.get( "https://zssstronie.pl" ).text();
//alert(e);

//http://www.dowcipy-zarty.pl/
//http://www.dowcipy.jeja.pl/
//w p znajduje sie a
//.find(".dowcip")
$.get('http://www.dowcipy.jeja.pl/', function( html ) {

    // Loop through elements you want to scrape content from
    $(html)
//        .clone()
        .find('div')
        .find('p')
        .children()
        .remove()
        .end()
        .each(function(){
        var $this = $(this);
//        if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
//        $this.remove();

        $( 'p:empty' ).remove();
        var text = $(this).text();
//        console.log( $(this).text() );
        $('content').append('<article> ' + text + '</article>');

//        var $container = $("container");
//$container.append('<article ' + $container.children().length + 1 + '"></article>');
        if($('article').attr('value') == '0'){
            $(this).hide();
        }   
        
        
        
/////////////////////////////////////
    } )

} );