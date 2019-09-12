function expandEmail(){
    if($(".email-wrapper").hasClass("expanded")){
        $(".expand-btn").removeClass("moved");
        $(".expand-btn").html("<i class='ti-angle-right'>");
        $(".email-wrapper").removeClass("expanded");
    }else{
        $(".email-wrapper").addClass("expanded");
        $(".expand-btn").addClass("moved");
        $(".expand-btn").html("<i class='ti-angle-left'>");
        $(".email-wrapper").addClass("expanded");
    }
}