var swiperSlider = function(root) {

    var me = this;
    me.root = $(root);

    var _init = function(element) {
        $element = element,
        initEvents(element[0]);
    },

    slider = function($item)
    {
        var swiper = new Swiper($item, {
        //slidesPerView: 5,
        //spaceBetween: 15,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                spaceBetween: 15,
                slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
                spaceBetween: 15,
                slidesPerView: 5,
            },
        }
        });
    },

    initEvents = function(element)
    {
        slider(element);
    }

    me.root.each(function(){
        new _init( $(this) );
    });
}

$(document).ready(function(){
    new swiperSlider(".js-swiper-slider");
});