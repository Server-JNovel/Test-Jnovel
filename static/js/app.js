/*Nabar & SearchBar*/
$("#m-m-btn").click(() =>{
    $(".header-items").toggleClass("is_open");
})
$("#o-sa-btn,#m-o-sa-btn").click(()=>{
    $(".shadow").fadeToggle(200);
    $(".text-input").val("");
    $(".search-area").toggleClass("is_open");
    $(".text-input").focus()
})
$("#c-sa-btn,.shadow").click(()=>{
    $(".shadow").fadeToggle(200);
    $(".search-area").toggleClass("is_open");
}) 


/*Slider*/
var slides = $(".slider").children();
var slidesCount = slides.length;
var currentSlide = 1;
var interval = true;

function change_slide(dir=null,go_to_slide=null){
    var translate_value;
    $(".slide-counter").children("#"+String(currentSlide)).removeClass("is_active");

    if(go_to_slide == null){
        if(dir = -1){
            currentSlide += 1;
        }else{
            currentSlide -= 1
        }
        if(currentSlide > slidesCount){
            currentSlide = 1;
            var translate_value=0;
        }else{
            translate_value=parseInt($(".slide").css("translate")) +dir*100;
        }
    }

    if(go_to_slide != null){
        currentSlide = go_to_slide;
        translate_value = (go_to_slide -1) *-100;
    }

    $(".slide").css("translate",String(translate_value)+"%");
    $(".slide-counter").children("#"+String(currentSlide)).addClass("is_active")
    $("#prev-btn,#next-btn").attr("disabled","disabled")
    interval = false;
    console.log(interval)
}

$("#next-btn").click(function(){
    change_slide(-1);
});

$("#prev-btn").click(function(){
    change_slide(1);
});

setInterval(() => {
    if(interval == false){
        return
    }
    change_slide(-1)
    $("#prev-btn,#next-btn").attr("disabled","disabled");
}, 5000);

$(".slide").on("transitionend",function(){
    $("#prev-btn,#next-btn").removeAttr("disabled");
    interval = true;
});