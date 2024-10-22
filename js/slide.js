// 슬라이드 초기화 함수
function initializeSlide() {
    let currentIndex = 0; // 현재 이미지 인덱스
    const totalImages = 5; // 총 이미지 수
    let slideInterval; // 슬라이드의 인터벌 ID
    let isRunning = true; // 슬라이드 동작 여부 상태

    // 인디케이터 요소를 생성하는 함수
    function createIndicators() {
        const indicatorsContainer = document.getElementById('slideIndicators');
        for (let i = 0; i < totalImages; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            indicator.addEventListener('click', () => goToSlide(i)); // 인디케이터 클릭 시 해당 슬라이드로 이동
            indicatorsContainer.appendChild(indicator);
        }
        updateIndicators(); // 초기 인디케이터 상태 업데이트
    }

    // 인디케이터 상태 업데이트 함수
    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active'); // 활성화된 인디케이터
            } else {
                indicator.classList.remove('active'); // 비활성화된 인디케이터
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages; // 다음 이미지 인덱스 계산
        updateSlide();
        updateIndicators(); // 인디케이터 업데이트
        console.log(`현재 슬라이드 인덱스: ${currentIndex}`); // 콘솔에 인덱스 출력
    }

    function goToSlide(index) {
        currentIndex = index; // 인디케이터 클릭 시 해당 슬라이드로 이동
        updateSlide();
        updateIndicators(); // 인디케이터 업데이트
    }

    function updateSlide() {
        const container = document.getElementById('exFinderRightContainer');
        if (container) { // null 체크 추가
            const slideWidth = container.clientWidth; // 컨테이너의 너비 계산
            container.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // 슬라이드 이동
        } else {
            console.error("exFinderRightContainer를 찾을 수 없습니다.");
        }
    }

    function startSlide() {
        slideInterval = setInterval(nextSlide, 3000);
        console.log("슬라이드가 시작되었습니다.");
        isRunning = true;
    }

    function stopSlide() {
        clearInterval(slideInterval);
        console.log("슬라이드가 멈췄습니다.");
        isRunning = false;
    }

    function toggleSlide() {
        console.log("슬라이드 클릭 이벤트가 발생했습니다."); // 디버깅용 로그
        if (isRunning) {
            stopSlide(); // 슬라이드를 멈춥니다.
        } else {
            startSlide(); // 슬라이드를 다시 시작합니다.
        }
    }

    startSlide(); // 슬라이드 자동 시작

    // 모든 이미지에 클릭 이벤트 설정
    const images = document.querySelectorAll('.exFinder_reason_img_slide');
    images.forEach(img => {
        img.addEventListener('click', toggleSlide); // 클릭 이벤트 추가
    });

    createIndicators(); // 인디케이터 생성 호출
}
