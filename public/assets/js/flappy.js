const CHICKEN_SPRITE = new Image();
CHICKEN_SPRITE.src = 'https://images.unsplash.com/photo-1725477905503-cb1090e013e0?w=64&h=64&fit=crop';

const IMG_CHICKEN2 = new Image();
IMG_CHICKEN2.src = 'https://images.unsplash.com/photo-1771160014674-2fb716459edb?w=64&h=64&fit=crop';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const scoreEl = document.getElementById('score');
  const highscoreEl = document.getElementById('highscore');
  const startBtn = document.getElementById('startGame');
  const difficultySelect = document.getElementById('difficulty');

  if (!canvas || !ctx || !scoreEl || !highscoreEl || !startBtn) return;

  let gameRunning = false;
  let score = 0;
  let highscore = parseInt(localStorage.getItem('flappyHighscore') || '0');
  let highscoreEasy = parseInt(localStorage.getItem('flappyHighscoreEasy') || '0');
  highscoreEl.textContent = highscore;

  const chicken = {
    x: 60, y: 250, width: 30, height: 30,
    velocity: 0, gravity: 0.45, jump: -7.5,
    rotation: 0, wingPhase: 0
  };

  let pipes = [];
  let frame = 0;
  let pipeSpeed = 3;
  let pipeGap = 130;
  let pipeWidth = 40;
  let pipeSpawnRate = 100;
  let difficulty = 'normal';

  let particles = [];
  let groundOffset = 0;
  let stars = [];
  let combo = 0;

  const pipeColor = '#27AE60';
  const pipeTopColor = '#2ECC71';
  const groundY = 460;
  const GROUND_SCROLL_SPEED = 2;

  for (let i = 0; i < 30; i++) {
    stars.push({ x: Math.random() * canvas.width, y: Math.random() * 200, size: Math.random() * 2 + 1, speed: Math.random() * 0.5 + 0.1 });
  }

  function setDifficulty(diff) {
    difficulty = diff;
    if (diff === 'easy') { pipeGap = 150; pipeSpeed = 2.5; pipeSpawnRate = 120; chicken.gravity = 0.4; chicken.jump = -7; }
    else if (diff === 'normal') { pipeGap = 130; pipeSpeed = 3; pipeSpawnRate = 100; chicken.gravity = 0.45; chicken.jump = -7.5; }
    else if (diff === 'hard') { pipeGap = 110; pipeSpeed = 4; pipeSpawnRate = 80; chicken.gravity = 0.5; chicken.jump = -8; }
    else if (diff === 'impossible') { pipeGap = 90; pipeSpeed = 5; pipeSpawnRate = 65; chicken.gravity = 0.55; chicken.jump = -8.5; }
  }

  function resetGame() {
    chicken.y = 250; chicken.velocity = 0; chicken.rotation = 0; chicken.wingPhase = 0;
    pipes = []; particles = []; score = 0; combo = 0; frame = 0;
    scoreEl.textContent = '0';
    if (difficultySelect) setDifficulty(difficultySelect.value);
  }

  function spawnParticles(x, y, color, count) {
    for (let i = 0; i < count; i++) {
      particles.push({
        x, y, vx: (Math.random() - 0.5) * 4, vy: (Math.random() - 0.5) * 4 - 2,
        life: 1, decay: Math.random() * 0.03 + 0.01, size: Math.random() * 4 + 2, color
      });
    }
  }

  function drawChicken(x, y) {
    ctx.save();
    const targetRot = Math.max(-0.6, Math.min(0.8, chicken.velocity * 0.06));
    chicken.rotation += (targetRot - chicken.rotation) * 0.15;
    ctx.translate(x + chicken.width / 2, y + chicken.height / 2);
    ctx.rotate(chicken.rotation);

    chicken.wingPhase += 0.15;
    const wingFlap = Math.sin(chicken.wingPhase) * 5;

    if (CHICKEN_SPRITE.complete && CHICKEN_SPRITE.naturalWidth > 0) {
      ctx.drawImage(CHICKEN_SPRITE, -chicken.width / 2, -chicken.height / 2 + wingFlap * 0.2, chicken.width, chicken.height);
    } else {
      ctx.fillStyle = '#E8852E';
      ctx.beginPath();
      ctx.ellipse(0, 0, chicken.width / 2, chicken.height / 2.5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#C0392B';
      ctx.beginPath();
      ctx.moveTo(chicken.width / 2 - 2, -2);
      ctx.lineTo(chicken.width / 2 + 10, 0);
      ctx.lineTo(chicken.width / 2 - 2, 2);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(-4, -4, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#2C3E50';
      ctx.beginPath();
      ctx.arc(-2, -4, 2, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.strokeStyle = '#E8852E';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-5, wingFlap * 0.5);
    ctx.quadraticCurveTo(-15, -5 + wingFlap, -10, wingFlap * 0.8);
    ctx.stroke();

    ctx.restore();
  }

  function createPipe() {
    const minHeight = 40;
    const maxHeight = canvas.height - groundY - pipeGap - minHeight;
    const topHeight = Math.random() * (maxHeight - minHeight) + minHeight;
    pipes.push({
      x: canvas.width, topHeight, bottomY: topHeight + pipeGap,
      width: pipeWidth, scored: false
    });
  }

  function update() {
    if (!gameRunning) return;

    chicken.velocity += chicken.gravity;
    chicken.y += chicken.velocity;

    if (chicken.velocity < -2) spawnParticles(chicken.x + 15, chicken.y + 30, 'rgba(255,200,100,0.5)', 2);

    if (frame % pipeSpawnRate === 0) createPipe();
    if (frame % Math.floor(pipeSpawnRate / 3) === 0 && Math.random() < 0.3) createPipe();

    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].x -= pipeSpeed;
      if (pipes[i].x + pipes[i].width < 0) { pipes.splice(i, 1); continue; }
      if (!pipes[i].scored && pipes[i].x + pipes[i].width < chicken.x) {
        pipes[i].scored = true; score++; combo++;
        scoreEl.textContent = score;
        spawnParticles(chicken.x, chicken.y, 'rgba(255,215,0,0.7)', 10);
        if (combo >= 3) spawnParticles(chicken.x, chicken.y, 'rgba(255,215,0,0.9)', 15);
        if (score % 5 === 0 && pipeSpeed < 7) { pipeSpeed += 0.3; pipeGap = Math.max(85, pipeGap - 3); }
      }
    }

    groundOffset = (groundOffset + GROUND_SCROLL_SPEED) % 40;
    particles = particles.filter(p => { p.x += p.vx; p.y += p.vy; p.vy += 0.05; p.life -= p.decay; return p.life > 0; });
    checkCollision();
    stars.forEach(s => { s.y += s.speed; if (s.y > 200) s.y = 0; });
    frame++;
  }

  function checkCollision() {
    if (chicken.y + chicken.height > groundY || chicken.y < -20) { gameOver(); return; }
    for (const pipe of pipes) {
      if (chicken.x + chicken.width > pipe.x + 4 && chicken.x < pipe.x + pipe.width - 4) {
        if (chicken.y < pipe.topHeight + 4 || chicken.y + chicken.height > pipe.bottomY - 4) { gameOver(); spawnParticles(chicken.x + 15, chicken.y + 15, '#C0392B', 20); return; }
      }
    }
  }

  function gameOver() {
    gameRunning = false; combo = 0;
    let currentHighscore = difficulty === 'easy' ? highscoreEasy : highscore;
    if (score > currentHighscore) {
      if (difficulty === 'easy') { highscoreEasy = score; localStorage.setItem('flappyHighscoreEasy', highscoreEasy.toString()); }
      else { highscore = score; localStorage.setItem('flappyHighscore', highscore.toString()); }
      highscoreEl.textContent = score;
      spawnParticles(canvas.width / 2, canvas.height / 2, '#FFD700', 30);
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const grad = ctx.createLinearGradient(0, 0, 0, groundY);
    grad.addColorStop(0, '#4A90D9');
    grad.addColorStop(0.5, '#87CEEB');
    grad.addColorStop(1, '#B0E0E6');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, groundY);

    stars.forEach(s => { ctx.fillStyle = 'rgba(255,255,255,' + (0.3 + s.size * 0.2) + ')'; ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2); ctx.fill(); });

    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, groundY, canvas.width, canvas.height - groundY);
    ctx.fillStyle = '#6B8E23';
    ctx.fillRect(0, groundY - 4, canvas.width, 6);
    ctx.fillStyle = '#556B2F';
    for (let i = -groundOffset; i < canvas.width; i += 40) {
      ctx.fillRect(i, groundY - 3, 25, 4);
      ctx.fillRect(i + 20, groundY + 8, 15, 4);
    }

    for (const pipe of pipes) {
      ctx.fillStyle = pipeTopColor;
      ctx.shadowColor = 'rgba(0,0,0,0.2)';
      ctx.shadowBlur = 8;
      ctx.fillRect(pipe.x - 4, 0, pipe.width + 8, 12);
      ctx.shadowBlur = 0;
      ctx.fillStyle = pipeColor;
      ctx.fillRect(pipe.x, 0, pipe.width, pipe.topHeight);
      ctx.fillStyle = pipeTopColor;
      ctx.fillRect(pipe.x - 2, pipe.topHeight - 22, pipe.width + 4, 22);
      ctx.fillStyle = '#1E8449';
      ctx.fillRect(pipe.x + 4, pipe.topHeight - 8, pipe.width - 8, 4);

      ctx.fillStyle = pipeTopColor;
      ctx.shadowColor = 'rgba(0,0,0,0.2)';
      ctx.shadowBlur = 8;
      ctx.fillRect(pipe.x - 4, pipe.bottomY - 12, pipe.width + 8, 12);
      ctx.shadowBlur = 0;
      ctx.fillStyle = pipeColor;
      ctx.fillRect(pipe.x, pipe.bottomY, pipe.width, canvas.height - pipe.bottomY);
      ctx.fillStyle = pipeTopColor;
      ctx.fillRect(pipe.x - 2, pipe.bottomY, pipe.width + 4, 22);
      ctx.fillStyle = '#1E8449';
      ctx.fillRect(pipe.x + 4, pipe.bottomY + 4, pipe.width - 8, 4);
    }

    drawChicken(chicken.x, chicken.y);

    particles.forEach(p => {
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    if (!gameRunning) drawOverlay();
  }

  function drawOverlay() {
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    if (score > 0) {
      ctx.font = 'bold 40px Arial';
      ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 60);
      ctx.font = '28px Arial';
      ctx.fillText('Score: ' + score, canvas.width / 2, canvas.height / 2 - 10);
      if (score >= 10) ctx.fillText('Poulet expert!', canvas.width / 2, canvas.height / 2 + 30);
      else if (score >= 5) ctx.fillText('Bon poulet!', canvas.width / 2, canvas.height / 2 + 30);
    } else {
      ctx.font = 'bold 34px Arial';
      ctx.fillText('FLAPPY CHICKEN', canvas.width / 2, canvas.height / 2 - 60);
      ctx.font = '22px Arial';
      ctx.fillText('Choisis ta difficulte et clique sur le bouton!', canvas.width / 2, canvas.height / 2 - 15);
      ctx.font = '16px Arial';
      ctx.fillText('Clique ou Espace pour voler', canvas.width / 2, canvas.height / 2 + 25);
    }
  }

  function gameLoop() { update(); draw(); requestAnimationFrame(gameLoop); }

  function startGame() {
    resetGame();
    gameRunning = true;
    startBtn.textContent = 'Rejouer !';
  }

  function jump() {
    if (score > 0 && !gameRunning) { startGame(); return; }
    if (!gameRunning) return;
    chicken.velocity = chicken.jump;
    chicken.wingPhase = 0;
    spawnParticles(chicken.x + 5, chicken.y + 25, 'rgba(255,200,100,0.6)', 3);
  }

  startBtn.addEventListener('click', startGame);
  canvas.addEventListener('click', jump);
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp') { e.preventDefault(); jump(); }
  });

  if (difficultySelect) difficultySelect.addEventListener('change', () => { if (!gameRunning) setDifficulty(difficultySelect.value); });

  resetGame();
  gameLoop();
});
