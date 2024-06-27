document.addEventListener('DOMContentLoaded', () => {
    const toggleSkinButton = document.getElementById('toggle-skin');
    const body = document.body;
    const nightModeClass = 'night-mode';
    const themeKey = 'theme';
    const dayIcon = 'Image/sun.svg';
    const nightIcon = 'Image/moon.svg';

    const setTheme = (theme) => {
        if (theme === 'night') {
            body.classList.add(nightModeClass);
            toggleSkinButton.src = nightIcon;
        } else {
            body.classList.remove(nightModeClass);
            toggleSkinButton.src = dayIcon;
        }
        localStorage.setItem(themeKey, theme);
    };

    const savedTheme = localStorage.getItem(themeKey);
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('day');
    }

    toggleSkinButton.addEventListener('click', () => {
        const newTheme = body.classList.contains(nightModeClass) ? 'day' : 'night';
        setTheme(newTheme);
    });
});
