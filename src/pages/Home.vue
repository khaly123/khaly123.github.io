<template>
  <div class="page-container">
    <!-- 3D floating shapes background -->
    <div class="absolute inset-0 overflow-hidden">
      <div v-for="i in 12" :key="i" 
           class="absolute rounded-full bg-accentDark opacity-10"
           :style="shapeStyle(i)"></div>
    </div>

    <section class="homepage">
      <div class="content">
        <h1 data-aos="fade-down" data-aos-duration="800">
          <span class="inline-block">Hi, I'm</span>
          <span class="highlight inline-block transform transition-transform duration-700 hover:scale-110">
            Desmond Eli. A
          </span>
        </h1>
        
        <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <span class="typing-text"></span>
          <span class="cursor">|</span>
        </h2>

        <!-- Social Icons with 3D tilt effect -->
        <div class="social-icons" data-aos="zoom-in" data-aos-delay="400">
          <a v-for="(icon, index) in socialIcons" :key="index" 
             :href="icon.link" 
             class="social-card transform transition-all duration-500 hover:scale-110 hover:-translate-y-2"
             @mousemove="tiltCard($event, index)"
             @mouseleave="resetTilt(index)"
             data-aos="fade-up" 
             :data-aos-delay="400 + (index * 100)">
            <img :src="icon.src" :alt="icon.alt" class="icon w-8 h-8" />
          </a>
        </div>

        <div class="button-group" data-aos="fade-up" data-aos-delay="800">
          <a href="/Rusume_cv.pdf" 
             class="download-btn transform transition-all duration-500 hover:scale-105 hover:shadow-3d">
            Download CV
            <span class="btn-3d-effect"></span>
          </a>
          <a href="/bhilly_cv.pdf" 
             class="download-btn transform transition-all duration-500 hover:scale-105 hover:shadow-3d">
            Download Resume
            <span class="btn-3d-effect"></span>
          </a>
        </div>
      </div>

      <!-- 3D Profile Image Container -->
      <div class="profile-container" 
           @mousemove="tiltProfile" 
           @mouseleave="resetProfile"
           data-aos="fade-left" 
           data-aos-delay="600">
        <div class="profile-inner">
          <img src="../assets/by2.jpg" alt="Profile Picture" 
               class="profile-img transform transition-transform duration-700" />
          <div class="profile-border"></div>
          <div class="profile-shadow"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  data() {
    return {
      socialIcons: [
        { 
          src: "https://img.icons8.com/color/48/gmail-new.png",
          link: "mailto:khalydesmond@gmail.com",
          alt: "Gmail"
        },
        { 
          src: "https://img.icons8.com/ios-filled/50/whatsapp--v1.png",
          link: "https://wa.me/+233595484068",
          alt: "WhatsApp"
        },
        { 
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          link: "https://github.com/khaly123",
          alt: "GitHub"
        },
        { 
          src: "https://img.icons8.com/3d-fluency/94/phone.png",
          link: "tel:+233595484068",
          alt: "Phone"
        }
      ],
      profileTilt: { x: 0, y: 0 },
      cardTilts: Array(4).fill({ x: 0, y: 0 })
    };
  },
  mounted() {
    this.initTypingEffect();
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  },
  methods: {
    shapeStyle(index) {
      const size = Math.random() * 200 + 50;
      return {
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
        animation: `float ${Math.random() * 10 + 10}s linear infinite ${Math.random() * 5}s`,
        filter: 'blur(20px)'
      };
    },
    tiltCard(event, index) {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      this.cardTilts[index] = {
        x: (y - centerY) / 20,
        y: (centerX - x) / 20
      };
      
      card.style.transform = `rotateX(${this.cardTilts[index].x}deg) rotateY(${this.cardTilts[index].y}deg) scale(1.1)`;
    },
    resetTilt(index) {
      this.cardTilts[index] = { x: 0, y: 0 };
    },
    tiltProfile(event) {
      const container = event.currentTarget;
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      this.profileTilt = {
        x: (y - centerY) / 20,
        y: (centerX - x) / 20
      };
      
      container.querySelector('.profile-img').style.transform = 
        `rotateX(${this.profileTilt.x}deg) rotateY(${this.profileTilt.y}deg)`;
      container.querySelector('.profile-shadow').style.transform = 
        `translateX(${-this.profileTilt.y * 5}px) translateY(${this.profileTilt.x * 5}px)`;
    },
    resetProfile() {
      this.profileTilt = { x: 0, y: 0 };
      const profileImg = document.querySelector('.profile-img');
      const profileShadow = document.querySelector('.profile-shadow');
      if (profileImg) profileImg.style.transform = '';
      if (profileShadow) profileShadow.style.transform = '';
    },
    initTypingEffect() {
      const text = "Frontend Developer/Graphic Designer";
      const typingText = document.querySelector('.typing-text');
      const cursor = document.querySelector('.cursor');
      let i = 0;
      
      function type() {
        if (i < text.length) {
          typingText.textContent += text.charAt(i);
          i++;
          setTimeout(type, 100);
        } else {
          cursor.style.animation = 'blink 1s infinite';
        }
      }
      
      setTimeout(type, 1000);
    }
  }
};
</script>

