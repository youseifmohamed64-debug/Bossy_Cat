const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const questionText = document.getElementById('question-text');
const mainGif = document.getElementById('main-gif');
const realPhotos = document.getElementById('real-photos');
const music = document.getElementById('bg-music');

// وظيفة الهروب العشوائي
function escape() {
    // بيحسب أبعاد الشاشة عشان الزرار ميخرجش براها
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

// يهرب لما الماوس يقرب (للكمبيوتر)
noBtn.addEventListener('mouseover', escape);

// يهرب لما يتحاول تدوس عليه (للموبايل)
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    escape();
});

yesBtn.addEventListener('click', () => {
    music.play();
    if (questionText.innerText === "Do you love me?") {
        questionText.innerText = "Do you need me?";
        mainGif.src = "think.png";
        // نرجعه مكانه مؤقتاً عشان تعرف تدوس Yes المرة الجاية
        noBtn.style.position = "static"; 
    } else {
        questionText.innerText = "I knew it! 😍";
        mainGif.style.display = "none";
        realPhotos.style.display = "flex"; 
        noBtn.style.display = "none";
        yesBtn.style.display = "none";
    }
});