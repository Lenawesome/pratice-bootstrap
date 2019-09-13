function expandEmail(){
    if($(".submit-button").hasClass("expanded")){
        $(".expand-btn").removeClass("moved");
        $(".expand-btn").html("<i class='ti-angle-right'>");
        $(".submit-button").removeClass("expanded");
    }else{
        $(".submit-button").addClass("expanded");
        $(".expand-btn").addClass("moved");
        $(".expand-btn").html("<i class='ti-angle-left'>");
        $(".submit-button").addClass("expanded");
    }
}