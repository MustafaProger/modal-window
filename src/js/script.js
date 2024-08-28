"use strict"

$(document).ready(function (){

    //маска для номера
    $(".form__phone").mask("+7 (999) 999-99-99")

    //модальные окна
    $('[data-modal=call]').on('click', function() {
        $('.overlay, #call').fadeIn();
        $("body").toggleClass('modal-open');
    })

    $('[data-modal=request]').on('click', function() {
        $('.overlay, #request').fadeIn();
        $("body").toggleClass('modal-open');
    })

    $('.modal__close').on('click', function() {
        $('.overlay, #call, #request').fadeOut();
        $('body').removeClass('modal-open')
    })

    //валидация окон
    function validateForms(item){
        $(item).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                phone: "required",
            },

            messages: {
                name: {
                    required: 'Введите ваше имя',
                    minlength: jQuery.validator.format('Введите минимум {0} символа'),
                },
                email: {
                    required: 'Введите вашу электронную почту',
                    email: "Неправильно введена почта"
                },
                phone: 'Введите ваш номер телефона'
            }
        });
    }

    validateForms('#call form');
    validateForms('#request form');
    
});
