$(document).ready(function() {
    $(".languages").hide();
    $(".practices").hide();
    $(".communication").hide();
    
    $(".tile").click(function() {
        $(this).toggleClass("active");
        if ($(this).attr("id") == ("lang")) {
            $(".languages").slideToggle("slow");
        }
        else if ($(this).attr("id") == ("prac")) {
            $(".practices").slideToggle("slow");
        }
        else if ($(this).attr("id") == ("comm")) {
            $(".communication").slideToggle("slow");
        }
        
    });
});