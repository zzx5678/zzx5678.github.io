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
            // 'ex_3.html'이 로드되었을 때만 
            if (url === 'html/exFinder/ex_3.html') {
                exFinder_sub_load('html/exFinder/sub/sub_1.html')
            }
        })
        .catch(error => {
            console.error('페이지 로드 실패:', error);
            content_wrapper.innerHTML = '<p>페이지 로드에 실패했습니다. 다시 시도해주세요.</p>';
        });
}

function exFinder_sub_load(url) {
    const content_wrapper = document.getElementById('exFinder_sub_load');

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('네트워크 오류 발생: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            content_wrapper.innerHTML = data;  // 로드된 HTML 내용을 content_wrapper에 삽입
        })
        .catch(error => {
            console.error('페이지 로드 실패:', error);
            content_wrapper.innerHTML = '<p>페이지 로드에 실패했습니다. 다시 시도해주세요.</p>';
        });
}