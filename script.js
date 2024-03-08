$(".toogle-menu").change(function(event) {
    localStorage.setItem("toogle-menu", $(".toogle-menu").is(":checked"))
})

$(function() {
    if(localStorage.getItem("toggle-menu") == "true")
        $(".toogle-menu").prop("checked","true")
})