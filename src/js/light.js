'use strict';
(function reload() {
    //this is a sample flashlight effect

    const ELEMENTS = document.querySelectorAll(".rounded-circle-item.text");
    const ELEMENTS_SPAN = [];
    let heightNavLink;
    let widthNavLink;

    ELEMENTS.forEach((element, index) => {
        heightNavLink = element.clientHeight;
        widthNavLink = element.clientWidth;

        window.addEventListener('resize', () => {
            heightNavLink = element.clientHeight;
            widthNavLink = element.clientWidth;
            ELEMENTS_SPAN[index].style.height = `${heightNavLink}px`;
            ELEMENTS_SPAN[index].style.width = `${widthNavLink}px`;
        });

        // If The span element for this element does not exist in the array, add it.
        if (!ELEMENTS_SPAN[index]){
            ELEMENTS_SPAN[index] = element.querySelector(".shadow-light");
            ELEMENTS_SPAN[index].style.height = `${heightNavLink}px`;
            ELEMENTS_SPAN[index].style.width = `${widthNavLink}px`;
        }

        element.addEventListener("mousemove", event => {
            if (ELEMENTS_SPAN[ index - 1 ]) {
                ELEMENTS_SPAN[ index - 1 ].classList.add("shadow-light-half-right");
            }

            if (ELEMENTS_SPAN[ index + 1 ]) {
                ELEMENTS_SPAN[ index + 1 ].classList.add("shadow-light-half-left");
            }
        });

        element.addEventListener("mouseout", event => {
            if (ELEMENTS_SPAN[ index - 1 ]) {
                ELEMENTS_SPAN[ index - 1 ].classList.remove("shadow-light-half-right")
            }

            if (ELEMENTS_SPAN[ index + 1 ]) {
                ELEMENTS_SPAN[ index + 1 ].classList.remove("shadow-light-half-left");
            }
        });
    });

    $('.navbar-toggler').on('click',() => {
        $('.mobile-menu-items').toggleClass('open');
    });

    //text animation

})();