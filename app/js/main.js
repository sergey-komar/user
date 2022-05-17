$(function () {

    $('.questions-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500); 
     });

     $('.specialists-block__button').on('click', function(){
        $('.specialists-block__inner--none').slideToggle(); 
    });
    $('#my-block').slideToggle('medium', function() { if ($(this).is(':visible')) $('this').css('display','flex'); });

});