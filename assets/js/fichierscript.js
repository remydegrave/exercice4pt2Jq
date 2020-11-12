$(document).ready(function () {

    // SOLUTION 1
    
    $("#b1").click(function () {
        //Toggle la classe et accroche des styles à chaque classe
        // $("#text").toggleClass("green");
        $("#text").css("color", "green");

    });
    $("#b2").click(function () {
        //Toggle la classe et accroche des styles à chaque classe
        // $("#text").toggleClass("red");
        $("#text").css({"color": "red"});

    });
    $("#b3").click(function () {
        //Toggle la classe et accroche des styles à chaque classe
        // $("#text").toggleClass("blue");
        $("#text").css({"color": "blue"});
    });

    // SOLUTION 2

    $(".color").click(function () {
        let colorButton = $(this).attr("id");
        $("#text").css("color", colorButton);
    });
});