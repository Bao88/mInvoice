
//  style="padding: 5px; margin-top: -6px; margin-left: -8px;"

$( document ).ready( function() {
    // Scrolling bar
    let lastScroll = 0;
    $( window ).on("wheel", function (event) {
        if (event.originalEvent.deltaY < 0 ) {
            if( lastScroll > 0 ) lastScroll--; 
            $(".c"+lastScroll).css(changeDotSize(true));
            $(".c"+(lastScroll+1)).css(changeDotSize(false));
           
        } else {
            if ( lastScroll < 7 ) lastScroll++;
            $(".c"+lastScroll).css(changeDotSize(true));
            $(".c"+(lastScroll-1)).css(changeDotSize(false));
        }
        loadData(lastScroll);
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

function loadData(number){
    alert(number);
}