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
        title: "미니멀리즘 디자인의 힘: 왜 덜어내는 것이 더 많은 것을 주는가",
        date: "2026년 2월 23일",
        category: "Design",
        excerpt: "복잡한 세상에서 단순함은 강력한 무기입니다. 웹 디자인에서 미니멀리즘이 왜 중요한지, 그리고 어떻게 효과적으로 적용할 수 있는지 알아봅니다.",
        content: `
            <p>미니멀리즘은 단순히 요소를 제거하는 것이 아니라, 본질에 집중하는 것입니다. 웹 디자인에서 미니멀리즘은 다음과 같은 장점이 있습니다.</p>
            <ul>
                <li><strong>사용자의 시선을 핵심 콘텐츠로 유도:</strong> 시각적 소음을 제거하면 사용자가 우리가 의도한 핵심 메시지에 더 빨리 도달할 수 있습니다.</li>
                <li><strong>로딩 속도 개선:</strong> 불필요한 이미지와 복잡한 스크립트를 줄이면 사이트 성능이 비약적으로 향상됩니다. 이는 SEO(검색 엔진 최적화)에도 긍정적인 영향을 미칩니다.</li>
                <li><strong>모바일 환경 최적화:</strong> 작은 화면에서 미니멀한 디자인은 가독성을 극대화합니다.</li>
            </ul>
            <p>불필요한 장식을 줄이고 여백을 활용함으로써, 우리는 더 강력한 메시지를 전달할 수 있습니다. 다음 프로젝트에서는 '과연 이 요소가 정말 필요한가?'라고 자문해보세요.</p>
        `
    },
    {
        id: 1,
        title: "효율적인 코딩 습관 5가지: 지속 가능한 개발을 위한 가이드",
        date: "2026년 2월 20일",
        category: "Development",
        excerpt: "좋은 코드는 단순히 작동하는 코드가 아닙니다. 유지보수가 쉽고 가독성이 좋은 코드를 작성하기 위한 5가지 핵심 습관을 공유합니다.",
        content: `
            <p>개발자로서 성장하기 위해서는 단순히 기술을 배우는 것보다 좋은 습관을 들이는 것이 중요합니다. 제가 실천하고 있는 5가지 핵심 습관입니다.</p>
            <h3>1. 의미 있는 변수 이름 짓기</h3>
            <p>코드 자체가 설명서가 되어야 합니다. <code>a</code>, <code>b</code> 같은 변수 이름 대신 <code>userAge</code>, <code>isLoggedIn</code>과 같은 명확한 이름을 사용하세요.</p>
            <h3>2. 한 함수는 한 가지 일만 하기 (Single Responsibility)</h3>
            <p>함수가 작을수록 테스트와 유지보수가 쉬워집니다. 함수가 너무 길어진다면 여러 개로 분리하는 신호입니다.</p>
            <h3>3. 일찍 리턴하기 (Early Return)</h3>
            <p>중첩된 <code>if</code>문을 줄여 코드의 깊이를 얕게 유지하세요. 예외 상황을 먼저 처리하고 리턴하면 메인 로직이 더 명확해집니다.</p>
            <h3>4. 주석보다는 코드 자체로 말하기</h3>
            <p>코드가 복잡해서 주석이 필요하다면 리팩토링을 고민해보세요. 명확한 코드는 주석 없이도 의도가 전달됩니다.</p>
            <h3>5. 일관된 스타일 유지하기</h3>
            <p>팀의 코딩 컨벤션을 준수하는 것은 협업의 기본입니다. Prettier나 ESLint 같은 도구를 활용하세요.</p>
        `
    },
    {
        id: 2,
        title: "2026년 웹 개발 트렌드 분석: AI와 웹 어셈블리의 결합",
        date: "2026년 2월 24일",
        category: "Trends",
        excerpt: "급변하는 웹 생태계에서 2026년에 주목해야 할 주요 기술 트렌드를 살펴봅니다. AI 통합과 고성능 웹 애플리케이션의 미래를 진단합니다.",
        content: `
            <p>2026년 웹 개발 시장은 큰 변화를 맞이하고 있습니다. 특히 AI 기반의 코드 생성 도구와 WebAssembly의 발전이 눈에 땂니다.</p>
            <h3>1. AI 브라우저 네이티브 통합</h3>
            <p>이제 브라우저 자체적으로 가벼운 AI 모델을 실행할 수 있게 되었습니다. 이를 통해 서버 비용을 줄이면서도 개인화된 사용자 경험을 실시간으로 제공할 수 있습니다.</p>
            <h3>2. WebAssembly(Wasm)의 대중화</h3>
            <p>복잡한 계산이나 이미지 처리 작업을 브라우저에서 네이티브 수준의 속도로 실행할 수 있게 되면서, 과거에는 데스크톱 앱에서만 가능했던 일들이 웹에서도 가능해지고 있습니다.</p>
            <p>우리는 이러한 변화에 발맞춰 지속적으로 학습하고 적응해야 합니다. 기술은 도구일 뿐, 본질은 사용자 문제를 해결하는 것임을 잊지 말아야 합니다.</p>
        `
    },
    {
        id: 3,
        title: "성공적인 사이드 프로젝트를 위한 팁: 기획부터 배포까지",
        date: "2026년 2월 18일",
        category: "Career",
        excerpt: "사이드 프로젝트를 끝까지 완수하지 못하는 이유와 이를 극복하고 성공적으로 런칭하기 위한 전략을 알아봅니다.",
        content: `
            <p>많은 개발자들이 사이드 프로젝트를 시작하지만 배포까지 성공하는 경우는 드눕니다. 무엇이 차이를 만들까요?</p>
            <h3>작게 시작하기 (MVP 전략)</h3>
            <p>처음부터 모든 기능을 넣으려고 하지 마세요. 핵심 기능 하나만 완벽하게 구현하는 것을 목표로 삼으세요.</p>
            <h3>꾸준함의 힘</h3>
            <p>하루에 30분이라도 매일 코딩하는 습관이 중요합니다. 큰 덩어리의 시간을 내기보다 짧은 시간이라도 지속성을 유지하세요.</p>
            <p>프로젝트를 완성하고 나면 그 결과물을 공개하고 피드백을 받으세요. 이 과정이 여러분을 진정한 성숙한 개발자로 만들어 줄 것입니다.</p>
        `
    },
    {
        id: 4,
        title: "사용자 경험을 결정짓는 웹 성능 최적화 기법",
        date: "2026년 2월 24일",
        category: "Development",
        excerpt: "웹사이트의 로딩 속도는 사용자 이탈률과 직결됩니다. 2026년 환경에 맞는 최신 웹 성능 최적화 전략과 도구들을 소개합니다.",
        content: `
            <p>웹 성능 최적화는 단순히 기술적인 만족을 넘어 비즈니스 성공의 핵심 요소입니다. 로딩 시간이 1초 늘어날 때마다 전환율은 급격히 떨어집니다. 효과적인 최적화 방법들을 살펴보겠습니다.</p>
            <h3>1. 이미지 최적화의 새로운 기준</h3>
            <p>WebP를 넘어 AVIF 포맷 사용이 일반화되었습니다. 또한 <code>loading="lazy"</code> 속성을 사용하여 초기 로딩 시 불필요한 자원 낭비를 줄이는 것이 중요합니다.</p>
            <h3>2. 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)</h3>
            <p>콘텐츠의 성격에 따라 적절한 렌더링 전략을 선택해야 합니다. 정적인 정보는 SSG로 미리 생성하여 전송 속도를 높이고, 실시간 데이터가 중요한 페이지는 SSR을 활용하여 초기 화면 표시 시간을 단축할 수 있습니다.</p>
            <h3>3. 코드 스플리팅(Code Splitting)</h3>
            <p>사용자가 현재 페이지에서 필요로 하지 않는 JavaScript 코드를 나중에 로드하도록 분리하세요. 이는 초기 번들 크기를 줄여 브라우저가 첫 화면을 렌더링하는 시간을 획기적으로 개선합니다.</p>
            <p>성능 측정 도구인 Lighthouse나 Web Vitals를 정기적으로 체크하며 지표를 관리하는 습관을 들이시기 바랍니다. 빠르고 쾌적한 웹사이트는 최고의 사용자 서비스입니다.</p>
        `
    },
    {
        id: 5,
        title: "[GC 기초] GC 검출기: 정체와 양을 밝히는 '지식의 눈' 👁️‍🗨️",
        date: "2026년 2월 25일",
        category: "GC",
        excerpt: "기체 크로마토그래피(GC) 시스템에서 성분의 정체와 양을 밝히는 마지막 관문인 검출기의 핵심 원리와 정성/정량 분석의 차이를 알아봅니다.",
        content: `
            <h3>1. 도입: GC 검출기란 무엇인가?</h3>
            <p>기체 크로마토그래피(GC) 시스템의 여정에서 <strong>검출기(Detector)</strong>는 긴 터널(컬럼)을 빠져나온 성분들을 맞이하는 마지막 관문이자, 보이지 않는 화학 세계를 읽어내는 <strong>'감각 기관'</strong>입니다.</p>
            <p>검출기가 성분을 발견하는 순간, 우리는 비로소 성분이 <strong>'무엇(정체)'</strong>인지와 <strong>'얼마나(함량)'</strong> 있는지라는 두 가지 핵심 지식을 얻게 됩니다.</p>
            <hr>
            <h3>2. 검출기의 두 가지 임무: 정성 분석과 정량 분석</h3>
            <h4>① 정성 분석 (Qualitative Analysis): "너의 정체는 무엇이냐?" 🔍</h4>
            <ul>
                <li><strong>원리:</strong> 성분이 컬럼에 머무르는 시간인 <strong>머무름 시간(Retention Time)</strong>을 이용합니다. 특정 조건에서 표준 물질과 미지 시료의 피크가 나타나는 시간을 비교하여 성분을 특정합니다.</li>
            </ul>
            <h4>② 정량 분석 (Quantitative Analysis): "양은 얼마나 들어있느냐?" ⚖️</h4>
            <ul>
                <li><strong>원리:</strong> 그래프 피크의 <strong>면적(Area)</strong>을 측정합니다. 면적은 해당 성분의 양과 비례합니다.</li>
            </ul>
            <p>💡 <strong>왜 높이보다 '면적'일까요?</strong> 시료 성분들은 컬럼을 지나며 확산 현상 때문에 옆으로 퍼지는(Broadening) 성질이 있습니다. 면적은 확산된 전체 물리적 양을 정확히 반영하기 때문에 훨씬 신뢰할 수 있는 데이터가 됩니다.</p>
        `
    },
    {
        id: 6,
        title: "[GC 검출기] 범용의 제왕 FID부터 온도 민감 센서 TCD까지 🔥🌡️",
        date: "2026년 2월 25일",
        category: "GC",
        excerpt: "가장 널리 쓰이는 FID(불꽃 이온화 검출기)와 비파괴 방식의 TCD(열전도도 검출기)의 작동 원리와 특징을 상세히 살펴봅니다.",
        content: `
            <h3>3. [범용] FID (불꽃 이온화 검출기): 탄소 성분을 태우는 '불꽃 탐정' 🔥</h3>
            <p>FID는 유기 화합물을 분석할 때 전 세계적으로 가장 사랑받는 <strong>'범용 검출기'</strong>입니다.</p>
            <ul>
                <li><strong>핵심 작동 원리:</strong>
                    <ol>
                        <li>수소와 공기를 연료로 하는 뜨거운 불꽃 속으로 시료가 진입합니다.</li>
                        <li>탄소(C) 원자가 열분해되어 CH 라디칼이 형성되고, 이것이 산소와 반응하여 CH+ 이온을 생성합니다.</li>
                        <li>생성된 이온들의 흐름을 전류로 측정하여 신호로 변환합니다.</li>
                    </ol>
                </li>
            </ul>
            <p>🌟 <strong>전문가의 Tip!</strong> FID 불꽃이 정말 켜져 있는지 궁금하신가요? 차가운 스패너를 검출기 배기구에 살짝 대보세요. 수증기가 맺혀 뿌옇게 변한다면 불꽃이 잘 타오르고 있다는 증거입니다!</p>
            <hr>
            <h3>4. [범용] TCD (열전도도 검출기): 열의 흐름을 읽는 '온도 민감 센서' 🌡️</h3>
            <p>TCD는 모든 성분에 반응하는 가장 고전적이면서도 안전한 검출기입니다. 뜨겁게 달궈진 필라멘트 옆을 기체가 지나가며 열을 얼마나 빨리 식히느냐를 측정합니다.</p>
            <ul>
                <li><strong>핵심 원리:</strong> 열전도도가 매우 높은 <strong>헬륨(He)</strong>을 운반 기체로 사용합니다. 분석 성분이 섞여 들어오면 전체 기체의 열전도도가 떨어지고, 필라멘트의 온도가 상승하면서 전기 저항 값이 변하게 됩니다.</li>
                <li><strong>장점:</strong> 불꽃을 쓰지 않아 안전하며, 시료를 파괴하지 않습니다. 유기물뿐 아니라 공기, 수분 등 모든 물질을 감지할 수 있습니다.</li>
            </ul>
        `
    },
    {
        id: 7,
        title: "[GC 검출기] 특수 성분 추적: ECD, NPD, FPD 그리고 MSD의 세계 🧲🕵️‍♂️",
        date: "2026년 2월 25일",
        category: "GC",
        excerpt: "할로겐, 질소, 인, 황 등 특정 원소에 민감한 선택적 검출기들과 MSD의 매력을 탐구하고 시료에 맞는 선택 가이드를 확인하세요.",
        content: `
            <h3>5. [선택] ECD (전자 포획 검출기): 전자를 낚아채는 '자석 낚시꾼' 🧲</h3>
            <p>ECD는 전자를 유난히 좋아하는 특정 성분(할로겐 화합물 등)에만 매우 예민하게 반응합니다.</p>
            <ul>
                <li><strong>핵심 원리:</strong> 방사선원(Ni-63)이 내뿜는 베타선이 전자 구름을 형성합니다. 전자를 좋아하는 성분이 이 구름 사이를 지나가면 전자를 낚아채 버리며, 이때 흐르던 전류가 줄어드는 <strong>'신호의 구멍'</strong>을 측정합니다.</li>
            </ul>
            <hr>
            <h3>6. 특정 원소 전문 탐정단: NPD, FPD, MSD 🕵️‍♂️</h3>
            <p><strong>🧪 NPD (질소·인 검출기):</strong> 알칼리 금속 염 비드를 가열해 질소(N)나 인(P)을 포함한 성분만 선택적으로 이온화하여 분석합니다.</p>
            <p><strong>✨ FPD (불꽃 광도 검출기):</strong> 성분을 태울 때 발생하는 특유의 빛깔을 포착합니다. 황(S)은 394 nm, 인(P)은 526 nm 파장을 측정합니다.</p>
            <p><strong>🧬 MSD (질량 분석 검출기):</strong> 성분을 잘게 쪼개 무게(m/z)를 재는 '전자 저울'입니다. 고유한 파편 패턴을 라이브러리와 대조하여 정체를 완벽히 식별하는 <strong>'화학적 지문 스캐너'</strong>입니다.</p>
            <hr>
            <h3>7. 학습 마무리: 내 시료에 맞는 검출기 선택 가이드 🏁</h3>
            <p>여러분의 실험 목적에 맞는 최적의 검출기를 선택할 수 있도록 핵심을 정리해 드립니다.</p>
            <table style="width:100%; border-collapse: collapse; margin-top: 10px; font-size: 0.9em;">
                <tr style="background-color: #f2f2f2;">
                    <th style="border: 1px solid #ddd; padding: 8px;">검출기 종류</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">카테고리</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">주요 대상 성분</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">핵심 기체/도구</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">감도 특성</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">FID</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">범용</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">대부분의 유기물</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">수소(H<sub>2</sub>), 공기</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">우수함</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">TCD</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">범용</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">모든 성분 (무기물 포함)</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">헬륨(He)</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">낮음 (안전함)</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">MSD</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">범용/구조</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">모든 유기물</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">NIST 라이브러리</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">매우 우수함</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">ECD</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">선택</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">할로겐, 농약</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">질소(N<sub>2</sub>)</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">초고감도</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">NPD</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">선택</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">질소(N), 인(P)</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">루비듐 염 비드</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">선택적 고감도</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">FPD</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">선택</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">황(S), 인(P)</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">파장 필터(394/526nm)</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">선택적 우수</td>
                </tr>
            </table>
            <p><strong>🌟 초보자를 위한 검출기 선택의 황금률</strong></p>
            <ol>
                <li>일반 유기물 전체를 보고 싶다면? 👉 <strong>FID</strong></li>
                <li>미량의 농약이나 환경 호르몬을 추적한다면? 👉 <strong>ECD</strong> 또는 <strong>NPD</strong></li>
                <li>성분의 정체와 구조까지 확실히 '확진'하고 싶다면? 👉 <strong>MSD</strong></li>
            </ol>
            <p>분석하고자 하는 물질의 성질을 먼저 파악하는 것이 성공적인 분석의 절반입니다. 여러분의 '지식의 눈'이 되어줄 검출기와 함께 정교한 분석의 세계를 경험해 보시길 응원합니다! 👏</p>
        `
    },
    {
        id: 8,
        title: "2026년 디자인 트렌드: 감성적 미니멀리즘과 몰입형 경험",
        date: "2026년 2월 26일",
        category: "Design",
        excerpt: "단순함을 넘어 사용자에게 감성적인 연결을 제안하는 2026년의 새로운 디자인 트렌드를 소개합니다.",
        content: `
            <p>2026년의 디자인은 단순히 '비우는 것'에서 한 걸음 더 나아가, 비워진 공간을 '감성'과 '몰입'으로 채우는 방향으로 진화하고 있습니다.</p>
            <h3>1. 감성적 미니멀리즘 (Emotional Minimalism)</h3>
            <p>과거의 미니멀리즘이 차갑고 기계적인 느낌이었다면, 올해는 따뜻한 색감과 부드러운 질감을 활용하여 사용자에게 안락함을 주는 디자인이 주목받고 있습니다.</p>
            <h3>2. 마이크로 인터랙션의 진화</h3>
            <p>사용자의 작은 움직임에 반응하는 정교한 애니메이션은 인터페이스에 생명력을 불어넣습니다. 이는 단순히 시각적 즐거움을 주는 것을 넘어, 직관적인 피드백을 제공함으로써 UX를 완성합니다.</p>
            <h3>3. 접근성과 포용성</h3>
            <p>다양한 사용자를 배려하는 디자인은 이제 선택이 아닌 필수입니다. 고대비 모드, 폰트 크기 조절 옵션 등 모든 사람이 편안하게 정보를 소비할 수 있는 환경을 구축해야 합니다.</p>
            <p>디자인은 결국 사람을 향해야 합니다. 기술의 발전 속에서도 인간 중심의 가치를 잊지 않는 디자이너가 되기 위해 노력합시다.</p>
        `
    }
];

