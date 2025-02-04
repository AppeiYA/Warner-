window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 10) { // Change 50 to the desired scroll threshold
        header.classList.remove('transparent-header');
        header.classList.add('solid-header');
    } else {
        header.classList.remove('solid-header');
        header.classList.add('transparent-header');
    }
});