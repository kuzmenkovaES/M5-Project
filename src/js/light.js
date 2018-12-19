'use strict';
(function reload() {
    //this is a sample flashlight effect

    const ELEMENTS = document.querySelectorAll(".menu-circle-item");
    const ELEMENTS_SPAN = [];
    let heightNavLink;
    let widthNavLink;

    ELEMENTS.forEach((element, index) => {
        const childElemennt = element.querySelectorAll(".rounded-circle-item.text");

        if(childElemennt[0]) {
            heightNavLink = childElemennt[0].offsetHeight;
            widthNavLink = childElemennt[0].offsetWidth;

            window.addEventListener('resize', () => {
                heightNavLink = childElemennt[0].offsetWidth;
                widthNavLink = childElemennt[0].offsetWidth;
                ELEMENTS_SPAN[index].style.height = `${heightNavLink}px`;
                ELEMENTS_SPAN[index].style.width = `${widthNavLink}px`;
            });

            if (!ELEMENTS_SPAN[index]){
                ELEMENTS_SPAN[index] = element.querySelector(".shadow-light");
                ELEMENTS_SPAN[index].style.height = `${heightNavLink}px`;
                ELEMENTS_SPAN[index].style.width = `${widthNavLink}px`;
            }

            element.addEventListener("mousemove", event => {
                let left = event.offsetX - widthNavLink/4;
                ELEMENTS_SPAN[ index ].style.left = `${0}px`;

                if (ELEMENTS_SPAN[ index - 1 ]) {
                    ELEMENTS_SPAN[ index - 1 ].classList.add("shadow-light-half-right");
                    ELEMENTS_SPAN[ index - 1 ].style.left = `${left+10}px`;
                }

                if (ELEMENTS_SPAN[ index + 1 ]) {
                    ELEMENTS_SPAN[ index + 1 ].classList.add("shadow-light-half-left");
                    ELEMENTS_SPAN[ index + 1 ].style.left = `${left+10}px`;
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
        }
    });

    $('.navbar-toggler').on('click',() => {
        $('.mobile-menu-items').toggleClass('open');
    });

    //text animation

})();