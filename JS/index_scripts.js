// 导航条切换文字显示
document.querySelectorAll('.text-nav-button').forEach(button => {
    button.addEventListener('click', () => {
        // 移除所有按钮的 active 类
        document.querySelectorAll('.text-nav-button').forEach(btn => btn.classList.remove('active'));
        // 当前按钮添加 active 类
        button.classList.add('active');
        
        // 隐藏所有文本项
        document.querySelectorAll('.text-item').forEach(item => item.classList.remove('active'));
        // 显示目标文本项
        document.querySelector(button.dataset.target).classList.add('active');
        
        // 更新下划线的宽度和位置
        const underline = document.querySelector('.underline');
        underline.style.width = `${button.offsetWidth}px`;
        underline.style.left = `${button.offsetLeft}px`;
    });
});

// 查看更多按钮
document.addEventListener('DOMContentLoaded', () => {
    const loadMoreButton = document.querySelector('.load-more');
    const hiddenItems = document.querySelectorAll('.grid-item.hidden');
    let isExpanded = false;

    loadMoreButton.addEventListener('click', () => {
        if (!isExpanded) {
            // 显示隐藏项
            hiddenItems.forEach(item => item.classList.remove('hidden'));
            loadMoreButton.textContent = '折叠显示';
            // 添加类以调整样式
            document.querySelector('.section3').classList.add('expanded');
        } else {
            // 隐藏项
            hiddenItems.forEach(item => item.classList.add('hidden'));
            loadMoreButton.textContent = '显示更多';
            // 移除类以恢复初始样式
            document.querySelector('.section3').classList.remove('expanded');
        }
        isExpanded = !isExpanded;
    });
});
