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

// 초기 렌더링 실행
renderPosts();
