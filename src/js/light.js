(function reload() {
    //this is a sample flashlight effect

    const ELEMENTS = document.querySelectorAll(".rounded-circle-item");
    const ELEMENTS_SPAN = [];
    let heightNavLink;
    let widthNavLink;

    ELEMENTS.forEach((element, index) => {
        // console.log(element)
        // heightNavLink = element.querySelector("a").clientHeight;
        // widthNavLink = element.querySelector("a").clientWidth;

        // If The span element for this element does not exist in the array, add it.
        // if (!ELEMENTS_SPAN[index]){
        //     ELEMENTS_SPAN[index] = element.querySelector("span");
        //     ELEMENTS_SPAN[index].style.height = `${heightNavLink}px`;
        //     // ELEMENTS_SPAN[index].style.width = `${widthNavLink}px`;
        // }

        element.addEventListener("mouseover", event => {
            // console.log(event)
            // console.log(element)
            // const left =  (event.pageX - element.offsetLeft);
            // ELEMENTS_SPAN[index].style.left = `${left}px`;
        });

        element.addEventListener("mouseout", event => {
            // console.log(event)
            // ELEMENTS_SPAN[index].style.left = event.pageX - element.offsetLeft + "px";
        });
    });

})();