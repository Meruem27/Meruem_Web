document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const flipCards = document.querySelectorAll('.flip-card');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    function handleCardClick(event) {
        event.stopPropagation();
        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
        } else {
            cards.forEach(card => card.classList.remove('selected'));
            this.classList.add('selected');
        }
    }

    function handleFlipCardClick(event) {
        event.stopPropagation();
        if (this.classList.contains('show-back')) {
            this.classList.remove('show-back');
        } else {
            flipCards.forEach(flipCard => flipCard.classList.remove('show-back'));
            this.classList.add('show-back');
        }
    }

    function handleDocumentClick() {
        cards.forEach(card => card.classList.remove('selected'));
        flipCards.forEach(flipCard => flipCard.classList.remove('show-back'));
    }

    function handleSearch() {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';

        if (query) {
            cards.forEach(card => {
                const title = card.dataset.title.toLowerCase();
                if (title.includes(query)) {
                    const resultItem = document.createElement('div');
                    resultItem.textContent = title;
                    resultItem.classList.add('highlight');
                    resultItem.addEventListener('click', () => {
                        card.scrollIntoView({ behavior: 'smooth' });
                        cards.forEach(c => c.classList.remove('selected'));
                        card.classList.add('selected');
                    });
                    searchResults.appendChild(resultItem);
                }
            });
        }
    }

    function handleScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        animateOnScrollElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    cards.forEach(card => {
        card.addEventListener('click', handleCardClick);
    });

    flipCards.forEach(flipCard => {
        flipCard.addEventListener('click', handleFlipCardClick);
    });

    document.addEventListener('click', handleDocumentClick);

    searchButton.addEventListener('click', handleSearch);

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
