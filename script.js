document.getElementById('celebrateBtn').addEventListener('click', function () {
    playBirthdaySound();
    startConfetti();
});

function playBirthdaySound() {
    var birthdaySound = document.getElementById('birthdaySound');
    birthdaySound.play();
}

function startConfetti() {
    var confettiCanvas = document.getElementById('confettiCanvas');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    var ctx = confettiCanvas.getContext('2d');
    var confettiCount = 200;
    var confettiArray = [];

    for (var i = 0; i < confettiCount; i++) {
        confettiArray.push(new Confetti());
    }

    function Confetti() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight - window.innerHeight;
        this.size = Math.random() * 10 + 1;
        this.weight = Math.random() * 0.5 + 0.5;
        this.color = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
    }

    function updateConfetti() {
        for (var i = 0; i < confettiArray.length; i++) {
            confettiArray[i].y += confettiArray[i].weight;
            confettiArray[i].x += Math.sin(confettiArray[i].y * 0.01) * 10;

            if (confettiArray[i].y > window.innerHeight) {
                confettiArray[i].y = 0;
                confettiArray[i].x = Math.random() * window.innerWidth;
            }
        }
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        for (var i = 0; i < confettiArray.length; i++) {
            ctx.beginPath();
            ctx.arc(confettiArray[i].x, confettiArray[i].y
