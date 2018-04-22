
//  style="padding: 5px; margin-top: -6px; margin-left: -8px;"
let lastScroll = 0;
function scrolling(event){
    let scrollingDown = true;
    if (event.originalEvent.deltaY < 0 ) {
        scrollingDown = false;
        if( lastScroll > 0 ) lastScroll--; 
        $(".c"+lastScroll).css(changeDotSize(true));
        $(".c"+(lastScroll+1)).css(changeDotSize(false));
       
    } else {
        scrollingDown = true;
        if ( lastScroll < 7 ) lastScroll++;
        $(".c"+lastScroll).css(changeDotSize(true));
        $(".c"+(lastScroll-1)).css(changeDotSize(false));
    }
    loadData(lastScroll, scrollingDown);
    $( window ).off("wheel");
    setTimeout(function(){
        $( window ).on("wheel", scrolling);
    }, 800);
}

$( document ).ready( function() {
    // Scrolling bar
    $( window ).on("wheel", scrolling);
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

function showIntro(scrollingDown) {
    if(scrollingDown){
        $( "#home" ).fadeOut();
    } else {
        $( "#frame ").animate({
            "bottom": "55px"
        }, "slow");
        $( ".intro" ).fadeIn("fast").animate({
            "opacity": "1"
        });
        $( ".leftText ").animate({
            "left": "-10%",
            "opacity": "0"
        }, "slow");
    }   
}

function showFunctionality(scrollingDown) {
    if(scrollingDown){
        $( ".intro" ).fadeOut();
        $( "#frame ").animate({
            "bottom": "57.5%"
        }, 1100);
        $( ".leftText ").animate({
            "opacity": "1",
            "left": "0"
        }, 1100);
    } else {
        $( ".item1" ).fadeToggle();
        $( "#home" ).fadeIn();
    }
}

function showUnpaid(scrollingDown) {
    // console.log($( "#frame > div" )[0]);
    $( ".item1" ).animate({
            "opacity": "1"
    });
    $( ".item2" ).animate({
        "opacity": "0"
    });
}

function showToPayment(scrollingDown) {
    // $( "#frame > div" )[0].style.opacity = "0";
    $( ".item2" ).animate({
        "opacity": "1"
    });
    $( ".item3, #frame > div:nth-of-type(1)" ).animate({
        "opacity": "0"
    });
}

function showHistory(scrollingDown) {
    $("#prices").animate({
        "left": "-15vw",
        "opacity": "0"
    }, 500, function(){
        $( "#frame > div" )[1].style.opacity = "0";
        $( ".item3" ).animate({
            "opacity": "1"
        }, 500);
        $( " #frame ").animate({
            "left": "50%"
        },500);
     
        $( " .leftText ").animate({
            "left": "0",
            "opacity": "1"
        },500);
    
        $( " .unpaid ").animate({
            "right": "0",
            "opacity": "1"
        },500);
    });
}

function showPrices(scrollingDown) {
    // $( "body ").fadeOut();
    // $( "body ").fadeIn();
    if(scrollingDown){
        $( "#frame > div" )[2].style.opacity = "0";
        $( " #frame ").animate({
            "left": "80%",
            "opacity": "1"
        },500, function(){
            $("#prices").animate({
                "left": "5vw",
                "opacity": "1"
            }, 500);
        });
    } else {
        document.body.style.backgroundColor = "initial";
        $( " #showBenefits ").animate({
            "opacity": "0"
        }, function(){
            $( " #frame ").animate({
                "left": "80%",
                "opacity": "1"
            },1000);
            $("#prices").animate({
                "top": "50vh",
                "left": "5vw",
                "opacity": "1"
            }, 1000);
        }); 
    }
    $( " .leftText ").animate({
        "left": "30%",
        "opacity": "0"
    },500);
    $( " .unpaid ").animate({
        "right": "-30%",
        "opacity": "0"
    },500);
   
}

function showBenefits(scrollingDown) {
    if(!scrollingDown) document.getElementById("footer").style.display = "none";
    $( " #frame").animate({
        "opacity": "0",
        "left": "90vw"
    }, function() {
        document.body.style.backgroundColor = "rgba(229, 50, 50, 1)";
        $( " #showBenefits ").animate({
            "opacity": "1"
        });
    });
    $("#prices").animate({
        "top": "0vw",
        "opacity": "0"
    }, 500);
}

function ShowFooter(scrollingDown) {
    // alert("implement function ShowFooter");
    document.getElementById("footer").style.display = "flex";

}

function loadData(number, scrollingDown){
    switch(number){
        case 0: showIntro(scrollingDown); break;
        case 1: showFunctionality(scrollingDown); break;
        case 2: showUnpaid(scrollingDown); break;
        case 3: showToPayment(scrollingDown); break;
        case 4: showHistory(scrollingDown); break;
        case 5: showPrices(scrollingDown); break;
        case 6: showBenefits(scrollingDown); break;
        case 7: ShowFooter(scrollingDown); break;
    }
    // alert(number);
}