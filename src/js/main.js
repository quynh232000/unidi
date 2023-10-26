
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
function handleTreeView (){
    $(".tree-item-icon").click(function(){
        if($(this).parent().hasClass("has")){
            const ulChild = $(this).parent().siblings()
            if( $(this).parent().siblings().hasClass("active")){
                ulChild.removeClass("active")
            }else{
                ulChild.addClass("active")
            }
        }
    })
}
function handleReferralTab(){
    $(".referral-tab-item").click(function(){
        const typeActive = $(this).attr("type")
        $(".referral-tab-item").each(function(){
            $(this).removeClass("active")
            const typeActive1 = $(this).attr("type")
            $(`.referral-content.${typeActive1}`).removeClass("active")
        })
        $(this).addClass("active")
        console.log(typeActive)
        $(`.referral-content.${typeActive}`).addClass("active")
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
    // tree view
    if($(".referral-body")){
        handleTreeView()
        handleReferralTab()
    }


})
