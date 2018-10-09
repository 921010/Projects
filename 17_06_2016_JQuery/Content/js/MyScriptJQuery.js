/// <reference path="jquery-3.0.0.js" />



$("#gizle").click(function () {
    $("#deneme2").hide(1000); //icine intervall degeri verirsek effekt verir
    //hide yerine slidedown verilebilir,
    //$("#deneme2").slideUp(1000);
    $("#deneme2").fadeOut(1000);
});

$("#goster").click(function () {
    //$("#deneme2").show(1000);
    //$("#deneme2").slideDown(1000);
    $("#deneme2").fadeIn(1000);

});

$("#gizle-goster").click(function () {
    //$("#deneme2").toggle(1000); //ac kapa
    //$("#deneme2").slideToggle(1000); //ac kapa
    $("#deneme2").fadeToggle(1000); //ac kapa
});

$("#secili").change(function(){
    

    if ($("#secili").val() == "mavi") { //if ($(this).val() == "mavi") {

        $(".mavi").slideDown(1000);
        $(".yesil").slideUp(1000);

    }
    else {
        $(".yesil").slideDown(1000);
        $(".mavi").slideUp(1000);
    }

});

//alert($("deneme2").text());//icerigi alir,text(a) olursa deger doner.
//alert($("deneme2").html());//html tagleri ile icerigi alir
//alert($("deneme2").val()); //form nesnelerinin icerigni almak icin kullanilir
//alert($("deneme2").attr("id"));//id  attrb degerini alir
////attrbt icerigini degistirmek icin
////alert($("deneme2").attr("id",));
//alert($("deneme2").attr({ "src": "#", "title": "Basligi" }));

//SAYFA ICINE SAYFA CAGIRILABILIR
$("#sayfa").click(function () {


    $(".icsayfa").html('<object data="http://www.w3schools.com/jquery/exercise.asp?filename=exercise_slide" width="320" height="400">');
});



/*Scrool asagi gidince yukari gonder(window scroll oldugunda tetiklen)*/
$(window).scroll(function () {
    if ($(this).scrollTop() >= 150)
        $(".up").fadeIn(500);
    else
        $(".up").fadeOut(500);

});

//resme klick oldugunda

$(".up img").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);

});


$("#ekleme").append("<p>DEneme Olusturma <\p>"); //icinde ve sonuna 
$("#ekleme").prepend($("<p>DEnemeler <\p>").text("Deneme2"));//icinde ve onune
$("#ekleme").after("<p>DEnemesonra <\p>");//disinda ve sonuna
$("#ekleme").before($("<p>DEnemeler <\p>").text("Deneme2"));//disinda ve onune
$("#ekleme").before("<p>DEnemesonra <\p>"); //iki yazim sekli de dogrduur


