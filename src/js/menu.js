(function reload() {
    const ELEMENTS = document.querySelectorAll(".HOVER");
    const ELEMENTS_SPAN = document.querySelector('#border');

    ELEMENTS.forEach((element, index) => {
        let heightNavLink = element.querySelector("a").clientHeight;
        let widthNavLink = element.querySelector("a").clientWidth;

        element.addEventListener("mousemove", event => {
            let left = 0;
            for(let i=index; i>0; i--){
                left += ELEMENTS[i-1].offsetWidth;
            }

            ELEMENTS_SPAN.classList.add('on');
            ELEMENTS_SPAN.style.marginLeft = `${left}px`;
            ELEMENTS_SPAN.style.height = `${heightNavLink}px`;
            ELEMENTS_SPAN.style.width = `${widthNavLink}px`;
            ELEMENTS_SPAN.style.display = 'inline';
        });

        element.addEventListener("mouseout", event => {
            ELEMENTS_SPAN.classList.remove('on');
            ELEMENTS_SPAN.style.marginLeft = `${0}px`;
        });
    });

    const windowHeight = $(window).height();
    swipeElements('.pre-title', 'swipe-left-text-first' );
    swipeElements('.carousel-title', 'swipe-left-text-second' );

    function swipeElements(swipingElement, className ) {
        $(swipingElement).each((index,element) => {
            const height = element.getBoundingClientRect().top + element.getBoundingClientRect().height;
            const currentPosition = $(document).scrollTop() + windowHeight;

            if (currentPosition >= height) {
                element.classList.add(className);
            } else {
                element.style.left = `2000px`;
            }
        });
    }

    $(document).on('scroll', () => {
        swipeElements('.pre-title', 'swipe-left-text-first' );
        swipeElements('.carousel-title', 'swipe-left-text-second' );

        if ($(document).scrollTop() > 50) {
            $('header').addClass('shrink');
            $('.mini-logo').removeClass('d-none');
            $('.full-logo').removeClass('d-block');
            $('.mini-logo').addClass('d-block');
            $('.full-logo').addClass('d-none');
        } else {
            $('header').removeClass('shrink');
            $('.mini-logo').addClass('d-none');
            $('.full-logo').addClass('d-block');
            $('.mini-logo').removeClass('d-block');
            $('.full-logo').removeClass('d-none');
        }
    });

})();