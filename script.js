function celebrate() {
    const confettiCount = 200;
    const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'];

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.floor(Math.random() * 100) + 'vw';
        confetti.style.top = '-20px';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = (Math.random() * 2) + 's';
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }

    const birthdaySound = document.getElementById('birthdaySound');
    birthdaySound.currentTime = 0;
    birthdaySound.play();
}
document.getElementById('celebrateBtn').addEventListener('click', celebrate);
