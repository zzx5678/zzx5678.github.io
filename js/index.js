function loadContent(url) {
    const content_wrapper = document.getElementById('content_wrapper');
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('네트워크 오류 발생: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            content_wrapper.innerHTML = data;  // 로드된 HTML 내용을 content_wrapper에 삽입

            // 'ex_2.html'이 로드되었을 때만 슬라이드 초기화 함수 호출
            if (url === 'html/exFinder/ex_2.html') {
                initializeSlide();
            }
        })
        .catch(error => {
            console.error('페이지 로드 실패:', error);
            content_wrapper.innerHTML = '<p>페이지 로드에 실패했습니다. 다시 시도해주세요.</p>';
        });
}

// 페이지가 로드되면 기본 화면 로드
/*
window.addEventListener('load', function () {
    console.log("기본 페이지를 로드합니다.");
    loadContent('html/first_page.html');
});
*/
