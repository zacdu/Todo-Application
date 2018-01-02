// Line-through on click
$("ul").on("click", "li", function(){
    $(this).toggleClass("complete")
})

// Click on 'X' to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(300, function(){
        // Below, 'this' refers to the whole .parent() - 
        // which, in this case, is the whole <li> as well as the <span>
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        // Grabbing new text from input
        var todoText = $(this).val();
        $(this).val("");
        //Create a new li and add to ul
        $("ul").append("<li class='unselectable'><span>X</span> " + todoText + "</li>");
    }
})
