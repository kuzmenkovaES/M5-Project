(function reload() {
    const ELEMENTS = document.querySelectorAll(".HOVER");
    const ELEMENTS_SPAN = [];
    let heightNavLink;
    let widthNavLink;

    ELEMENTS.forEach((element, index) => {
        heightNavLink = element.querySelector("a").clientHeight;
        widthNavLink = element.querySelector("a").clientWidth;

        // If The span element for this element does not exist in the array, add it.
        if (!ELEMENTS_SPAN[index]){
            ELEMENTS_SPAN[index] = element.querySelector("span");
            ELEMENTS_SPAN[index].style.height = `${heightNavLink}px`;
            ELEMENTS_SPAN[index].style.width = `${widthNavLink}px`;
        }

        element.addEventListener("mousemove", event => {
            // console.log(event)
            let left = event.offsetX - widthNavLink/2;
            ELEMENTS_SPAN[index].style.left = `${left}px`;
        });

        // element.addEventListener("mouseover", event => {
        //     console.log(event)
        //     console.log(element)
        //     const left =  (event.pageX - element.offsetLeft);
        //     ELEMENTS_SPAN[index].style.left = `${event.clientX}px`;
        // });
        //
        // element.addEventListener("mouseout", event => {
        //     ELEMENTS_SPAN[index].style.left = event.pageX - element.offsetLeft + "px";
        // });
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