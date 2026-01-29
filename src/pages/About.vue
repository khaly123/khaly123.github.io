<template>
  <div class="about-page ">
    <main class="container mx-auto px-4 py-12">
      <!-- Hero Section -->
      <section class="text-center mb-20" data-aos="fade-down">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-light">
          About <span class="text-accent">Me</span>
        </h1>
        <p class="text-xl text-secondary max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Crafting digital experiences with precision and passion
        </p>
      </section>

      <!-- Bio Section -->
      <section class="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div class="order-2 md:order-1" data-aos="fade-right">
          <div class="relative group">
            <div class="w-full h-full border-4 border-accent rounded-xl absolute -bottom-3 -right-3 z-0 transition-all duration-200 group-hover:-bottom-4 group-hover:-right-4 group-hover:opacity-90"></div>
            <img 
              :src="profileImage" 
              alt="Profile" 
              class="relative z-10 rounded-xl w-full h-auto object-cover shadow-xl transition-transform duration-200 group-hover:scale-102"
            >
          </div>
        </div>
        <div class="order-1 md:order-2" data-aos="fade-left" data-aos-delay="200">
          <h2 class="text-3xl font-bold mb-6 text-light">My Journey</h2>
          <div class="space-y-6">
            <p class="text-secondary" data-aos="fade-up" data-aos-delay="300">
              I'm a <span class="text-accent font-medium">frontend developer</span> with a passion for creating responsive and visually appealing user interfaces. My journey began in 2019 when I built my first website, and since then I've been obsessed with crafting digital experiences.
            </p>
            <p class="text-secondary" data-aos="fade-up" data-aos-delay="400">
              I specialize in <span class="text-accent font-medium">Vue.js</span> and modern CSS frameworks like <span class="text-accent font-medium">Tailwind CSS</span>, focusing on performance, accessibility, and responsive design.
            </p>
          </div>

          <!-- Skills Cards -->
          <div class="grid grid-cols-2 gap-4 mt-8">
            <div class="skill-card" data-aos="zoom-in" data-aos-delay="500">
              <div class="text-accent text-3xl mb-2 hover:scale-110 transition-transform duration-150">💻</div>
              <h3 class="font-bold text-light group-hover:text-accent transition-colors duration-150">Frontend</h3>
              <p class="text-sm text-secondary group-hover:text-light transition-colors duration-150">Vue, React, JavaScript</p>
            </div>
            <div class="skill-card" data-aos="zoom-in" data-aos-delay="600">
              <div class="text-accent text-3xl mb-2 hover:scale-110 transition-transform duration-150">🎨</div>
              <h3 class="font-bold text-light group-hover:text-accent transition-colors duration-150">Design</h3>
              <p class="text-sm text-secondary group-hover:text-light transition-colors duration-150">UI/UX, Figma, Adobe</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section class="mb-24">
        <h2 class="text-3xl font-bold mb-12 text-center text-light" data-aos="fade-down">
          My <span class="text-accent">Experience</span>
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="exp-card" data-aos="fade-up" data-aos-delay="100">
            <div class="text-accent text-4xl mb-4 hover:scale-110 transition-transform duration-150">4+</div>
            <h3 class="text-xl font-bold text-light group-hover:text-accent transition-colors duration-150">Years Experience</h3>
            <p class="text-secondary group-hover:text-light transition-colors duration-150">Building web applications</p>
          </div>
          <div class="exp-card" data-aos="fade-up" data-aos-delay="200">
            <div class="text-accent text-4xl mb-4 hover:scale-110 transition-transform duration-150">30+</div>
            <h3 class="text-xl font-bold text-light group-hover:text-accent transition-colors duration-150">Projects</h3>
            <p class="text-secondary group-hover:text-light transition-colors duration-150">Done but not yet Deployed</p>
          </div>
          <div class="exp-card" data-aos="fade-up" data-aos-delay="200">
            <div class="text-accent text-4xl mb-4 hover:scale-110 transition-transform duration-150">5</div>
            <h3 class="text-xl font-bold text-light group-hover:text-accent transition-colors duration-150">Projects</h3>
            <p class="text-secondary group-hover:text-light transition-colors duration-150">Completed successfully</p>
          </div>
          <div class="exp-card" data-aos="fade-up" data-aos-delay="300">
            <div class="text-accent text-4xl mb-4 hover:scale-110 transition-transform duration-150">100%</div>
            <h3 class="text-xl font-bold text-light group-hover:text-accent transition-colors duration-150">Satisfaction</h3>
            <p class="text-secondary group-hover:text-light transition-colors duration-150">Client happiness</p>
          </div>
          <div class="exp-card" data-aos="fade-up" data-aos-delay="400">
            <div class="text-accent text-4xl mb-4 hover:scale-110 transition-transform duration-150">∞</div>
            <h3 class="text-xl font-bold text-light group-hover:text-accent transition-colors duration-150">Passion</h3>
            <p class="text-secondary group-hover:text-light transition-colors duration-150">For clean code</p>
          </div>
        </div>
      </section>

      <!-- Timeline Section -->
      <section>
        <h2 class="text-3xl font-bold mb-12 text-center text-light" data-aos="fade-down">
          My <span class="text-accent">Timeline</span>
        </h2>
        
        <div class="space-y-8 max-w-3xl mx-auto">
          <div 
            v-for="(item, index) in timeline" 
            :key="index"
            class="timeline-card group"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="absolute left-0 top-0 h-full w-1 bg-accent rounded-full group-hover:h-3/4 group-hover:top-1/4 transition-all duration-150"></div>
            <div class="pl-8">
              <div class="flex items-center mb-2">
                <div class="w-4 h-4 rounded-full bg-accent mr-3 group-hover:scale-125 transition-transform duration-150"></div>
                <h3 class="text-xl font-bold text-accent group-hover:translate-x-2 transition-transform duration-150">{{ item.year }}</h3>
              </div>
              <h4 class="text-lg font-semibold text-light mb-2 group-hover:text-accent transition-colors duration-150">{{ item.title }}</h4>
              <p class="text-secondary group-hover:text-light transition-colors duration-150">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import AOS from 'aos';
