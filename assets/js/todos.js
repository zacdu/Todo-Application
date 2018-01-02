
$("li").on("click", function(){
    $(this).toggleClass("complete")
    console.log("Yay!")
    console.log("Github test Log")
})

// Click on 'X' to delete Todo
$("span").on("click", function(event){
    $(this).parent().fadeOut(300, function(){
        $(this).parent.remove();
    });
    event.stopPropagation();
})