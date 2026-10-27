/**
 * emxuvabi — "Nhật Ký Tình Yêu Của Xù & Bi"
 * Vanilla JavaScript Logic
 * - Realtime Love Counter (Start: 29.12.2025)
 * - Falling Sakura Petals
 * - Scroll Reveal via Intersection Observer
 * - Polaroid Lightbox Popup
 * - Floating Music Player with Vinyl Rotation
 * - Interactive Sparkle Hearts Trail
 * - Canvas Heart Confetti Cannon
 */

document.addEventListener('DOMContentLoaded', () => {

  // ========================================================================
  // 1. Loading Screen
  // ========================================================================
  const loadingScreen = document.getElementById('loading-screen');
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (loadingScreen) {
        loadingScreen.classList.add('hidden');
      }
    }, 1400);
  });

  // Fallback in case load takes too long
  setTimeout(() => {
    if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
      loadingScreen.classList.add('hidden');
    }
  }, 3500);

  // ========================================================================
  // 2. Realtime Love Counter
  //    Start Date: 29/12/2025 00:00:00 (GMT+7 Vietnam Time)
  // ========================================================================
  const countYears = document.getElementById('count-years');
  const countMonths = document.getElementById('count-months');
  const countDays = document.getElementById('count-days');
  const countHours = document.getElementById('count-hours');
  const countMinutes = document.getElementById('count-minutes');
  const countSeconds = document.getElementById('count-seconds');

  // Start Date: 29 Dec 2025 00:00:00
  const startDate = new Date(2025, 11, 29, 0, 0, 0); // month is 0-indexed: 11 = December

  function updateLoveCounter() {
    const now = new Date();
    
    // Check if current date is before start date or after
    let isFuture = now < startDate;
    let diff = Math.abs(now - startDate);

    // Calculate calendar breakdown
    let d1 = isFuture ? now : startDate;
    let d2 = isFuture ? startDate : now;

    let years = d2.getFullYear() - d1.getFullYear();
    let months = d2.getMonth() - d1.getMonth();
    let days = d2.getDate() - d1.getDate();
    let hours = d2.getHours() - d1.getHours();
    let minutes = d2.getMinutes() - d1.getMinutes();
    let seconds = d2.getSeconds() - d1.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      // get days in previous month
      let prevMonth = new Date(d2.getFullYear(), d2.getMonth(), 0);
      days += prevMonth.getDate();
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }

    if (years < 0) years = 0;

    if (countYears) countYears.textContent = years;
    if (countMonths) countMonths.textContent = months;
    if (countDays) countDays.textContent = days;
    if (countHours) countHours.textContent = String(hours).padStart(2, '0');
    if (countMinutes) countMinutes.textContent = String(minutes).padStart(2, '0');
    if (countSeconds) countSeconds.textContent = String(seconds).padStart(2, '0');
  }

  updateLoveCounter();
  setInterval(updateLoveCounter, 1000);

  // ========================================================================
  // 3. Falling Sakura Petals in Hero Section
  // ========================================================================
  const petalsContainer = document.getElementById('petals-container');
  if (petalsContainer) {
    const petalCount = 22;
    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal';
      
      const size = Math.random() * 12 + 10; // 10px to 22px
      const left = Math.random() * 100; // 0% to 100%
      const duration = Math.random() * 7 + 6; // 6s to 13s
      const delay = Math.random() * 8; // 0s to 8s
      const opacity = Math.random() * 0.45 + 0.35; // 0.35 to 0.8

      petal.style.width = `${size}px`;
      petal.style.height = `${size * 1.3}px`;
      petal.style.left = `${left}%`;
      petal.style.animationDuration = `${duration}s`;
      petal.style.animationDelay = `${delay}s`;
      petal.style.opacity = opacity;

      petalsContainer.appendChild(petal);
    }
  }

  // ========================================================================
  // 4. Parallax Background in Hero
  // ========================================================================
  const heroBg = document.getElementById('hero-bg');
  window.addEventListener('scroll', () => {
    if (heroBg && window.scrollY < window.innerHeight) {
      heroBg.style.transform = `translateY(${window.scrollY * 0.22}px) scale(1.02)`;
    }
  }, { passive: true });

  // ========================================================================
  // 5. Scroll Reveal with Intersection Observer
  // ========================================================================
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.12
  });

  reveals.forEach(el => revealObserver.observe(el));

  // ========================================================================
  // 6. Polaroid Lightbox Popup
  // ========================================================================
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  window.openLightbox = function(src, caption) {
    if (lightbox && lightboxImg && lightboxCaption) {
      lightboxImg.src = src;
      lightboxCaption.textContent = caption || '';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // ========================================================================
  // 7. Floating Music Player
  // ========================================================================
  const musicWidget = document.getElementById('music-widget');
  const musicBtn = document.getElementById('music-btn');
  const bgAudio = document.getElementById('bg-audio');
  const musicProgress = document.getElementById('music-progress');
  const musicTrack = document.getElementById('music-track');

  let isPlaying = false;
  let drawerTimeout;

  if (musicBtn && bgAudio) {
    musicBtn.addEventListener('click', () => {
      if (!isPlaying) {
        bgAudio.play().then(() => {
          isPlaying = true;
          musicBtn.classList.add('playing');
          if (musicWidget) musicWidget.classList.add('expanded');
          
          // Auto collapse drawer after 6s
          clearTimeout(drawerTimeout);
          drawerTimeout = setTimeout(() => {
            if (musicWidget) musicWidget.classList.remove('expanded');
          }, 6000);
        }).catch(err => {
          console.warn('Audio playback error:', err);
        });
      } else {
        bgAudio.pause();
        isPlaying = false;
        musicBtn.classList.remove('playing');
      }
    });

    // Expand on hover
    if (musicWidget) {
      musicWidget.addEventListener('mouseenter', () => {
        musicWidget.classList.add('expanded');
        clearTimeout(drawerTimeout);
      });
      musicWidget.addEventListener('mouseleave', () => {
        if (isPlaying) {
          drawerTimeout = setTimeout(() => {
            musicWidget.classList.remove('expanded');
          }, 2000);
        }
      });
    }

    // Time progress
    bgAudio.addEventListener('timeupdate', () => {
      if (bgAudio.duration && musicProgress) {
        const percent = (bgAudio.currentTime / bgAudio.duration) * 100;
        musicProgress.style.width = `${percent}%`;
      }
    });

    // Seek track
    if (musicTrack) {
      musicTrack.addEventListener('click', (e) => {
        if (bgAudio.duration) {
          const rect = musicTrack.getBoundingClientRect();
          const clickPos = (e.clientX - rect.left) / rect.width;
          bgAudio.currentTime = clickPos * bgAudio.duration;
        }
      });
    }
  }

  // ========================================================================
  // 8. Interactive Cursor Sparkle Hearts Trail
  // ========================================================================
  const heartSymbols = ['♥', '💕', '✨', '💖', '🌸', '🤍'];
  let lastHeartTime = 0;

  function createSparkleHeart(x, y) {
    const now = Date.now();
    if (now - lastHeartTime < 50) return; // throttle
    lastHeartTime = now;

    const el = document.createElement('div');
    el.className = 'sparkle-heart';
    el.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    
    const randomTx = (Math.random() - 0.5) * 60;
    el.style.setProperty('--tx', `${randomTx}px`);
    el.style.left = `${x - 10}px`;
    el.style.top = `${y - 10}px`;
    
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }

  window.addEventListener('mousemove', (e) => {
    // Only spawn occasionally for elegance
    if (Math.random() > 0.4) {
      createSparkleHeart(e.clientX, e.clientY);
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      createSparkleHeart(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  // ========================================================================
  // 9. Confetti & Heart Shower Cannon
  // ========================================================================
  const canvas = document.getElementById('confetti-canvas');
  let ctx = canvas ? canvas.getContext('2d') : null;
  let particles = [];
  let isConfettiRunning = false;

  function resizeCanvas() {
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const confettiColors = ['#F4A0B5', '#FDDDE6', '#E8967C', '#D4A574', '#FF7B92', '#FFF8F0', '#FFB7C5'];

  function fireHeartConfetti() {
    if (!canvas || !ctx) return;
    resizeCanvas();

    const count = 75;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: canvas.height * 0.8,
        vx: (Math.random() - 0.5) * 14,
        vy: -(Math.random() * 12 + 8),
        size: Math.random() * 14 + 10,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 8,
        opacity: 1,
        type: Math.random() > 0.4 ? 'heart' : 'circle',
        decay: Math.random() * 0.008 + 0.006
      });
    }

    if (!isConfettiRunning) {
      isConfettiRunning = true;
      requestAnimationFrame(renderConfetti);
    }
  }

  function drawHeart(x, y, size, color, opacity, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(0, topCurveHeight);
    // top left curve
    ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
    // bottom left curve
    ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, (size + topCurveHeight) / 2, 0, size);
    // bottom right curve
    ctx.bezierCurveTo(0, (size + topCurveHeight) / 2, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
    // top right curve
    ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function renderConfetti() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.28; // gravity
      p.vx *= 0.98; // air drag
      p.rotation += p.rotationSpeed;
      p.opacity -= p.decay;

      if (p.opacity <= 0 || p.y > canvas.height + 50) {
        particles.splice(i, 1);
        continue;
      }

      if (p.type === 'heart') {
        drawHeart(p.x, p.y, p.size, p.color, p.opacity, p.rotation);
      } else {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size / 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    if (particles.length > 0) {
      requestAnimationFrame(renderConfetti);
    } else {
      isConfettiRunning = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  // Footer Heart & Button click handlers
  const footerHeart = document.getElementById('footer-heart');
  const btnConfetti = document.getElementById('btn-confetti');

  if (footerHeart) {
    footerHeart.addEventListener('click', fireHeartConfetti);
  }
  if (btnConfetti) {
    btnConfetti.addEventListener('click', fireHeartConfetti);
  }

  // Fire confetti automatically once when scrolling near footer
  const footerEl = document.getElementById('footer');
  let hasFiredFooterConfetti = false;
  if (footerEl) {
    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasFiredFooterConfetti) {
          hasFiredFooterConfetti = true;
          fireHeartConfetti();
        }
      });
    }, { threshold: 0.3 });
    footerObserver.observe(footerEl);
  }

});