const postsContainer = document.getElementById('blog-posts');
const contributionSection = document.getElementById('contribution-section');
let currentCategory = 'All';

// Navigation
function navigate(page) {
    if (page === 'home') {
        renderHome();
    } else if (page === 'about') {
        renderAbout();
    } else if (page === 'contact') {
        renderContact();
    } else if (page === 'privacy') {
        renderPrivacy();
    } else if (page === 'terms') {
        renderTerms();
    }
    window.scrollTo(0, 0);
}

function filterByCategory(category) {
    currentCategory = category;
    navigate('home');
}

function renderHome() {
    contributionSection.style.display = 'block';
    postsContainer.innerHTML = '';
    
    // 필터링 적용
    const filteredPosts = currentCategory === 'All' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === currentCategory);

    // 게시물을 날짜순(최신순)으로 정렬
    const sortedPosts = [...filteredPosts].sort((a, b) => {
        const dateA = new Date(parseKoreanDate(a.date));
        const dateB = new Date(parseKoreanDate(b.date));
        
        if (dateB - dateA !== 0) return dateB - dateA;
        
        // 같은 날짜일 경우: GC 카테고리는 오름차순(ID순), 나머지는 내림차순(최신순)
        if (currentCategory === 'GC') return a.id - b.id;
        return b.id - a.id;
    });

    if (sortedPosts.length === 0) {
        postsContainer.innerHTML = '<p>No posts found in this category.</p>';
        return;
    }

    sortedPosts.forEach((post) => {
        const originalIndex = blogPosts.findIndex(p => p.id === post.id);
        const article = document.createElement('article');
        article.innerHTML = `
            <div class="post-category-tag">${post.category}</div>
            <h2><a href="#" onclick="showPost(${originalIndex}); return false;">${post.title}</a></h2>
            <div class="post-meta">${post.date}</div>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="#" class="read-more" onclick="showPost(${originalIndex}); return false;">Read more →</a>
        `;
        postsContainer.appendChild(article);
    });
}

