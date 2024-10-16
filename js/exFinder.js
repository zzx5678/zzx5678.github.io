document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nextBtn')?.addEventListener('click', function() {
        document.body.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            window.location.href = 'html/exFinder2.html'; // 경로가 맞는지 확인
        }, 500);
    });

    document.getElementById('prevBtn')?.addEventListener('click', function() {
        document.body.style.transform = 'translateX(100%)';
        setTimeout(() => {
            window.history.back();
        }, 500);
    });
});