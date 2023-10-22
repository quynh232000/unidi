
// ==============function start===================//
function handleOpenNavMobile(){
    $("#menumobile").click(function(){

        $(".sidebar").css("left","0%")
        $(".sidebar-wrapper").css("transform","translateX(0%)")
    })
    $(".sidebar-close i").click(function(){
        $(".sidebar").css("left","100%")
        $(".sidebar-wrapper").css("transform","translateX(100%)")
    })
    $(".sidebar").click(function(){
        $(".sidebar").css("left","100%")
        $(".sidebar-wrapper").css("transform","translateX(100%)")
    })
    $(".sidebar-wrapper").click(function(e){
        e.stopPropagation()
    })
}
function handleShowSortCollection(){
    $(".c-nav-hhiden").click(function(){
        $(".g-left").css("display","block")
        $(".g-left").click(function(e){
            e.stopPropagation()
            setTimeout(()=>{
                $(".g-left").css("display","none")

            },1000)
        })
    })
    
    
    
}
// ==============function end===================//


$().ready(function(){
    // show sidebar
    if($(".menumobile")) {
        handleOpenNavMobile()
    }
    // show short collection
    if($(".g-left").length){
        handleShowSortCollection()
    }


})