function renderAbout() {
    contributionSection.style.display = 'none';
    postsContainer.innerHTML = `
        <article class="page-content">
            <h1>About Me</h1>
            <p>안녕하세요! 저는 미니멀리즘과 효율적인 코딩을 추구하는 개발자 Lee입니다.</p>
            <p>이 블로그는 제가 공부한 내용, 프로젝트 진행 과정, 그리고 기술적인 고민들을 기록하는 공간입니다. 단순한 지식 전달을 넘어, 독창적이고 가치 있는 정보를 제공하고자 노력합니다.</p>
            <h3>전문 분야</h3>
            <ul>
                <li><strong>Frontend Development:</strong> React, Vue.js, Vanilla JavaScript, CSS Architecture</li>
                <li><strong>Backend Engineering:</strong> Node.js, Express, Firebase (Cloud Functions, Firestore)</li>
                <li><strong>UI/UX Design:</strong> Minimalist aesthetics, focus on accessibility and performance</li>
            </ul>
            <p>더 나은 사용자 경험을 제공하기 위해 항상 고민하며, 깔끔하고 유지보수하기 쉬운 코드를 작성하는 것을 좋아합니다. 이 블로그를 통해 얻은 통찰이 여러분의 개발 여정에도 도움이 되기를 바랍니다.</p>
        </article>
    `;
}

