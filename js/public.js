$(document).on("pageInit", function(e, pageId, $page) {
      


    if(pageId == "page-apply") { 
        $(".btntab .button").click(function(){
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
        });

         
      }//page-apply结束

});