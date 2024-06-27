document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item > .menu-link');
    const submenuLinks = document.querySelectorAll('.submenu-link');
    const contentArea = document.getElementById('content-area');
    let currentIndex = 0;
    let timer;

    menuItems.forEach(item => {
        const symbol = document.createElement('span');
        symbol.className = 'menu-toggle';
        symbol.textContent = '>'; // 初始为'>'
        item.appendChild(symbol);

        item.addEventListener('click', function (e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
                symbol.textContent = '>';
            } else {
                submenu.style.display = 'block';
                symbol.textContent = '∨';
            }
        });

        symbol.addEventListener('mouseenter', function () {
            this.classList.add('circle');
        });

        symbol.addEventListener('mouseleave', function () {
            this.classList.remove('circle');
        });
    });

    function generateContent(title, content1List, content1Text, content2, images) {
        const listItems = content1List.split(',').map(item => `<li>${item}</li>`).join('');
        const points = content2.split(',').map(point => `<li>${point}</li>`).join('');

        contentArea.innerHTML = `
            <h2>${title}</h2>
            <h3>课程简介</h3>
            <ul>${listItems}</ul>
            <p>${content1Text}</p>
            <h3>课程资源</h3>
            <ul>${points}</ul>
        `;
    }

    submenuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const title = this.dataset.title;
            const content1List = this.dataset.content1List;
            const content1Text = this.dataset.content1Text;
            const content2 = this.dataset.content2;
            const images = this.dataset.images;

            generateContent(title, content1List, content1Text, content2, images);
        });
    });

    if (submenuLinks.length > 0) {
        submenuLinks[0].click();
    }

    document.querySelectorAll('.submenu').forEach(submenu => {
        submenu.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const itemHeight = items[0].offsetHeight;
    let currentIndex = 0;

    function showItems() {
        carousel.style.transform = `translateY(-${currentIndex * itemHeight}px)`;
    }

    function next() {
        currentIndex = (currentIndex + 2) % items.length;
        showItems();
    }

    function prev() {
        currentIndex = (currentIndex - 2 + items.length) % items.length;
        showItems();
    }

    nextButton.addEventListener('click', next);
    prevButton.addEventListener('click', prev);

    let autoScroll = setInterval(next, 3000);

    carousel.addEventListener('mouseover', () => clearInterval(autoScroll));
    carousel.addEventListener('mouseout', () => autoScroll = setInterval(next, 3000));
});
