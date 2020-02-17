(function ($) {
    'use strict';
    /*==================================================================
        [ Daterangepicker ]*/
    try {
        $('.js-datepicker').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "autoUpdateInput": false,
            locale: {
                format: 'DD/MM/YYYY'
            },
        });
    
        var myCalendar = $('.js-datepicker');
        var isClick = 0;
    
        $(window).on('click',function(){
            isClick = 0;
        });
    
        $(myCalendar).on('apply.daterangepicker',function(ev, picker){
            isClick = 0;
            $(this).val(picker.startDate.format('DD/MM/YYYY'));
    
        });
    
        $('.js-btn-calendar').on('click',function(e){
            e.stopPropagation();
    
            if(isClick === 1) isClick = 0;
            else if(isClick === 0) isClick = 1;
    
            if (isClick === 1) {
                myCalendar.focus();
            }
        });
    
        $(myCalendar).on('click',function(e){
            e.stopPropagation();
            isClick = 1;
        });
    
        $('.daterangepicker').on('click',function(e){
            e.stopPropagation();
        });
    
    
    } catch(er) {console.log(er);}
    /*[ Select 2 Config ]
        ===========================================================*/
    
    try {
        var selectSimple = $('.js-select-simple');
    
        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });
    
    } catch (err) {
        console.log(err);
    }

})(jQuery);

function isNumber(event) {
    var keycode = event.keyCode;
    if (keycode > 48 && keycode < 57) {
        return true;
    }
    return false;
}

$(function () {
    $("#btnAdd").click(function () {
        var formData = new FormData();
        formData.append("TcNo", $("#TcNo").val());
        formData.append("Ad", $("#Ad").val());
        formData.append("Soyad", $("#Soyad").val());
        formData.append("Cinsiyet", $("#Cinsiyet").val());
        formData.append("DogumTarihi", $("#DogumTarihi").val());
        formData.append("Okul", $("#Okul").val());
        formData.append("Sýnýf", $("#Sýnýf").val());
        $.ajax({
            url: "/Dapper/Create",
            type: 'POST',
            cache: false,
            contentType: false,
            processData: false,
            data: formData,
            success: function (response) {
                alert(response);
            }
        });
        //debugger;

    });
});