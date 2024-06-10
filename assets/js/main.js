// <!-- DEAR PROFESSOR, IF YOU ARE READING THIS, I AM SORRY, THIS CODE HAS A LOT OF TRASH CODES THAT DOESNT MAKE IT TO THE FINAL -->
// <!-- DRAFT. FOR YOUR CONVENIENCE, ALL OF THE CODES HAVE BEEN BEAUTIFIED FOR EASY READING. ALSO HALFWAY OF DOING THIS, I JUST -->
// <!-- REALIZED THAT IMG SOURCES THAT ARE PUT INSIDE CSS FILES CANNOT BE ON TOP OF THE DIRECTORY OF THE CSS FILE. -->
// <!-- I WILL USE A BETTER HABIT NEXT TIME. 22229515 BENEDICTUS SEBASTIAN AP "CONRADIUM"-->
/*=============== SHOW MENU ===============*/
const headerToggle = document.getElementById('header-toggle'),
    main = document.getElementById('main'),
    navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
if (headerToggle) {
    headerToggle.addEventListener('click', () => {
        main.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        main.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const main = document.getElementById('main')
    // When we click on each nav__link, we remove the show-menu class
    main.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
let currentSectionIndex = 0
const sectionIds = ['home', 'reviews', 'about']
const sections = []
sectionIds.forEach(id => {
    const section = document.querySelector(`section[id="${id}"]`)
    if (section) sections.push(section)
})
window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        currentSectionIndex++
        if (currentSectionIndex >= sections.length) {
            currentSectionIndex = sections.length - 1
        }
    }
    else {
        currentSectionIndex--
        if (currentSectionIndex < 0) {
            currentSectionIndex = 0
        }
    }
    sections.forEach((section, index) => {
        if (index === currentSectionIndex) {
            section.classList.add('active')
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            })
        }
        else {
            section.classList.remove('active')
        }
    })
})
/*=============== index Logo ANIMATION ===============*/
const logoImage = document.querySelector('.logo_image');
const conceptQuote = document.querySelector('.concept-quote');
window.addEventListener('load', () => {
    setTimeout(() => {
        conceptQuote.classList.add('show');
        logoImage.classList.add('pushed');
    }, 500); // adjust the delay to your liking
});
/*=============== REVIEWS ===============*/
$(".review-user").hover(function() {
    var $this = $(this);
    var userId = $this.data('user-id');
    var $userData = $this.next('.user-data');
    $.get("/user/data/" + userId, function(userData) {
        $userData.find('.profile-username').text(userData.username);
        $userData.find('.profile-reviews').text(userData.reviews + 'eviews');
    });
    $userData.show();
}, function() {
    $(this).next('.user-data').hide();
});