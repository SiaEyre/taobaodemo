(function(){
    $(function(){
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