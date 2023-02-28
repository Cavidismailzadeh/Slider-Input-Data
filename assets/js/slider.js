$(document).ready(function(){


    function rightSlider(){
        let activeImage = $(".active");
        if(activeImage.next().length != 0){
            activeImage.removeClass("active");
            activeImage.next().addClass("active");
        }else{
            activeImage.removeClass("active");
            $(activeImage).parent().children().eq(0).addClass("active")
        }
    }
    
    function leftSlider(){
        let activeImage = $(".active");
        if(activeImage.prev().length != 0){
            $(activeImage).removeClass("active");
            $(activeImage).prev().addClass("active");
        }else{
            $(activeImage).removeClass("active");
            $(activeImage).parent().children().eq(2).addClass("active")
        }
    }
    
    
    $(document).on("click",".left",leftSlider);             
    $(document).on("click",".right",rightSlider);         

    $(document).on("mouseover",".left",leftSlider);         
    $(document).on("mouseover",".right",rightSlider);  
    

  

})