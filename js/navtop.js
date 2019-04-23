(function () {
    $(function () {
        // $(".area").mouseover(function(){
        //     $(".area").addClass("menu-over");
        //     $(".area .area-box").css(
        //         "display" , "block"
        //     )

        //     $(".area .area-box li").each(function(){
        //             $(this).mouseover(function(){
        //                 $(this).addClass("li-over");
        //             })   
        //         }
        //      )
        //      $(".area .area-box li").each(function(){
        //         $(this).mouseout(function(){
        //             $(this).removeClass("li-over");
        //         })   
        //     }
        //  )
        // })
        // $(".area ").mouseout(function(){
        //     $(".area ").mouseout(function(){
        //         $(".area").removeClass("menu-over");
        //         $(".area .area-box").css(
        //             "display" , "none"
        //         )
        //     })
        // })
        //地区选择
        $(".area").hover(function () {
            $(this).addClass("menu-over");
            $(".area-box").show();
            $(".area-box li").each(function () {
                $(this).hover(function () {
                    $(this).addClass("li-over");
                }, function () {
                    $(this).removeClass("li-over");
                })
            })
        }, function () {
            $(".area").removeClass("menu-over");
            $(".area-box").hide();
        });
        //账户信息
        $(".user").hover(function(){
            $(this).addClass("user-over");
            $(".user .userMsg").show();
            console.log( $(".user .userMsg .quit span,.user .userMsg .equity a"));
            $(".user .userMsg a,.user .userMsg a").each(function(){
               $(this).hover(function(){
                    $(this).css("color","#ff5011");
                },function(){
                    $(this).css('color','#6c6c6c');
                })
            })
        },function(){
            $(this).removeClass("user-over");
            $(".user .userMsg").hide();
        })







    })
})();