function renderContact() {
    contributionSection.style.display = 'none';
    postsContainer.innerHTML = `
        <article class="page-content">
            <h1>Contact</h1>
            <p>궁금한 점이 있거나 협업 제안이 있으시면 아래 연락처로 언제든 편하게 연락 주세요!</p>
            <div class="contact-info">
                <p><strong>Email:</strong> <a href="mailto:honoer612@gmail.com">honoer612@gmail.com</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/lee1231232" target="_blank">github.com/lee1231232</a></p>
            </div>
            <p>또한 블로그 포스팅 하단의 댓글을 통해서도 소통하실 수 있습니다.</p>
        </article>
    `;
}

function renderPrivacy() {
    contributionSection.style.display = 'none';
    postsContainer.innerHTML = `
        <article class="page-content">
            <h1>Privacy Policy</h1>
            <p>Last updated: February 24, 2026</p>
            <p>This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your information when you use the Service and tells you about your privacy rights and how the law protects you.</p>
            
            <h3>1. Personal Data Collection</h3>
            <p>We do not collect any personal data directly from our visitors. However, we use third-party services like Google AdSense and Disqus which may collect information for their respective services.</p>
            
            <h3>2. Cookies</h3>
            <p>We use Cookies and similar tracking technologies to track the activity on our service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze our service.</p>
            
            <h3>3. Google AdSense</h3>
            <p>Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.</p>
            
            <h3>4. Disqus Comments</h3>
            <p>If you choose to use the comment section, Disqus may collect information. Please refer to Disqus's privacy policy for more details.</p>
        </article>
    `;
}

