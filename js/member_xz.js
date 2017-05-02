
    var id;
    
    $("#cube img").click(function(){
        id = $(this).attr("src");
        //alert(id);
        $("#bg, #putimg").slideDown();
        $("#imgplace").attr("src", id);
    })
    
    $("#close").click(function(){
        $("#bg, #putimg").slideUp();
    })