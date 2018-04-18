
//  style="padding: 5px; margin-top: -6px; margin-left: -8px;"

$( document ).ready( function() {
    // Scrolling bar
    let lastScroll = 0;
    $( window ).on("wheel", function (event) {
        // let way = $( this ).scrollTop();
        if (event.originalEvent.deltaY < 0 ) {
            $(".c"+lastScroll).css(changeDotSize(false));
            $(".c"+(lastScroll-1)).css(changeDotSize(true));
            if( lastScroll > 1 ) lastScroll--; 
        } else {
            $(".c"+lastScroll).css(changeDotSize(true));
            $(".c"+(lastScroll-1)).css(changeDotSize(false));
            if ( lastScroll < 7 ) lastScroll++;
        }
    });

    $( window ).click( function () {
        
    });
});

function changeDotSize(isBig){
    let big = {
        "padding": "5px",
        "margin-top": "-6px",
        "margin-left": "-8px"
    },
    small = {
        "padding": "0px",
        "margin-top": "-1px",
        "margin-left": "-3px"
    };
    return isBig ? big : small;
}