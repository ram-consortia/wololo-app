function inputScript (){
    let showPass=false;
    $('.input_item').on('click',function (){
        $(this).find('input').focus();
    });
    $("input").on('focus',function (){
        let box =$(this).parents('.input_item');
        if($(this).val().trim()==""){
            let text=$(this).attr("placeholder");
            $(this).attr('placeholder','').parent().prev().text(text);
        }
        box.addClass('border_primary').siblings().removeClass('border_primary')
    });
    $("input").on('blur',function (){
        let text=$(this).parent().prev().text()||$(this).attr('placeholder');
        if($(this).val().trim()==""){
            $(this).parent().prev().text("");
            $(this).attr("placeholder",text);
        }else {
            $(this).parent().prev().text(text);
        };
        $('.input_item').removeClass('border_primary')
    });
    $('#eye').on('click',function showPassword(e){
        let that=$(this);
        if(showPass){
            that.prev().find('input').attr('type','password');
            that.find('img')[0].src="../../image/icon-eye.png";
        }else{
            that.find('img')[0].src="../../image/icon-eye1.png";
            that.prev().find('input').attr('type','text');
        }
        showPass=!showPass;
    });

}