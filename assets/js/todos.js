
$("li").on("click", function(){
    $(this).toggleClass("complete")
    console.log("Yay!")
    console.log("Github test Log")
})

// Click on 'X' to delete Todo
$("span").on("click", function(){
    alert("clicked on a span")
})