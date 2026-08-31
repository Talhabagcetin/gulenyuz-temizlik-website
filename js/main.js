/**
 * Gülen Yüz Temizlik - Global JavaScript (main.js)
 * Handles mobile hamburger drawer menu, smooth transitions, and interactivity.
 */

document.addEventListener('DOMContentLoaded', function () {
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const mobileNavDrawer = document.getElementById('mobileNavDrawer');
    const mobileDrawerBackdrop = document.getElementById('mobileDrawerBackdrop');
    const mobileDrawerClose = document.getElementById('mobileDrawerClose');
    const drawerLinks = document.querySelectorAll('.mobile-drawer-nav a');

    function openMobileMenu() {
        if (mobileNavDrawer && mobileDrawerBackdrop) {
            mobileNavDrawer.classList.add('open');
            mobileDrawerBackdrop.classList.add('active');
            if (mobileNavToggle) mobileNavToggle.classList.add('active');
            document.body.classList.add('mobile-menu-active');
        }
    }

    function closeMobileMenu() {
        if (mobileNavDrawer && mobileDrawerBackdrop) {
            mobileNavDrawer.classList.remove('open');
            mobileDrawerBackdrop.classList.remove('active');
            if (mobileNavToggle) mobileNavToggle.classList.remove('active');
            document.body.classList.remove('mobile-menu-active');
        }
    }

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function (e) {
            e.preventDefault();
            if (mobileNavDrawer.classList.contains('open')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    if (mobileDrawerClose) {
        mobileDrawerClose.addEventListener('click', function (e) {
            e.preventDefault();
            closeMobileMenu();
        });
    }

    if (mobileDrawerBackdrop) {
        mobileDrawerBackdrop.addEventListener('click', function () {
            closeMobileMenu();
        });
    }

    // Close when clicking any drawer nav link
    drawerLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            closeMobileMenu();
        });
    });

    // Close on Escape key press
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileNavDrawer && mobileNavDrawer.classList.contains('open')) {
            closeMobileMenu();
        }
    });
});
