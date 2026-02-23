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
const contributionGraph = document.getElementById('contribution-graph');

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

function renderContributionGraph() {
    const totalDays = 365; // 약 1년치
    const graphContainer = document.getElementById('contribution-graph');
    
    if (!graphContainer) return;
    
    graphContainer.innerHTML = '';
    
    // 임의의 기여도 생성 (0~4 레벨)
    for (let i = 0; i < totalDays; i++) {
        const day = document.createElement('div');
        day.classList.add('day');
        
        // 랜덤하게 레벨 설정 (실제로는 데이터에 기반함)
        const randomValue = Math.random();
        let level = 0;
        if (randomValue > 0.9) level = 4;
        else if (randomValue > 0.8) level = 3;
        else if (randomValue > 0.6) level = 2;
        else if (randomValue > 0.4) level = 1;
        
        if (level > 0) {
            day.setAttribute('data-level', level);
        }
        
        graphContainer.appendChild(day);
    }
}

// 초기 렌더링 실행
renderPosts();
renderContributionGraph();
