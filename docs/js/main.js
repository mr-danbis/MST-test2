function adjustVideoPositions() {
    document.querySelectorAll('.video-background').forEach(container => {
        const rect = container.getBoundingClientRect();

        const offsetLeft = rect.left + window.pageXOffset;
        const offsetTop = rect.top + window.pageYOffset;

        const video = container.querySelector('.myVideo');
        if (video) {
            // Смещаем видео , чтобы его (0,0) совпадало с (0,0) body
            video.style.transform = `translate(${-offsetLeft}px, ${-offsetTop}px)`;
        }
    });
}


window.addEventListener('load', adjustVideoPositions);
window.addEventListener('resize', adjustVideoPositions);
window.addEventListener('scroll', adjustVideoPositions);