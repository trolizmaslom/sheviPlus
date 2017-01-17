/*валидация формы*/
function validate(form, options) {
    var setings = {
        errorFunction: null,
        submitFunction: null,
        highlightFunction: null,
        unhighlightFunction: null
    }
    $.extend(setings, options);

    var $form = $(form);

    if ($form.length && $form.attr('novalidate') === undefined) {
        $form.on('submit', function (e) {
            e.preventDefault();
        });

        $form.validate({
            errorClass: 'errorText',
            focusCleanup: true,
            focusInvalid: false,
            invalidHandler: function (event, validator) {
                if (typeof(setings.errorFunction) === 'function') {
                    setings.errorFunction(form);
                }
            },
            errorPlacement: function (error, element) {
                error.appendTo(element.closest('.form_input'));
            },
            highlight: function (element, errorClass, validClass) {
                $(element).addClass('error');
                $(element).closest('.form_row').addClass('error').removeClass('valid');
                if (typeof(setings.highlightFunction) === 'function') {
                    setings.highlightFunction(form);
                }
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).removeClass('error');
                if ($(element).closest('.form_row').is('.error')) {
                    $(element).closest('.form_row').removeClass('error').addClass('valid');
                }
                if (typeof(setings.unhighlightFunction) === 'function') {
                    setings.unhighlightFunction(form);
                }
            },
            submitHandler: function (form) {
                if (typeof(setings.submitFunction) === 'function') {
                    setings.submitFunction(form);
                } else {
                    $form[0].submit();
                }
            }
        });

        $('[required]', $form).each(function () {
            $(this).rules("add", {
                required: true,
                messages: {
                    required: "Вы пропустили"
                }
            });
        });

        if ($('[type="email"]', $form).length) {
            $('[type="email"]', $form).rules("add",
                {
                    messages: {
                        email: "Невалидный email"
                    }
                });
        }

        if ($('.tel-mask[required]', $form).length) {
            $('.tel-mask[required]', $form).rules("add",
                {
                    messages: {
                        required: "Введите номер мобильного телефона."
                    }
                });
        }

        $('[type="password"]', $form).each(function () {
            if ($(this).is("#re_password") == true) {
                $(this).rules("add", {
                    minlength: 3,
                    equalTo: "#password",
                    messages: {
                        equalTo: "Неверный пароль.",
                        minlength: "Недостаточно символов."
                    }
                });
            }
        })
    }
}

/*Отправка формы с вызовом попапа*/
function validationCall(form) {

    var thisForm = $(form);
    var formSur = thisForm.serialize();

    $.ajax({
        url: thisForm.attr('action'),
        data: formSur,
        method: 'POST',
        success: function (data) {
            if (data.trim() == 'true') {
                thisForm.trigger("reset");
                popNext("#call_success", "call-popup");
            }
            else {
                thisForm.trigger('reset');
            }

        }
    });
}


function popNext(popupId, popupWrap) {

    $.fancybox.open(popupId, {
        padding: 0,
        fitToView: true,
        wrapCSS: popupWrap,
        autoSize: true,
        afterClose: function () {
            $('form').trigger("reset");
            clearTimeout(timer);
        }
    });

    var timer = null;

    timer = setTimeout(function () {
        $('form').trigger("reset");
        $.fancybox.close(popupId);
    }, 2000);

}


/*маска на инпуте*/
function Maskedinput() {
    if ($('.tel-mask')) {
        $('.tel-mask').mask('+9 (999) 999-99-99');
    }
}

/*fansybox на форме*/
function fancyboxForm() {
    $('.fancybox-form').fancybox({
        autoResize: true,
        wrapCSS: 'fancybox-form',
        openEffect : 'fade',
        closeEffect : 'fade',
        autoSize:true,
        width : 1030,
        height : 835,
        maxWidth : '100%',
        'closeBtn' : true,
        fitToView:true,
        autoCenter: true,
        padding:'0'
    })
}


function showMoreFunc() {
    if ($('.show-more-product').length > 0) {
        var id, page;
        $(document).on('click', '.show-more-product .showmore-button', function (e) {
            e.preventDefault();
            id = $(this).attr('data-id');
            page = $('.show-more-product').attr('data-page');
            $.ajax({
                url: showMoreProduct,
                data: {id: id, page: page},
                method: 'POST',
                success: function (data) {
                    $('.show-more-product > *').remove();
                    $('.show-more-product').append(data);
                }
            });
        });

    }
}

function clarifyPopInfo() {
    var holder, title, mainImg, markImg;
    var autoSize = false;

    if ($(window).width() < 992 ){
        autoSize = true;
    }

    $(document).on('click', '.clarify-pop-show', function (e) {
        e.preventDefault();
        holder = $(this).parents('.clarify-info-all');
        title = holder.find('.clarify-info-title').text();
        mainImg = holder.find('.clarify-info-img img').first().attr('src');
        markImg = holder.find('.clarify-info-mark-img img').attr('src') || holder.attr('data-mark-img-path');

        $('#pop-clarify .clarify-product-title').text(title);

        if (typeof title != 'undefined'){
            $('#pop-clarify .clarify-product-title-name').val(title);
        }
        if (typeof mainImg != 'undefined'){
            $('#pop-clarify .clarify-img img').attr('src',mainImg);
        }else{
            $('#pop-clarify .clarify-img img').remove();
        }
        if (typeof markImg != 'undefined'){
            $('#pop-clarify .clarify-product-logo').attr('src',markImg);
        }else{
            $('#pop-clarify .clarify-product-logo').remove();
        }

        $.fancybox.open('#pop-clarify', {
            padding: 0,
            margin:[20,0,20,0],
            width:'100%',
            autoSize: autoSize,
            fitToView:true,
            minHeight:765,
            wrapCSS:'fancybox-clarify',
            'closeBtn' : true,
            afterClose: function () {
                $('form').trigger("reset");
            }
        });
    });

    $(document).on('click','.clarify-button .transparent-button',function(event){
        event.preventDefault();
        $.fancybox.close();
    })
}

function productTubs() {
    $('.item-map-tubs-top-wrap li').click(function(){
        var i = $(this).index();
        $('.item-map-tubs-top-wrap li').removeClass('active');
        $('.item-map-tubs-top-wrap li').eq(i).addClass('active');

        $('.item-map-tubs-middle-wrap>.item').removeClass('active').eq(i).addClass('active');
    });
}

$(document).ready(function () {
    clarifyPopInfo();

    validate('.clarify-middle .clarify-form form', {submitFunction: validationCall});
    validate('.service-form', {submitFunction: validationCall});
    validate('.discount-popup-form>form', {submitFunction: validationCall});
    validate('#marka-auto-op form', {submitFunction: validationCall});
    validate('#marka-auto-ch form', {submitFunction: validationCall});
     validate('.services-form', {submitFunction: validationCall});
    
    Maskedinput();
    fancyboxForm();
    showMoreFunc();
    productTubs();
});