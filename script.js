// 게임 데이터 목록 (총 4개)
const games = [
    {
        title: "COOKIE TYCOON",
        desc: "맛있는 쿠키를 만들어 판매하는 경영 시뮬레이션!",
        link: "https://dyspro0711.github.io/dyspro/",
        icon: "🍪"
    },
    {
        title: "NEON BEAT",
        desc: "리듬에 맞춰 장애물을 피하는 화려한 액션 게임!",
        link: "https://dyspro0711.github.io/N/",
        icon: "🎵"
    },
    {
        title: "COOKIE UPGRADE",
        desc: "쿠키를 강화하여 전설 등급에 도전하세요!",
        link: "https://dyspro08.github.io/cookie/",
        icon: "✨"
    },
    {
        title: "YACHT DICE",
        desc: "주사위 5개를 굴려 족보를 완성하는 전략 보드게임!",
        link: "https://dyspro0711.github.io/V/",
        icon: "🎲"
    }
];

let currentIndex = 0;
const track = document.getElementById('card-track');
const titleEl = document.getElementById('game-title');
const descEl = document.getElementById('game-desc');
const linkEl = document.getElementById('game-link');

// 초기화 함수
function init() {
    games.forEach((game, index) => {
        const card = document.createElement('div');
        card.className = 'game-card';
        
        // 카드 클릭 이벤트
        card.onclick = () => {
            if (index === currentIndex) window.open(game.link, '_blank');
            else updateSlider(index);
        };

        card.innerHTML = `<div>${game.icon}</div>`;
        track.appendChild(card);
    });
    updateSlider(0);
}

// 슬라이더 상태 업데이트
function updateSlider(index) {
    currentIndex = index;
    const cards = document.querySelectorAll('.game-card');
    
    // 1. 모든 카드 숨기기 및 초기화
    cards.forEach(card => card.className = 'game-card');

    // 2. 현재 카드 (Active)
    cards[currentIndex].classList.add('active');
    
    // 3. 이전 카드 (Prev) - 루프 계산
    const prevIndex = (currentIndex === 0) ? games.length - 1 : currentIndex - 1;
    cards[prevIndex].classList.add('prev');

    // 4. 다음 카드 (Next) - 루프 계산
    const nextIndex = (currentIndex === games.length - 1) ? 0 : currentIndex + 1;
    cards[nextIndex].classList.add('next');

    // 5. 텍스트 정보 업데이트
    titleEl.textContent = games[currentIndex].title;
    descEl.textContent = games[currentIndex].desc;
    linkEl.href = games[currentIndex].link;
}

// 버튼 클릭 이벤트
document.getElementById('prev-btn').addEventListener('click', () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = games.length - 1;
    updateSlider(newIndex);
});

document.getElementById('next-btn').addEventListener('click', () => {
    let newIndex = currentIndex + 1;
    if (newIndex >= games.length) newIndex = 0;
    updateSlider(newIndex);
});

// 키보드 조작 이벤트
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') document.getElementById('prev-btn').click();
    if (e.key === 'ArrowRight') document.getElementById('next-btn').click();
    if (e.key === 'Enter') window.open(games[currentIndex].link, '_blank');
});

// 실행
init();
