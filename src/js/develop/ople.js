/**
 * Created by nickolaygotsliyk on 28.12.16.
 */
function tabNav() {
    $('.tab-but').click(function (e) {
        e.preventDefault;
        if(!$(this).hasClass('active')){
            $('.tab-but').removeClass('active');
            $('.one-tab').removeClass('active');
            $(this).addClass('active');
            var i = $(this).index();
            $('.one-tab').eq(i).addClass('active');

        }
    });
}
$(document).ready(function(){
   tabNav();
});