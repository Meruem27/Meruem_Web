document.addEventListener('DOMContentLoaded', function() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    const sphereItems = document.querySelectorAll('.sphere-item');

    function resetSpheres() {
        sphereItems.forEach(item => {
            item.classList.remove('expanded');
        });
    }

    sphereItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.stopPropagation();
            resetSpheres();
            item.classList.add('expanded');
        });
    });

    document.addEventListener('click', function() {
        resetSpheres();
    });
});
