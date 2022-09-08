(function ($) {
    Drupal.behaviors.filter = {
        attach: function (context, settings) {
            $('#filterMenu').on('click', function (event) {
                $(this).parent().toggleClass('open');
            });

            $('body').on('click', function (e) {
                if (!$('.dropdown').is(e.target)
                    && $('.dropdown').has(e.target).length === 0
                    && $('.open').has(e.target).length === 0
                ) {
                    $('.dropdown').removeClass('open');
                }
            });
        }
    };
})(jQuery);
/*var dd = document.querySelector('.dropdown');
var ddToggle = document.querySelector('.dropdown-toggle');
var containerBody = document.querySelector('.dialog-off-canvas-main-canvas');
var toggle = false;

dd.classList.add('open');
dd.classList.toggle('open');

ddToggle.onclick = function(){
    if(toggle){
        dd.classList.remove('open');
    } else {
        dd.classList.add('open');
    }
    toggle = !toggle;
}

containerBody.onclick = function(){
    if(toggle){
        dd.classList.toggle('open');
        toggle = !toggle;
    }
}*/