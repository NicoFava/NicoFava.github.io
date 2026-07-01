/* ===================================================================
   PARTICLES.JS — Canvas particle network animation
   Lightweight, performant background effect
   =================================================================== */

(function () {
  'use strict';

  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: null, y: null };
  let animationId;

  /* --- Configuration --- */
  const CONFIG = {
    particleCount: 70,
    particleMinRadius: 1,
    particleMaxRadius: 2.5,
    particleSpeed: 0.3,
    connectionDistance: 150,
    particleOpacity: 0.4,
    lineOpacity: 0.08,
    mouseRadius: 200,
    color: '96, 165, 250', /* --accent in RGB */
    responsive: [
      { breakpoint: 768, particleCount: 40, connectionDistance: 120 },
      { breakpoint: 480, particleCount: 25, connectionDistance: 100 }
    ]
  };

  /* --- Get responsive config --- */
  function getConfig() {
    const width = window.innerWidth;
    for (const bp of CONFIG.responsive) {
      if (width <= bp.breakpoint) {
        return { ...CONFIG, ...bp };
      }
    }
    return CONFIG;
  }

  /* --- Particle class --- */
  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      const conf = getConfig();
      this.radius = Math.random() * (CONFIG.particleMaxRadius - CONFIG.particleMinRadius) + CONFIG.particleMinRadius;
      this.vx = (Math.random() - 0.5) * conf.particleSpeed * 2;
      this.vy = (Math.random() - 0.5) * conf.particleSpeed * 2;
      this.opacity = Math.random() * CONFIG.particleOpacity + 0.1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      /* Bounce off edges */
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

      /* Subtle mouse interaction */
      if (mouse.x !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.mouseRadius) {
          const force = (CONFIG.mouseRadius - dist) / CONFIG.mouseRadius;
          this.x += dx * force * 0.01;
          this.y += dy * force * 0.01;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${CONFIG.color}, ${this.opacity})`;
      ctx.fill();
    }
  }

  /* --- Initialize particles --- */
  function initParticles() {
    const conf = getConfig();
    particles = [];
    for (let i = 0; i < conf.particleCount; i++) {
      particles.push(new Particle());
    }
  }

  /* --- Draw connections --- */
  function drawConnections() {
    const conf = getConfig();
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < conf.connectionDistance) {
          const opacity = (1 - dist / conf.connectionDistance) * CONFIG.lineOpacity;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${CONFIG.color}, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  /* --- Animation loop --- */
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    drawConnections();
    animationId = requestAnimationFrame(animate);
  }

  /* --- Resize handler --- */
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  }

  /* --- Mouse tracking --- */
  function handleMouseMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  function handleMouseLeave() {
    mouse.x = null;
    mouse.y = null;
  }

  /* --- Init --- */
  let resizeTimeout;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeCanvas, 200);
  });

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseleave', handleMouseLeave);

  resizeCanvas();
  animate();

  /* --- Visibility API: pause when tab is not visible --- */
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });
})();
