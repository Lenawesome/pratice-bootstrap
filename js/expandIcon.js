function expandEmail(){
    if($(".social-link").hasClass("expanded")){
        $(".social-link").removeClass("expanded");
        $(".expand-btn").removeClass("moved");
        $(".expand-btn").html("<i class='ti-angle-right'>");
    }else{
        $(".social-link").addClass("expanded");
        $(".expand-btn").addClass("moved");
        $(".expand-btn").html("<i class='ti-angle-left'>");
    }
}