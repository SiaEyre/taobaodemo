(function(){
    $(".area").mouseover(function(){
        $(".area").addClass("menu-over");
        $(".area .area-box").css(
            "display" , "block"
        )
       
        $(".area .area-box li").each(function(){
            $(this).hover(function(){
                $(this).addClass("li-over");
            },function(){
                $(this).removeClass("li-over")
            })
               
        })
    //      $(".area .area-box li").each(function(){
    //         $(this).mouseout(function(){
    //             $(this).removeClass("li-over");
    //         })   
    //     }
    //  )
    })
    $(".area ").mouseout(function(){
        $(".area ").mouseout(function(){
            $(".area").removeClass("menu-over");
            $(".area .area-box").css(
                "display" , "none"
            )
        })
    })
})();