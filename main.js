const blogPosts = [
    {
        title: "미니멀리즘 디자인의 힘",
        date: "2026년 2월 23일",
        excerpt: "복잡한 세상에서 단순함은 강력한 무기입니다. 웹 디자인에서 미니멀리즘이 왜 중요한지, 그리고 어떻게 효과적으로 적용할 수 있는지 알아봅니다."
    },
    {
        title: "효율적인 코딩 습관 5가지",
        date: "2026년 2월 20일",
        excerpt: "좋은 코드는 단순히 작동하는 코드가 아닙니다. 유지보수가 쉽고 가독성이 좋은 코드를 작성하기 위한 5가지 핵심 습관을 공유합니다."
    },
    {
        title: "새로운 프로젝트를 시작하며",
        date: "2026년 2월 15일",
        excerpt: "새로운 기술 스택으로 사이드 프로젝트를 시작했습니다. 이번 프로젝트에서 겪은 도전과 배운 점들을 기록으로 남겨봅니다."
    }
];

const postsContainer = document.getElementById('blog-posts');

function renderPosts() {
    postsContainer.innerHTML = '';
    
    blogPosts.forEach(post => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2><a href="#">${post.title}</a></h2>
            <div class="post-meta">${post.date}</div>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="#" class="read-more">Read more →</a>
        `;
        postsContainer.appendChild(article);
    });
}

function parseKoreanDate(dateStr) {
    const matches = dateStr.match(/(\d+)년 (\d+)월 (\d+)일/);
    if (matches) {
        // Note: Months are 0-indexed in JavaScript Date
        return new Date(parseInt(matches[1]), parseInt(matches[2]) - 1, parseInt(matches[3])).toDateString();
    }
    return null;
}

function renderContributionGraph() {
    const graphContainer = document.getElementById('contribution-graph');
    const header = document.querySelector('.contribution-header h2');
    if (!graphContainer) return;

    graphContainer.innerHTML = '';

    // 오늘 날짜 기준 (2026-02-23)
    const today = new Date(2026, 1, 23); // 1 is February
    const totalDays = 365;
    
    // 포스트 날짜별 카운트 맵 생성
    const contributionMap = {};
    blogPosts.forEach(post => {
        const dateKey = parseKoreanDate(post.date);
        if (dateKey) {
            contributionMap[dateKey] = (contributionMap[dateKey] || 0) + 1;
        }
    });

    let totalContributions = 0;

    // 365일 전부터 오늘까지 순회
    for (let i = totalDays - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dateKey = date.toDateString();
        const count = contributionMap[dateKey] || 0;
        
        totalContributions += count;

        const day = document.createElement('div');
        day.classList.add('day');
        
        // 기여도에 따른 레벨 설정 (1개면 1레벨, 2개면 2레벨 등)
        if (count > 0) {
            const level = Math.min(count, 4); 
            day.setAttribute('data-level', level);
            day.setAttribute('title', `${dateKey}: ${count} contributions`);
        } else {
            day.setAttribute('title', `${dateKey}: No contributions`);
        }
        
        graphContainer.appendChild(day);
    }

    if (header) {
        header.textContent = `${totalContributions} contributions in the last year`;
    }
}

// 초기 렌더링 실행
renderPosts();
renderContributionGraph();