import profileImage from '../assets/by1.jpg';

export default {
  data() {
    return {
      profileImage,
      timeline: [
        {
          year: "2019",
          title: "Started Coding Journey",
          description: "Began learning web development fundamentals through online courses"
        },
        {
          year: "2020",
          title: "First Freelance Project",
          description: "Built a website for a local business using HTML, CSS and JavaScript"
        },
        {
          year: "2021",
          title: "Discovered Vue.js",
          description: "Fell in love with Vue's reactivity system and component architecture"
        },
        {
          year: "2022",
          title: "Professional Work",
          description: "Started working as a professional frontend developer"
        }
      ]
    }
  },
  mounted() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }
}
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background-color: #000000F6;
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

.border-accent {
  border-color: #EF233C;
}

/* Skill Cards */
.skill-card {
  background: rgba(43, 45, 66, 0.7);
  border: 2px solid rgba(239, 35, 60, 0.5);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.15s ease-out;
  backdrop-filter: blur(5px);
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.skill-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 25px rgba(239, 35, 60, 0.3);
  border-color: rgba(239, 35, 60, 0.9);
  background: rgba(43, 45, 66, 0.9);
}

/* Experience Cards */
.exp-card {
  background: rgba(43, 45, 66, 0.7);
  border: 2px solid rgba(239, 35, 60, 0.3);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.15s ease-out;
  backdrop-filter: blur(5px);
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.exp-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 20px 35px rgba(239, 35, 60, 0.4);
  border-color: rgba(239, 35, 60, 0.8);
  background: rgba(43, 45, 66, 0.95);
}

/* Timeline Cards */
.timeline-card {
  background: rgba(43, 45, 66, 0.7);
  border: 2px solid rgba(239, 35, 60, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  transition: all 0.15s ease-out;
  backdrop-filter: blur(5px);
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.timeline-card:hover {
  transform: translateX(12px);
  border-color: rgba(239, 35, 60, 0.7);
  background: rgba(43, 45, 66, 0.9);
  box-shadow: 0 10px 20px rgba(239, 35, 60, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .exp-card {
    padding: 1.5rem;
  }
  
  .timeline-card:hover {
    transform: translateX(6px);
  }
}
</style>