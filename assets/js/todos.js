
$("li").on("click", function(){
    $(this).toggleClass("complete")
    console.log("Yay!")
    console.log("Github test Log")
})

// Click on 'X' to delete Todo
$("span").on("click", function(event){
    event.stopPropagation();
    alert("clicked on a span")
})