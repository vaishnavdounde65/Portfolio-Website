document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.custom-navbar');
    const homeSection = document.getElementById('home');
    let lastScrollPosition = 0;
    const homeHeight = homeSection.offsetHeight;

    window.addEventListener('scroll', function() {
        const currentScrollPosition = window.scrollY;
        
        // Show navbar only when in home section or scrolling up
        if (currentScrollPosition <= homeHeight || currentScrollPosition < lastScrollPosition) {
            navbar.classList.remove('hidden');
        } else {
            navbar.classList.add('hidden');
        }
        
        lastScrollPosition = currentScrollPosition;
    });
});




// JS FOR IMAGE 
document.querySelector('.home-image-container').addEventListener('click', function() {
    this.classList.toggle('clicked');
});