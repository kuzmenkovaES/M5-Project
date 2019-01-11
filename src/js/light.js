'use strict';
(function reload() {
    //this is a sample flashlight effect

    let ELEMENTS = document.querySelectorAll(".rounded-circle-item.light");
    let ELEMENTS_PARENT = document.querySelectorAll(".menu-circle-box");
    const ELEMENTS_LIGHT = document.querySelector(".shadow-light");

    let rectangleHeight = ELEMENTS_PARENT[0].clientHeight;
    let rectangleWidth = ELEMENTS_PARENT[0].clientWidth;

    let s = Snap('#menu-circle');

    console.log(ELEMENTS_PARENT)

    window.addEventListener('resize', () => {
        ELEMENTS = document.querySelectorAll(".rounded-circle-item.light");
        ELEMENTS_PARENT = document.querySelectorAll(".menu-circle-box");

        rectangleHeight = ELEMENTS_PARENT[0].clientHeight;
        rectangleWidth = ELEMENTS_PARENT[0].clientWidth;

        searchForPanelSize(s);
    });

    searchForPanelSize(s);


    function searchForPanelSize(s) {
        s = Snap('#menu-circle');
        let group = s.group();

        let rectangle = s.rect(0, 0, rectangleWidth, rectangleHeight, 0, 0).attr({'fill':'rgb(53, 53, 52)', 'stroke':'rgb(53, 53, 52)'});
        group.append(s.rect(0, 0, rectangleWidth, rectangleHeight, 0, 0).attr({ fill: 'white'}));

        rectangle.attr({'mask':group});

        ELEMENTS_PARENT.forEach((elementParent, index) => {
            console.log(ELEMENTS)
            ELEMENTS.forEach((element, index) => {
                console.log(element.getBoundingClientRect())
                const topRound = element.getBoundingClientRect().bottom - (element.getBoundingClientRect().height/2);
                const leftRound = element.getBoundingClientRect().right - (element.getBoundingClientRect().width/2);

                const roundItemLightWidth = element.clientWidth;
                const roundItemLightHeight = element.clientHeight;
                const radius = roundItemLightWidth/1.98;

                s.circle(leftRound, topRound, radius).attr({'fill':'black', 'stroke':'rgb(53, 53, 52)'}).appendTo(group);

                ELEMENTS_LIGHT.style.height = `${2*roundItemLightHeight}px`;
                ELEMENTS_LIGHT.style.width = `${2*roundItemLightWidth}px`;

                elementParent.addEventListener("mousemove", event => {
                    $('.shadow-light').css({
                        "top": event.y - roundItemLightHeight,
                        "left": event.x - roundItemLightWidth
                    })
                });

                window.addEventListener('resize', () => {
                    const topRound = element.getBoundingClientRect().bottom - (element.getBoundingClientRect().height/2);
                    const leftRound = element.getBoundingClientRect().right - (element.getBoundingClientRect().width/2);

                    const roundItemLightWidth = element.clientWidth;
                    const roundItemLightHeight = element.clientHeight;
                    const radius = roundItemLightWidth/1.98;

                    s.circle(leftRound, topRound, radius).attr({'fill':'black', 'stroke':'rgb(53, 53, 52)'}).appendTo(group);

                    ELEMENTS_LIGHT.style.height = `${2*roundItemLightHeight}px`;
                    ELEMENTS_LIGHT.style.width = `${2*roundItemLightWidth}px`;

                    elementParent.addEventListener("mousemove", event => {
                        $('.shadow-light').css({
                            "top": event.y - roundItemLightHeight,
                            "left": event.x - roundItemLightWidth
                        })
                    });
                })

            });
        });
    }


    $('.navbar-toggler').on('click',() => {
        $('.mobile-menu-items').toggleClass('open');
    });

    //text animation

})();