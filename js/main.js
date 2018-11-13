// EYE JS
"use strict";
// make background image full height on load
$(document).ready(function() {
    // if ($(window).width() > 767) {
    $('.header').height($(window).height());
    // var windowHeight = $(window).height();
    // }
});


// Set classes for navbar for mobile
$(document).ready(function() {
    if ($(window).width() <= 767) {
        $(".navbar-toggler").removeClass("large-navbar-toggler").addClass("small-navbar-toggler");
        $(".dcd-nav-logo").removeClass("large-dcd-nav-logo").addClass("small-dcd-nav-logo");
        $(".navbar").removeClass("large-dark-navbar").addClass("small-dark-navbar");
    }
});


// change size of navbar on scroll on Desktop
$(document).on("scroll", function() {
    if ($(window).width() > 767) {
        if ($(document).scrollTop() > 180) {
            $(".navbar-toggler").removeClass("large-navbar-toggler").addClass("small-navbar-toggler");
            $(".dcd-nav-logo").removeClass("large-dcd-nav-logo").addClass("small-dcd-nav-logo");
            $(".navbar").removeClass("large-dark-navbar").addClass("small-dark-navbar");
        } else {
            $(".navbar-toggler").removeClass("small-navbar-toggler").addClass("large-navbar-toggler");
            $(".dcd-nav-logo").removeClass("small-dcd-nav-logo").addClass("large-dcd-nav-logo");
            $(".navbar").removeClass("small-dark-navbar").addClass("large-dark-navbar");
        }
    }
});


// parallax window - http://pixelcog.github.io/parallax.js/
// HOME PAGE
$(document).ready(function() {
    if ($(window).width() > 767) {
        $('.header').parallax({
            imageSrc: '/images/eyeball3.jpg'
            // position: '0px 0px'
            // speed: '0.6'
        });
    } else { return }
    //SECOND SECTION PARALLAX
    if ($(window).width() > 767) {
        $('#med-cos-derm-section').parallax({
            imageSrc: '/images/eyeball1.jpg'
            // position: '0px 0px',
            // speed: '0.6'
        });
    } else { return }

    //Content pages
    if ($(window).width() > 767) {
        $('.content-header').parallax({
            imageSrc: '/images/eyeball3.jpg'
        });
    } else { return }
});




// Hamburger menu
$(document).ready(function() {
    $(".navbar-toggler").click(function() {
        $(".hamburger").toggleClass("is-active");
        console.log("hi");
    });
});




// Back to top Button
var amountScrolled = 200;
// var amountScrolledNav = 25;

$(window).scroll(function() {
    if ($(window).scrollTop() > amountScrolled) {
        $('button.back-to-top').addClass('show');
    } else {
        $('button.back-to-top').removeClass('show');
    }
});

$('button.back-to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});

// Waves effect to buttons - http://fian.my.id/Waves/
Waves.attach('button.back-to-top', 'waves-float');
Waves.init();



// Full Screen Navbar
//
(function() {

    var Menu = (function() {
        var burger = document.querySelector('.burger');
        var menu = document.querySelector('.menu');
        var menuList = document.querySelector('.menu__list');
        var brand = document.querySelector('.menu__brand');
        var menuItems = document.querySelectorAll('.menu__item');

        var menuLogo = document.querySelector('.dcd-nav-logo');

        var active = false;

        var toggleMenu = function() {
            if (!active) {
                // menuLogo.classList.add('hideLogo');

                menu.classList.add('menu--active');
                menuList.classList.add('menu__list--active');
                brand.classList.add('menu__brand--active');
                burger.classList.add('burger--close');
                for (var i = 0, ii = menuItems.length; i < ii; i++) {
                    menuItems[i].classList.add('menu__item--active');
                }
                active = true;
            } else {
                // menuLogo.classList.remove('hideLogo');

                menu.classList.remove('menu--active');
                menuList.classList.remove('menu__list--active');
                brand.classList.remove('menu__brand--active');
                burger.classList.remove('burger--close');
                for (var i = 0, ii = menuItems.length; i < ii; i++) {
                    menuItems[i].classList.remove('menu__item--active');
                }
                active = false;
            }
        };

        var bindActions = function() {
            burger.addEventListener('click', toggleMenu, false);
        };

        var init = function() {
            bindActions();
        };

        return {
            init: init
        };

    }());

    Menu.init();

}());
