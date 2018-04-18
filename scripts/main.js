
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

function showIntro() {
    $( "#frame ").animate({
        "bottom": "55px"
    }, "slow"
);
    $( ".intro" ).fadeIn("fast").animate({
        "opacity": "1"
    });

    $( ".leftText ").animate({
        "left": "-10%",
        "opacity": "0"
    }, "slow");
    $( "#home" ).fadeOut();
}

function showFunctionality() {
    // alert("implement function showFunctionality");
    $( ".intro" ).animate({
        "opacity": "0"
    }, "slow", function() {
        $( "#frame ").animate({
            "bottom": "57.5%"
        });
        $( ".leftText ").animate({
            "opacity": "1",
            "left": "0"
        }, "slow");
    }).fadeOut("fast");

    $( "#home" ).fadeIn(2000);
}

function showUnpaid() {
    alert("implement function showUnpaid");

}

function showToPayment() {
    alert("implement function showToPayment");

}

function showHistory() {
    alert("implement function showHistory");

}

function showPrices() {
    alert("implement function showPrices");

}

function showBenefits() {
    alert("implement function showBenefits");

}

function ShowFooter() {
    alert("implement function ShowFooter");

}

function loadData(number){
    switch(number){
        case 0: showIntro(); break;
        case 1: showFunctionality(); break;
        case 2: showUnpaid(); break;
        case 3: showToPayment(); break;
        case 4: showHistory(); break;
        case 5: showPrices(); break;
        case 6: showBenefits(); break;
        case 7: ShowFooter(); break;
    }
    // alert(number);
}