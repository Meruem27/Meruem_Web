document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.history-image');
    const scaleFactor = 1.5;

    images.forEach(image => {
        image.addEventListener('mouseover', (event) => {
            const { left, top } = image.getBoundingClientRect();
            const x = event.clientX - left;
            const y = event.clientY - top;
            image.style.transformOrigin = `${x}px ${y}px`;
            image.style.transform = `scale(${scaleFactor})`;
        });

        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom - 250 <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScrollAnimation = () => {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('show');
            }
        });
    };

    const handleLoadAnimation = () => {
        const mainElement = document.querySelector('main');
        const items = document.querySelectorAll('.grid-item');

        mainElement.classList.add('show');
        items.forEach(item => {
            item.classList.add('show');
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('load', handleLoadAnimation);
});