<style scoped>
.page-container {
  @apply min-h-screen bg-primary relative overflow-hidden;
}

.homepage {
  @apply flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-20 max-w-6xl mx-auto min-h-screen relative z-10;
}

.content {
  @apply flex-1 md:mr-12 text-center md:text-left;
}

h1 {
  @apply text-4xl md:text-6xl font-bold mb-4 leading-tight text-light;
}

.highlight {
  @apply text-accent font-extrabold;
  text-shadow: 0 0 10px rgba(239, 35, 60, 0.7);
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: all 0.3s ease;
}

h2 {
  @apply text-xl md:text-2xl mb-8 min-h-8 text-secondary;
}

.typing-text {
  @apply inline-block;
}

.cursor {
  @apply inline-block ml-1;
  animation: none;
}

.social-icons {
  @apply flex justify-center md:justify-start gap-6 mb-8 flex-wrap;
}

.social-card {
  @apply w-16 h-16 rounded-2xl bg-primary flex items-center justify-center transition-all duration-500;
  transform-style: preserve-3d;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(239, 35, 60, 0.3);
  will-change: transform;
}

.social-card .icon {
  @apply w-8 h-8 transition-all duration-300;
  filter: invert(34%) sepia(76%) saturate(1352%) hue-rotate(327deg) brightness(94%) contrast(92%);
}

.social-card:hover .icon {
  filter: invert(94%) sepia(5%) saturate(209%) hue-rotate(201deg) brightness(96%) contrast(92%);
}

.button-group {
  @apply flex flex-col sm:flex-row gap-4 justify-center md:justify-start;
}

.download-btn {
  @apply px-8 py-4 rounded-xl font-bold text-light relative overflow-hidden transition-all duration-500;
  background: linear-gradient(135deg, #EF233C 0%, #D90429 100%);
  box-shadow: 0 5px 15px rgba(217, 4, 41, 0.4);
  transform-style: preserve-3d;
  will-change: transform;
}

.download-btn:hover {
  box-shadow: 0 8px 25px rgba(217, 4, 41, 0.6);
  transform: translateY(-3px);
}

.btn-3d-effect {
  @apply absolute inset-0 opacity-0 transition-opacity duration-300;
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%);
}

.download-btn:hover .btn-3d-effect {
  @apply opacity-100;
}

.profile-container {
  @apply mt-12 md:mt-0 w-64 h-64 md:w-80 md:h-80 relative cursor-pointer;
  transform-style: preserve-3d;
  perspective: 1000px;
  will-change: transform;
}

.profile-inner {
  @apply relative w-full h-full;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.profile-img {
  @apply w-full h-full object-cover rounded-2xl relative z-10;
  border: 4px solid #2B2D42;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transform-style: preserve-3d;
  transition: transform 0.3s;
  will-change: transform;
}

.profile-border {
  @apply absolute inset-0 rounded-2xl border-4 border-accent;
  transform: translateZ(-10px);
  opacity: 0.7;
}

.profile-shadow {
  @apply absolute inset-0 rounded-2xl bg-accentDark opacity-20 blur-md;
  transform: translateZ(-20px);
  transition: transform 0.3s;
}

/* Animations */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes float {
  0%, 100% {
    transform: translate(-50%, -50%) translateY(0) rotate(0deg);
  }
  50% {
    transform: translate(-50%, -50%) translateY(-20px) rotate(5deg);
  }
}

@keyframes textGlow {
  0% {
    text-shadow: 0 0 10px rgba(239, 35, 60, 0.5);
  }
  100% {
    text-shadow: 0 0 20px rgba(239, 35, 60, 0.8), 
                 0 0 30px rgba(239, 35, 60, 0.6);
  }
}

/* Additional animations */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.highlight:hover {
  animation: pulse 1.5s infinite;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .homepage {
    @apply pt-32 pb-20;
  }
  
  .content {
    @apply mb-12;
  }
  
  h1 {
    @apply text-5xl;
  }
  
  .profile-container {
    @apply w-64 h-64;
  }
}
</style>