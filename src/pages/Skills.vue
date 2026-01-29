<template>
  <div class="skills-page">
    <main class="container mx-auto px-4 py-12 bg-primary">
      <!-- Header Section -->
      <section class="text-center mb-16" data-aos="fade-down">
        <h1 class="text-5xl md:text-6xl font-bold mb-4 text-light">
          My <span class="text-accent">Skills</span>
        </h1>
        <p class="text-xl text-secondary max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Technologies I specialize in and tools I work with daily
        </p>
      </section>

      <!-- Skills Grid -->
      <div class="skills-grid">
        <div 
          v-for="(skill, index) in skills" 
          :key="index"
          class="skill-card group"
          data-aos="fade-up"
          :data-aos-delay="100 + (index * 50)"
          @mousemove="tiltCard($event, index)"
          @mouseleave="resetTilt(index)"
        >
          <div class="skill-icon">
            <img 
              :src="skill.icon" 
              :alt="skill.name" 
              class="icon"
            />
          </div>
          <h3 class="skill-title">{{ skill.name }}</h3>
          <p class="skill-description">{{ skill.description }}</p>
          
          <div class="progress-container">
            <span class="percentage">{{ skill.level }}%</span>
            <div class="progress-bar">
              <div 
                class="progress" 
                :style="{
                  '--progress-color': skillColors[index],
                  '--progress-width': '0%'
                }"
                :data-width="skill.level + '%'"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import AOS from 'aos';

export default {
  data() {
    return {
      cardTilts: Array(12).fill({ x: 0, y: 0 }),
      skillColors: [
        '#EF233C', '#4CC9F0', '#7209B7', '#F72585', 
        '#4895EF', '#3A0CA3', '#4361EE', '#3F37C9',
        '#560BAD', '#B5179E', '#480CA8', '#4CC9F0'
      ],
      skills: [
        {
          name: "Vue.js",
          description: "Progressive framework for building user interfaces",
          level: 95,
          icon: "https://img.icons8.com/external-tal-revivo-filled-tal-revivo/50/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-filled-tal-revivo.png"
        },
        {
          name: "React",
          description: "JavaScript library for building component-based UIs",
          level: 85,
          icon: "https://img.icons8.com/office/40/react.png"
        },
        {
          name: "JavaScript",
          description: "Core language for web interactivity and functionality",
          level: 95,
          icon: "https://img.icons8.com/ios-filled/50/javascript-logo.png"
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework for rapid UI development",
          level: 90,
          icon: "https://img.icons8.com/plasticine/100/tailwind_css.png"
        },
        {
          name: "GSAP",
          description: "Professional-grade animation library for the web",
          level: 80,
          icon: "data:image/png;base64,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"
        },
        {
          name: "HTML5",
          description: "Semantic markup for structuring web content",
          level: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
          name: "CSS3",
          description: "Styling and visual effects for modern web",
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        {
          name: "Git",
          description: "Distributed version control system",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        },
        {
          name: "Node.js",
          description: "JavaScript runtime built on Chrome's V8 engine",
          level: 80,
          icon: "https://img.icons8.com/fluency/48/node-js.png"
        },
        {
          name: "TypeScript",
          description: "Typed JavaScript for better tooling",
          level: 75,
          icon: "https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-regular-tal-revivo.png"
        },
        {
          name: "Figma",
          description: "Collaborative interface design tool",
          level: 75,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        },
        {
          name: "Firebase",
          description: "Backend-as-a-service platform",
          level: 75,
          icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-firebase-a-googles-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-logo-shadow-tal-revivo.png"
        }
      ]
    }
  },
  methods: {
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
      
      card.style.transform = `rotateX(${this.cardTilts[index].x}deg) rotateY(${this.cardTilts[index].y}deg) scale(1.05)`;
    },
    resetTilt(index) {
      this.cardTilts[index] = { x: 0, y: 0 };
      document.querySelectorAll('.skill-card')[index].style.transform = '';
    },
    animateProgressBars() {
      const progressBars = document.querySelectorAll('.progress');
      progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        setTimeout(() => {
          bar.style.setProperty('--progress-width', targetWidth);
        }, 100);
      });
    }
  },
  mounted() {
    AOS.init({
      duration: 600,
      easing: 'ease-out-quart',
      once: true,
      offset: 50
    });

    this.$nextTick(() => {
      this.animateProgressBars();
    });
  }
}
</script>

<style scoped>
.skills-page {
  @apply min-h-screen bg-primary relative overflow-hidden;
}

.text-light {
  color: #EDF2F4;
}

.text-secondary {
  color: #8D99AE;
}

.text-accent {
  color: #EF233C;
}

.skills-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6;
}

.skill-card {
  @apply p-6 rounded-xl border border-secondary bg-primary-dark transition-all duration-300;
  transform-style: preserve-3d;
  perspective: 1000px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  will-change: transform;
}

.skill-card:hover {
  @apply border-accent;
  box-shadow: 0 15px 30px rgba(239, 35, 60, 0.3);
}

.skill-icon {
  @apply w-16 h-16 p-3 mx-auto mb-4 rounded-full bg-primary border border-secondary;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
}

.skill-icon img {
  @apply w-full h-full object-contain;
  filter: invert(34%) sepia(76%) saturate(1352%) hue-rotate(327deg) brightness(94%) contrast(92%);
  transition: all 0.3s ease;
}

.skill-card:hover .skill-icon img {
  filter: invert(94%) sepia(5%) saturate(209%) hue-rotate(201deg) brightness(96%) contrast(92%);
  transform: translateZ(10px);
}

.skill-title {
  @apply text-xl font-bold text-center mb-2 text-light;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
}

.skill-card:hover .skill-title {
  @apply text-accent;
  transform: translateZ(10px);
}

.skill-description {
  @apply text-sm text-secondary text-center mb-4;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
}

.skill-card:hover .skill-description {
  @apply text-light;
  transform: translateZ(5px);
}

.progress-container {
  @apply flex items-center gap-3 w-full mt-4;
}

.percentage {
  @apply text-sm font-medium text-light w-10 text-right;
}

.progress-bar {
  @apply flex-1 h-3 rounded-full bg-secondary overflow-hidden;
}

.progress {
  height: 100%;
  border-radius: 1rem;
  background: var(--progress-color);
  width: var(--progress-width);
  transition: width 1s cubic-bezier(0.65, 0, 0.35, 1);
  position: relative;
  overflow: hidden;
}

.progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transform: translateX(-100%);
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .skills-grid {
    @apply grid-cols-2;
  }
}

@media (max-width: 640px) {
  .skills-grid {
    @apply grid-cols-1;
  }
}
</style>