let intro = document.getElementById('intro');
let header = document.getElementById('header');
let introH = intro.offsetHeight;
let scrollOffset = 0;

/*Fixed Header*/

function showHeader() {
    let scrollOffset = window.pageYOffset
    if (scrollOffset >= introH) {
        header.setAttribute('class', 'header fixed');
    } else {
        header.setAttribute('class', 'header');
    }
}

document.addEventListener("DOMContentLoaded", showHeader);
window.addEventListener("scroll", showHeader);

/*Smooth scroll */

let dataScroll = document.querySelectorAll('[data-scroll]')
let blockOffset = 0;

for (let prop of dataScroll) {

    prop.addEventListener("click", function (event) {
        event.preventDefault();
        let blockID = prop.getAttribute('data-scroll');
        let block = document.getElementById(blockID);
        blockOffset = block.offsetTop;

        window.scroll({
            left: 0,
            top: blockOffset,
            behavior: "smooth"
        })
    });

    /* selecting an active link in header*/

    prop.addEventListener("click", function (event) {
        for (let prop of dataScroll) {
            prop.classList.remove("active")
        }
        prop.classList.add("active")
    });

}

/*Menu Nav Toggle*/

let navToggle = document.getElementById(['nav-toggle']);
let nav = document.querySelector('.nav')

navToggle.addEventListener("click", function (event) {
    event.preventDefault();
    nav.classList.toggle("active");
    navToggle.classList.toggle("active");
})

/*Collapse*/

let collapseElements = document.querySelectorAll('.accordion__item')

for (let elem of collapseElements) {

    elem.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active')
        } else {
            for (let item of collapseElements) {
                item.classList.remove('active')
            }
            this.classList.add('active')
        }
    })
}


/*Slider*/

let next = document.querySelector('.revievs__btn--next')
let back = document.querySelector('.revievs__btn--prev')
let galery = document.querySelector('.galery')
let left = 0;
let count = 1;


function clickNext(event) {
    event.preventDefault();
    let width = document.querySelector('.revievs__item').offsetWidth

    if (left > -width * 3) {
        left = left - width;
        galery.style.left = left + 'px';
        console.log(left)
    } else {

        left = 0
        galery.style.left = left + 'px';
    }

}

function clickBack(event) {
    event.preventDefault();
    let width = document.querySelector('.revievs__item').offsetWidth
    if (left < 0) {
        left = left + width;
        galery.style.left = left + 'px';
        console.log(left)
    } else {
        left = -width*3
        galery.style.left = left + 'px';
    }

}

/*window.addEventListener('resize', clickNext);*/
next.addEventListener('click', clickNext);
back.addEventListener('click', clickBack);

