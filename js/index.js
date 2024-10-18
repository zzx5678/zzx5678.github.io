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
        })
        .catch(error => {
            console.error('페이지 로드 실패:', error);
            content_wrapper.innerHTML = '<p>페이지 로드에 실패했습니다. 다시 시도해주세요.</p>';
        });
}