function renderTerms() {
    contributionSection.style.display = 'none';
    postsContainer.innerHTML = `
        <article class="page-content">
            <h1>Terms of Service</h1>
            <p>By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
            
            <h3>1. Use License</h3>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Lee's Minimal Blog for personal, non-commercial transitory viewing only.</p>
            
            <h3>2. Disclaimer</h3>
            <p>The materials on this website are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            
            <h3>3. Limitations</h3>
            <p>In no event shall Lee or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the blog.</p>
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
            <div class="post-category-tag">${post.category}</div>
            <h1>${post.title}</h1>
            <div class="post-meta">${post.date}</div>
            <div class="post-content">
                ${post.content}
            </div>
            <div id="disqus_thread"></div>
        </article>
    `;
    loadDisqus(post.id, post.title);
    window.scrollTo(0, 0);
}

function loadDisqus(postId, postTitle) {
    const disqus_shortname = 'leeblog-2'; // 제공해주신 스크립트의 shortname 적용
    const page_url = window.location.origin + '/#!post/' + postId;
    const page_identifier = 'post-' + postId;

    if (typeof DISQUS !== 'undefined') {
        // 이미 로드된 경우, 새로운 포스트 정보로 초기화 (SPA 방식)
        DISQUS.reset({
            reload: true,
            config: function () {
                this.page.identifier = page_identifier;
                this.page.url = page_url;
                this.page.title = postTitle;
            }
        });
    } else {
        // 처음 로드하는 경우
        window.disqus_config = function () {
            this.page.identifier = page_identifier;
            this.page.url = page_url;
            this.page.title = postTitle;
        };
        const d = document, s = d.createElement('script');
        s.src = `https://${disqus_shortname}.disqus.com/embed.js`;
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    }
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

    const today = new Date(); // 오늘 날짜로 자동 업데이트되도록 수정
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
window.filterByCategory = filterByCategory; // global scope for onclick
