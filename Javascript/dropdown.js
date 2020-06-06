$(document).ready(function() {
    $(".tile").click(function() {
        $(this).toggleClass("active");
        if ($(this).attr("id") == ("lang")) {
            $(".languages").toggleClass("active");
        }
        else if ($(this).attr("id") == ("prac")) {
            $(".practices").toggleClass("active");
        }
        else if ($(this).attr("id") == ("comm")) {
            $(".communication").toggleClass("active");
        }
        
    });
});

$(document).ready(function() {
    $(".tile2").click(function() {
        $(this).toggleClass("active");
        
    });
});