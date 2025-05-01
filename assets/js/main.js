// Header Menu Active
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    const navLinks = document.querySelectorAll('.primary-menu .nav li a');
    navLinks.forEach(link => link.classList.remove('on-active'));

    const currentMenuItem = document.querySelector('.primary-menu .nav li.current-menu-item > a');
    if (currentMenuItem) {
        currentMenuItem.classList.add('on-active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            navLinks.forEach(link => link.classList.remove('on-active'));
            this.classList.add('on-active');
        });
    });

    const hamburgerBtn = document.querySelector('#hamburger-btn');
    const hamburgerIcons = document.querySelectorAll('.hamburger-icon');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function () {
            hamburgerIcons.forEach((icon, index) => {
                icon.classList.toggle('is-active');
            });

            mobileMenu.classList.toggle('open');
        });
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggles a');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});




// Portfolio Filtering
// jQuery('.toggles button, .side-bar button').click(function () {
//     const categoryId = jQuery(this).attr('id');
//     const relevantItems = jQuery('.covers.' + categoryId);

//     jQuery('.covers').not(relevantItems).hide(500);s
//     relevantItems.show(500);
// });

// jQuery('#showall').click(function () {
//     jQuery('.covers').show(500);
// });


// Load More Button
document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('#model-container .covers'); // All model items
    const loadMoreBtn = document.getElementById('load-more');
    let visibleItems = 2; // Number of initially visible items

    // Hide all items except the first two
    items.forEach((item, index) => {
        if (index >= visibleItems) {
            item.style.display = 'none';
        }
    });

    // Load More functionality
    loadMoreBtn.addEventListener('click', () => {
        let hiddenItems = 0;
        items.forEach((item, index) => {
            if (index >= visibleItems && hiddenItems < 2) {
                item.style.display = 'block'; // Reveal the hidden item
                hiddenItems++;
            }
        });
        visibleItems += 2;

        // If all items are visible, hide the "Load More" button
        if (visibleItems >= items.length) {
            loadMoreBtn.style.display = 'none';
        }
    });
});










