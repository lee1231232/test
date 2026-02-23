// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggle.textContent = 'Light Mode';
    }
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = 'Dark Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = 'Light Mode';
    }
});

const blogPosts = [
    {
        id: 0,
        title: "미니멀리즘 디자인의 힘",
        date: "2026년 2월 23일",
        excerpt: "복잡한 세상에서 단순함은 강력한 무기입니다. 웹 디자인에서 미니멀리즘이 왜 중요한지, 그리고 어떻게 효과적으로 적용할 수 있는지 알아봅니다.",
        content: `
            <p>미니멀리즘은 단순히 요소를 제거하는 것이 아니라, 본질에 집중하는 것입니다. 웹 디자인에서 미니멀리즘은 다음과 같은 장점이 있습니다.</p>
            <ul>
                <li>사용자의 시선을 핵심 콘텐츠로 유도합니다.</li>
                <li>로딩 속도가 빨라져 사용자 경험이 개선됩니다.</li>
                <li>모바일 환경에서 가독성이 높아집니다.</li>
            </ul>
            <p>불필요한 장식을 줄이고 여백을 활용함으로써, 우리는 더 강력한 메시지를 전달할 수 있습니다.</p>
        `
    },
    {
        id: 1,
        title: "효율적인 코딩 습관 5가지",
        date: "2026년 2월 20일",
        excerpt: "좋은 코드는 단순히 작동하는 코드가 아닙니다. 유지보수가 쉽고 가독성이 좋은 코드를 작성하기 위한 5가지 핵심 습관을 공유합니다.",
        content: `
            <p>개발자로서 성장하기 위해서는 단순히 기술을 배우는 것보다 좋은 습관을 들이는 것이 중요합니다.</p>
            <h3>1. 의미 있는 변수 이름 짓기</h3>
            <p>코드 자체가 설명서가 되어야 합니다.</p>
            <h3>2. 한 함수는 한 가지 일만 하기</h3>
            <p>함수가 작을수록 테스트와 유지보수가 쉬워집니다.</p>
            <h3>3. 일찍 리턴하기 (Early Return)</h3>
            <p>중첩된 if문을 줄여 가독성을 높입니다.</p>
            <h3>4. 주석보다는 코드 자체로 말하기</h3>
            <p>코드가 복잡해서 주석이 필요하다면 리팩토링을 고민해보세요.</p>
            <h3>5. 일관된 스타일 유지하기</h3>
            <p>팀의 코딩 컨벤션을 준수하는 것은 협업의 기본입니다.</p>
        `
    },
    {
        id: 2,
        title: "새로운 프로젝트를 시작하며",
        date: "2026년 2월 15일",
        excerpt: "새로운 기술 스택으로 사이드 프로젝트를 시작했습니다. 이번 프로젝트에서 겪은 도전과 배운 점들을 기록으로 남겨봅니다.",
        content: `
            <p>이번 프로젝트의 목표는 Firebase와 React를 결합하여 실시간 데이터 처리를 구현하는 것이었습니다.</p>
            <p>가장 큰 도전 과제는 데이터 구조 설계였습니다. NoSQL 데이터베이스인 Firestore의 특성을 이해하고 쿼리 효율성을 높이기 위해 많은 고민을 했습니다.</p>
            <p>앞으로 이 블로그를 통해 진행 상황을 꾸준히 공유할 예정입니다. 기술적인 문제 해결뿐만 아니라 기획 단계에서의 고민들도 함께 다루고 싶습니다.</p>
        `
    }
];

const postsContainer = document.getElementById('blog-posts');
const contributionSection = document.getElementById('contribution-section');

// Navigation
function navigate(page) {
    if (page === 'home') {
        renderHome();
    } else if (page === 'about') {
        renderAbout();
    } else if (page === 'contact') {
        renderContact();
    }
    window.scrollTo(0, 0);
}

function renderHome() {
    contributionSection.style.display = 'block';
    postsContainer.innerHTML = '';
    
    blogPosts.forEach((post, index) => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2><a href="#" onclick="showPost(${index}); return false;">${post.title}</a></h2>
            <div class="post-meta">${post.date}</div>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="#" class="read-more" onclick="showPost(${index}); return false;">Read more →</a>
        `;
        postsContainer.appendChild(article);
    });
}

function renderAbout() {
    contributionSection.style.display = 'none';
    postsContainer.innerHTML = `
        <article class="page-content">
            <h1>About Me</h1>
            <p>안녕하세요! 저는 미니멀리즘과 효율적인 코딩을 추구하는 개발자입니다.</p>
            <p>이 블로그는 제가 공부한 내용, 프로젝트 진행 과정, 그리고 기술적인 고민들을 기록하는 공간입니다.</p>
            <h3>기술 스택</h3>
            <ul>
                <li>Frontend: HTML, CSS, JavaScript, React</li>
                <li>Backend: Node.js, Express</li>
                <li>Database: Firebase, Firestore</li>
            </ul>
            <p>더 나은 사용자 경험을 제공하기 위해 항상 고민하며, 깔끔하고 유지보수하기 쉬운 코드를 작성하는 것을 좋아합니다.</p>
        </article>
    `;
}

function renderContact() {
    contributionSection.style.display = 'none';
    postsContainer.innerHTML = `
        <article class="page-content">
            <h1>Contact</h1>
            <p>궁금한 점이 있거나 협업 제안이 있으시면 아래 연락처로 연락 주세요!</p>
            <div class="contact-info">
                <p><strong>Email:</strong> example@email.com</p>
                <p><strong>GitHub:</strong> <a href="https://github.com/lee1231232" target="_blank">github.com/lee1231232</a></p>
                <p><strong>LinkedIn:</strong> <a href="#" target="_blank">linkedin.com/in/username</a></p>
            </div>
            <p>평일 기준 24시간 이내에 답변드리도록 노력하겠습니다.</p>
        </article>
    `;
}

function showPost(index) {
    const post = blogPosts[index];
    if (!post) return;

    contributionSection.style.display = 'none';
    
    postsContainer.innerHTML = `
        <article class="full-post">
            <a href="#" onclick="renderHome(); return false;" class="back-link">← Back to list</a>
            <h1>${post.title}</h1>
            <div class="post-meta">${post.date}</div>
            <div class="post-content">
                ${post.content}
            </div>
        </article>
    `;
    window.scrollTo(0, 0);
}

function parseKoreanDate(dateStr) {
    const matches = dateStr.match(/(\d+)년 (\d+)월 (\d+)일/);
    if (matches) {
        return new Date(parseInt(matches[1]), parseInt(matches[2]) - 1, parseInt(matches[3])).toDateString();
    }
    return null;
}

function renderContributionGraph() {
    const graphContainer = document.getElementById('contribution-graph');
    const header = document.querySelector('.contribution-header h2');
    if (!graphContainer) return;

    graphContainer.innerHTML = '';

    const today = new Date(2026, 1, 23);
    const totalDays = 365;
    
    const contributionMap = {};
    blogPosts.forEach(post => {
        const dateKey = parseKoreanDate(post.date);
        if (dateKey) {
            contributionMap[dateKey] = (contributionMap[dateKey] || 0) + 1;
        }
    });

    let totalContributions = 0;

    for (let i = totalDays - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dateKey = date.toDateString();
        const count = contributionMap[dateKey] || 0;
        
        totalContributions += count;

        const day = document.createElement('div');
        day.classList.add('day');
        
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
renderHome();
renderContributionGraph();
window.navigate = navigate; // global scope for onclick
