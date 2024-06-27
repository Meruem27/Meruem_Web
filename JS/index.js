document.querySelectorAll('.text-nav-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.text-nav-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        document.querySelectorAll('.text-item').forEach(item => item.classList.remove('active'));
        document.querySelector(button.dataset.target).classList.add('active');
        const underline = document.querySelector('.underline');
        underline.style.width = `${button.offsetWidth}px`;
        underline.style.left = `${button.offsetLeft}px`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loadMoreButton = document.querySelector('.load-more');
    const hiddenItems = document.querySelectorAll('.grid-item.hidden');
    let isExpanded = false;

    loadMoreButton.addEventListener('click', () => {
        if (!isExpanded) {
            hiddenItems.forEach(item => item.classList.remove('hidden'));
            loadMoreButton.textContent = '折叠显示';
            document.querySelector('.section3').classList.add('expanded');
        } else {
            hiddenItems.forEach(item => item.classList.add('hidden'));
            loadMoreButton.textContent = '显示更多';
            document.querySelector('.section3').classList.remove('expanded');
        }
        isExpanded = !isExpanded;
    });
});
