// Check off specific todo's by clicking
$("li").on("click", function(){
    $(this).toggleClass("complete")
})