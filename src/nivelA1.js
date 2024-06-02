const accordionItemHeaders = document.querySelectorAll(".acordeon-item-header");

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

const myCarouselElement = document.querySelector("#myCarousel");

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false,
});

const myCarouselElement1 = document.querySelector("#myCarousel1");

const carousel1 = new bootstrap.Carousel(myCarouselElement1, {
  interval: 2000,
  touch: false,
});

const myCarouselElement2 = document.querySelector("#myCarousel2");

const carousel2 = new bootstrap.Carousel(myCarouselElement2, {
  interval: 2000,
  touch: false,
});

const myCarouselElement3 = document.querySelector("#myCarousel3");

const carousel3 = new bootstrap.Carousel(myCarouselElement3, {
  interval: 2000,
  touch: false,
});

const myCarouselElement4 = document.querySelector("#myCarousel4");

const carousel4 = new bootstrap.Carousel(myCarouselElement4, {
  interval: 2000,
  touch: false,
});

const myCarouselElement5 = document.querySelector("#myCarousel5");

const carousel5 = new bootstrap.Carousel(myCarouselElement5, {
  interval: 2000,
  touch: false,
});

const myCarouselElement6 = document.querySelector("#myCarousel6");

const carousel6 = new bootstrap.Carousel(myCarouselElement6, {
  interval: 2000,
  touch: false,
});

const myCarouselElement7 = document.querySelector("#myCarousel7");

const carousel7 = new bootstrap.Carousel(myCarouselElement7, {
  interval: 2000,
  touch: false,
});
