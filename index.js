var previouslySelected;
var pressedElement;

$(".rating").on("click", function() {

    if(previouslySelected){
        previouslySelected.removeClass("pressed");
    }
    

    pressedElement = $(this);
    pressedElement.addClass("pressed");

    previouslySelected = pressedElement;
    // console.log(pressedElement.hasClass("pressed"));


});

$(".submit").on("click", function (){

    $(".thank-state").css("visibility", "visible");
    var text = pressedElement.html();
    $(".rating-display > span").html(text);
    // console.log(text);
});
