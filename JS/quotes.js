const quotes = [
    {
        quote: "인생을 살아가는 데는 오직 두가지 방법밖에 없다. 하나는 아무것도 기적이 아닌 것처럼, 다른 하나는 모든 것이 기적인 것처럼 살아가는 것이다.",
        author: "알버트 아인슈타인",
    },
    {
        quote: "그대는 인생을 사랑하는가? 그렇다면 시간을 낭비하지 말라, 시간이야말로 인생을 형성하는 재료이기 때문이다.",
        author: "벤자민 프랭클린",
    },
    {
        quote: "나는 법을 가르칠 수 없는 자에게는 더 빨리 추락하는 법을 가르쳐라!",
        author: "프레드리히 니체",
    },
    {
        quote: "명성을 쌓는 데는 20년이란 세월이 걸리며, 명성을 무너뜨리는 데는 채 5분도 걸리지 않는다. 그걸 명심한다면, 당신의 행동이 달라질 것이다.",
        author: "워런 버핏",
    },
    {
        quote: "자신을 화나게 했던 행동을 다른 이에게 행하지 말라.",
        author: "소크라테스",
    },
    {
        quote: "계획 없는 목표는 한낱 꿈에 불과하다.",
        author: "생텍쥐페리",
    },
    {
        quote: "운은 계획에서 비롯된다.",
        author: "브랜치 리키",
    },
    {
        quote: "할 일이 아무것도 없는 것은 즐겁지 않다. 할 일이 많은 데 안 하고 있는 것이 즐거운 것이다.",
        author: "메리 윌슨 리틀",
    },
    {
        quote: "행복은 성취의 기쁨과 창조적 노력이 주는 쾌감 속에 있다.",
        author: "프랭클린 D. 루스벨트",
    },
    {
        quote: "인생은 본래 녹록지 않다. 하지만 멍청한 사람에게는 더욱 녹록지 않다.",
        author: "존웨인",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;