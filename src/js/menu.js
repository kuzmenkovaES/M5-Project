(function reload() {
    const ELEMENTS = document.querySelectorAll(".HOVER");
    const ELEMENTS_SPAN = document.querySelector('#border');

    ELEMENTS.forEach((element, index) => {
        element.addEventListener("mousemove", event => {
            let left = 0;
            for(let i=index; i>0; i--){
                left += ELEMENTS[i-1].offsetWidth;
            }

            ELEMENTS_SPAN.classList.add('on');
            ELEMENTS_SPAN.style.marginLeft = `${left}px`;
            ELEMENTS_SPAN.style.height = `${element.clientHeight}px`;
            ELEMENTS_SPAN.style.width = `${element.clientWidth}px`;
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

    resizeLogo();
    window.addEventListener('resize', () => resizeLogo($(document).scrollTop()));

    function resizeLogo(documentScrollTop) {
        const widthLogo = window.innerWidth < 1921 ? ((258*window.innerWidth)/1920) : 258;
        const minWidthLogo = window.innerWidth < 1921 ? ((106*window.innerWidth)/1920) : 106;

        $('.navbar-brand.logo')[0].style.setProperty('width', `${widthLogo}px`);
        $('.full-logo')[0].style.setProperty('width', `${widthLogo}px`);

        $('.navbar-brand.logo')[0].style.setProperty('min-width', `${minWidthLogo}px`);
        $('.full-logo')[0].style.setProperty('min-width', `${minWidthLogo}px`);
        $('.medium-logo')[0].style.setProperty('width', `${minWidthLogo}px`);

        if(documentScrollTop) {
            const top = Math.trunc(documentScrollTop/10) > 51 ? 0.5 : (1-documentScrollTop/1000);
            $('.medium-logo')[0].style.setProperty('width', `${minWidthLogo*top}px`);
        }
    }

    function changeMenuPadding() {
        $('header')[0].style.setProperty('padding-top', `${9-$(document).scrollTop()/40}px`);
        $('header')[0].style.setProperty('padding-bottom', `${9-$(document).scrollTop()/40}px`);
        $('.menu')[0].style.setProperty('margin-top', `${(-(9-$(document).scrollTop()/40)) < 0 ? (-(9-$(document).scrollTop()/40)) : 0}px`);
    }

    $(document).on('scroll', () => {
        swipeElements('.pre-title', 'swipe-left-text-first' );
        swipeElements('.carousel-title', 'swipe-left-text-second' );
        resizeLogo($(document).scrollTop());

        if ($(document).scrollTop() > 40) {

            $('.full-logo').addClass('d-none');
            $('.full-logo').removeClass('d-block');
            $('.full-logo').removeClass('hide');

            $('.medium-logo').removeClass('d-none');
            $('.medium-logo').addClass('d-block');

            changeMenuPadding();

        } else if ($(document).scrollTop() > 10) {
            $('header').addClass('shrink');

            changeMenuPadding();

            $('.medium-logo').removeClass('d-none');
            $('.medium-logo').addClass('d-block');

            $('.full-logo').addClass('hide');
            $('.full-logo').removeClass('d-block');
            $('.full-logo').removeClass('d-none');

        } else {
            $('header').removeClass('shrink');

            changeMenuPadding();

            $('.full-logo').addClass('d-block');
            $('.full-logo').removeClass('d-none');
            $('.full-logo').removeClass('hide');

            setTimeout(() => {
                $('.medium-logo').addClass('d-none');
                $('.medium-logo').removeClass('d-block');
            }, 500)
        }

    });

})();