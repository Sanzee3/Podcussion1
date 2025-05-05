
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let particlesArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = 'rgba(0, 195, 255, 0.4)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();


const section = document.getElementById('contentSection');
const contentArea = document.getElementById('contentArea');
const hoverSound = document.getElementById('hoverSound');
const clickSound = document.getElementById('clickSound');

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function openSection(sectionId) {
  section.classList.add('visible');
  let content = '';

  switch (sectionId) {
    case 'intro':
      content = `
        <h2>FAQs About PODCUSSION</h2>

        <div class="faq">
          <h3>1. What is PODCUSSION?</h3>
          <p>PODCUSSION is a dynamic platform where podcasts meet passion. We bring you powerful discussions, ideas, and voices from various niches—all in one place.</p>
        </div>

        <div class="faq">
          <h3>2. Who are the members of PODCUSSION?</h3>
          <p>Coder 1: Jarred Gabriel Hervas</p> <p>Coder 2: Myall Shadrach Balenia</p> <p>Current Leader: Carlo EBOL Colipano</p>  <p>Researcher 1: Kesha Vielle Ballesteros</p> <p>Researcher 2: Martijne Handrey Rivera</p> <p>Spokesperson 1: Rhenz Yhuan Sta. Ana</p> <p>Spokesperson 2: Tabitha Daiz</p> <p>Secretary: Jairyn Rose Bertillo</p>
        </div>

        <div class="faq">
          <h3>3. What topics do you cover?</h3>
          <p>We mostly talk about personal experiences, such as education, plans for our future, and other events that we mainly experience within our daily lives.</p>
        </div>

        <div class="faq">
          <h3>4. How/What Will we learn from your content/channel?</h3>
          <p>At PODCUSSION, youll learn by listening to our thoughts and conversations that matter. We dive into everything from personal growth, AI, tech, future dreams, to stories that shape our world. Each episode offers insights, laughter, and fresh perspectives that help you understand life a little better. Whether you're reflecting on your goals or just curious about what's next — this is your space to think, feel, and connect.</p>
        </div>
      `;
      break;

    case 'logo':
      content = `
        <h2>Our Logo FAQs</h2>

      <div class="faq">
          <h3>1. Our Logo</h3>
          <img src="https://yt3.googleusercontent.com/gc3NyY5wIEXupglw2X-TaRH5TyGradLdHiGIetNsNxNGf3gOI72CosAVR04TIE5Lhe4qSR2d=s160-c-k-c0x00ffffff-no-rj" alt="PODCUSSION Logo" style="width: 100%; height: auto; border-radius: 10px; box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);">
        </div>

        <div class="faq">
          <h3>2. What does the PODCUSSION logo represent?</h3>
          <p>Our logo symbolizes sound waves and dialogue—designed to reflect the dynamic, inclusive, and evolving nature of podcasting.</p>
        </div>

        <div class="faq">
          <h3>3. Why did you choose blue as the theme color?</h3>
          <p>Blue represents clarity, depth, and trust. It visually aligns with the immersive experience we offer through our podcast content.</p>
        </div>

        <div class="faq">
          <h3>4. Is the logo custom-made?</h3>
          <p>Yes, the PODCUSSION logo is custom-designed by our in-house creative team to be instantly recognizable and meaningful.</p>
        </div>

        <div class="faq">
          <h3>5. What Is Your Logo Tagline?</h3>
          <p>Our logo tagline is "Its not just Talking theres also learning"</p>
        </div>
      `;
      break;

    case 'videos':
      content = `
        <h2>You Can Watch Our Videos Here!</h2>
        <iframe src="https://www.youtube.com/embed/YQIf2XJX4O4" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/OyZfJqaO8K4" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/CRmr4pMmuE0" allowfullscreen></iframe>
      `;
      break;

    case 'comingsoon':
      content = `
        <h2>Quarter 4</h2>
        <div class="faq">
          <h3>1. How many is your Total Subscribers and Recent Views?</h3>
          <p>We are at Currently 28 subscribers and 63 recent views with a 6.1 watch time (hours)</p>
        </div>

        <div class="faq">
          <h3>2. What is your Content Analytics?</h3>
          <p>Our top Videos are, Episode 3: Apec Life + AI Talk? Tara Kwentuhan 🤖🧑‍🏫 with 25 recent views and Episode 2: Usapang Pangarap ba? Let's talk about our future! With 22 recent views And Episode 1 Usapang Pangarap ba? Let's talk about our future! 🎙️ TEASER with 16 recent views</p>
        </div>

        <div class="faq">
          <h3>3. How and where do viewers find your videos?</h3>
          <p>Our videos are found at Playlists that has 28.6% of where are videos are mostly located and Channel Pages with 22.2% of where are videos are mostly located and External with 15.9% of where are videos are located</p>
        </div>

        <div class="faq">
          <h3>4. What is Your Audience Analytics</h3>
          <p>We currently have 8 returning viewers and 18 unique viewers</p>
        </div>

      <div class="faq">
          <h3>5. What is the device type that your videos are mostly watched from?</h3>
          <p>There are three device types where our videos are mostly watched from such as Computers, Mobile, and Tablet, let's start with computers that has a 82.2% of where our videos are mostly watched from, then Mobile with a 16.6% of where our videos are mostly watched from, and lastly the tablet with a 1.3% of where our videos are watched from</p>
      </div>

      <div class="faq">
          <h3>6. Our Video</h3>
            <iframe src="https://www.youtube.com/embed/CRmr4pMmuE0" allowfullscreen></iframe>
      </div>
      `;
      break;
  }

  contentArea.innerHTML = content;
}

function closeSection() {
  section.classList.remove('visible');
  contentArea.innerHTML = '';
}


document.querySelectorAll('.quarter').forEach(quarter => {
  quarter.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

document.addEventListener('mousemove', e => {
  const dot = document.createElement('div');
  dot.classList.add('cursor-dot');
  dot.style.left = `${e.clientX}px`;
  dot.style.top = `${e.clientY}px`;
  document.body.appendChild(dot);


  setTimeout(() => {
    dot.remove();
  }, 600);
});

const easterEgg = document.getElementById('easterEgg');
const secretSpot = document.getElementById('secretSpot');
if (secretSpot) {
  secretSpot.addEventListener('click', () => {
    if (easterEgg) {
      easterEgg.style.display = 'block';
      easterEgg.style.opacity = 1;
      easterEgg.innerHTML = 'Congratulations, you found the Easter Egg!';
      const easterSound = new Audio('easter-sound.mp3');
      easterSound.play();
    }
  });
}

let visitedQuarters = [];

function markQuarterVisited(quarterElement) {
  const quarterIndex = Array.from(document.querySelectorAll('.quarter')).indexOf(quarterElement);
  if (!visitedQuarters.includes(quarterIndex)) {
    visitedQuarters.push(quarterIndex);
    if (visitedQuarters.length === 4) {
      showBadge();
    }
  }
}

document.querySelectorAll('.quarter').forEach(quarter => {
  quarter.addEventListener('click', () => {
    const sectionId = quarter.querySelector('h2').textContent.split(':')[0].toLowerCase().replace(/\s+/g, '');
    openSection(sectionId);
    markQuarterVisited(quarter);
    playClick();
  });
});

function showBadge() {
  const badgeContainer = document.getElementById('badgeContainer');
  if (badgeContainer) {
    const badge = document.createElement('div');
    badge.classList.add('badge');
    badge.innerText = 'Explorer Badge!';
    badgeContainer.appendChild(badge);
    badgeContainer.style.display = 'block';
  }
}
