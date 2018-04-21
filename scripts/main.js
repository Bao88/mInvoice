
//  style="padding: 5px; margin-top: -6px; margin-left: -8px;"
let lastScroll = 0;
function scrolling(event){
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
    // $( ".item1" ).animate({
    //     "opacity": "0"
    // });
    $( ".intro, .item1" ).animate({
        "opacity": "0"
    }, "slow");
    $( "#frame ").animate({
            "bottom": "57.5%"
    }, 1100);
    $( ".leftText ").animate({
        "opacity": "1",
        "left": "0"
    }, 1100);
    $( "#home" ).fadeIn();
}

function showUnpaid() {
    // console.log($( "#frame > div" )[0]);
    $( ".item1" ).animate({
            "opacity": "1"
    });
    $( ".item2" ).animate({
        "opacity": "0"
    });
}

function showToPayment() {
    // $( "#frame > div" )[0].style.opacity = "0";
    $( ".item2" ).animate({
        "opacity": "1"
    });
    $( ".item3, #frame > div:nth-of-type(1)" ).animate({
        "opacity": "0"
    });
}

function showHistory() {
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

function showPrices() {
    // $( "body ").fadeOut();
    document.body.style.animation = "initial";
    // $( "body ").fadeIn();
    $( "#frame > div" )[2].style.opacity = "0";
    $( " #frame ").animate({
        "left": "80%"
    },500, function(){
        $("#prices").animate({
            "left": "5vw",
            "opacity": "1"
        }, 500);
    });
    $( " .leftText ").animate({
        "left": "30%",
        "opacity": "0"
    },500);
    $( " .unpaid ").animate({
        "right": "-30%",
        "opacity": "0"
    },500);
}

function showBenefits() {
    // alert("implement function showBenefits");
    document.body.style.animation = "backgroundColorAnimation 1s forwards";
   
    // $("body").addClass("addAnimation");
    // $( "body").fadeToggle().css("background-color", "rgba(229, 50, 50, 1)");
    // $( " #frame, #prices" ).css("opacity", "0");
    // $( " #showBenefits ").css("opacity","1");
    // $( "body").fadeIn();

        //     });
    // $( " #frame, #prices").animate({
    //     "opacity": "0"
    // }, function() {
    //     $( "body").hide
    //     document.body.style.backgroundColor = "rgba(229, 50, 50, 1)";
    //     $( " #showBenefits, body ").animate({
    //         "opacity": "1"
    //     });
    // });
    
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