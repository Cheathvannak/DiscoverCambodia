/* Common JavaScript for all pages */
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navItems = document.querySelector('.nav-items');
    const contactUsLink = document.querySelector('.nav-items a[href="#contact"]');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navItems.classList.toggle('active');
        });
    }

    // Close the menu when "Contact Us" is clicked
    if (contactUsLink) {
        contactUsLink.addEventListener('click', () => {
            navItems.classList.remove('active');
        });
    }
});
