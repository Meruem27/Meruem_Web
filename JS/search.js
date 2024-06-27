document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value.trim();
    const resultsContainer = document.getElementById('search-results-container');

    if (searchInput === "") {
        resultsContainer.style.display = 'none';
        return;
    }

    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(element => {
        element.outerHTML = element.innerText;
    });

    resultsContainer.innerHTML = '';

    const regex = new RegExp(searchInput, 'gi');
    let found = false;
    const textNodes = [];

    function getTextNodes(node) {
        if (node.nodeType === 3 && regex.test(node.nodeValue)) {
            textNodes.push(node);
        } else {
            node.childNodes.forEach(child => getTextNodes(child));
        }
    }

    getTextNodes(document.body);

    textNodes.forEach(node => {
        found = true;
        const span = document.createElement('span');
        span.innerHTML = node.nodeValue.replace(regex, match => `<span class="highlight">${match}</span>`);
        node.parentNode.replaceChild(span, node);
    });

    if (found) {
        resultsContainer.style.display = 'block';
        document.querySelectorAll('.highlight').forEach((highlighted, index) => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';

            const contextLength = 20;
            const text = highlighted.parentNode.innerText;
            const startIndex = Math.max(0, text.indexOf(highlighted.innerText) - contextLength);
            const endIndex = Math.min(text.length, text.indexOf(highlighted.innerText) + highlighted.innerText.length + contextLength);
            const context = text.substring(startIndex, endIndex);

            const highlightedContext = context.replace(regex, match => `<span class="highlight">${match}</span>`);
            resultItem.innerHTML = highlightedContext;

            resultItem.addEventListener('click', () => {
                highlighted.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.style.display = 'none';
        alert('目前搜索不到相关信息');
    }
});
