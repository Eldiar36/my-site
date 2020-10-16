
$(document).ready(function() {

    //E-mail Ajax Send
    $("call").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});
window.onscroll = function showHeader() {
    let header =    document.querySelector(".header");
    if (window.pageYOffset > 300) {
        header.classList.add("header-fixed");
    }
    else  {
        header.classList.remove("header-fixed")
    }
};
$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
$('.burger-menu_button').on(  'click',function () {
    $('.burger-menu').toggleClass('burger-menu_active')
    $('.burger-menu_nav').toggleClass('burger-menu_active')
})
$('.burger-menu_link').on('click',function () {
    $('.burger-menu').removeClass('burger-menu_active')
    $('.burger-menu_nav').removeClass('burger-menu_active')
})
jQuery(document).ready(function($) {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        fixedContentPos: true
    });
});
jQuery(function($){
    $("#skills").viewportChecker({
        callbackFunction:function(){
    $(".progress-bar").hide();
            $(".progress-bar").show();
        }
    });
});
jQuery(window).scroll(function(){
    var $sections = $('section');
    $sections.each(function(i,el){
        var top  = $(el).offset().top-300;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');

        }
    })
});
document.addEventListener("DOMContentLoaded",function (){
    const form = document.getElementById("popup-form");
    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();
        let error = formValidate(form);


        if (error === 0){
            form.classList.add("_sending")
            let response = await  fetch("sendmail.php",{
                method: "Post",
            });
            if (response.ok){
                 let result = await  response.json();
                 alert(result.message);
                 form.reset();
                 form.classList.remove("_sending")
            }else {
                alert("Ошибка")
                form.classList.remove("_sending")

            }
        }
        else {
            alert("Заполните обязательные поля")
        }
    }

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll("._req")

        for (let index = 0; index < formReq.length;index++){
            const  input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains("_email")){
                if (emailTest(input)){
                    formAddError(input);
                    error++
                }
            }
            else {
                if (input.value === ""){
                    formAddError(input)
                    error++;
                }
            }
        }
        return error;
    }
    function  formAddError(input){
        input.parentElement.classList.add("_error");
        input.classList.add("_error");
    }
    function  formRemoveError(input){
        input.parentElement.classList.remove("_error");
        input.classList.remove("_error");
    }
    //Функция теста e-mail
    function emailTest(input){
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        return EMAIL_REGEXP.test(input.value);
    }

});

