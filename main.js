
    function openInvitation() {
      document.querySelector('.cover').style.display = 'none';
      document.getElementById('invitation').style.display = 'block';
      document.getElementById('mempelai').style.display = 'block';
      document.getElementById('tanggal').style.display = 'block';
      document.getElementById('galeri').style.display = 'block';
      document.getElementById('ucapanDoa').style.display = 'block';
      document.getElementById('penutup').style.display = 'block';
      document.getElementById('footer').style.display = 'block';
      document.getElementById('nav').classList.add('show');
      document.getElementById('musicButton').classList.add('show');
      playMusic();
      startConfetti();
      
      AOS.refresh();
    }

    function toggleMusic() {
      const music = document.getElementById('music');
      if (music.paused) music.play();
      else music.pause();
    }

    function playMusic() {
      document.getElementById('music').play();
    }

    function startConfetti() {
      const confetti = document.getElementById('confetti');
      confetti.innerHTML = '';
      for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.textContent = '*';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '-20px';
        heart.style.fontSize = '12px';
        heart.style.animation = `fall ${2 + Math.random() * 3}s linear infinite`;
        confetti.appendChild(heart);
      }
    }
    let progress = 0;
let maxProgress = 12;

function updateProgress() {
  progress++;
  const percentage = Math.floor((progress / maxProgress) * 100);
  document.getElementById('progress-bar').style.width = percentage + '%';
  document.getElementById('progress-text').textContent =
    `Loading confetti complete (${progress}/${maxProgress}) [${percentage}%]`;

  if (progress < maxProgress) {
    setTimeout(updateProgress, 100); 
  } else {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }
}

window.onload = () => {
  
updateProgress();
};
const scrollIcon = document.getElementById('scroll');
scrollIcon.addEventListener('click', () => {
// Scroll smoothly to the next section
  window.scrollBy({ 
    top: window.innerHeight,
                    behavior: 'smooth'
                });
                scrollIcon.style.display = 'none';
            });
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    scrollIcon.style.display = 'none';
                } else {
                    scrollIcon.style.display = 'block';
                }
            });
