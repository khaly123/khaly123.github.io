<template>
  <div>
    <Navbar />
    <section class="skills">
      <h1 class="fade-in">Skills</h1>
      <p class="fade-in delay-1">Here are the technologies I specialize in.</p>

      <div class="skills-grid">
        <div class="skill-card slide-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
          <h3>React</h3>
          <p>Modern UI library for building fast, responsive, component-based interfaces.</p>
        </div>

        <div class="skill-card slide-up delay-1">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" />
          <h3>Flutter</h3>
          <p>Cross-platform mobile framework for building beautiful native apps with Dart.</p>
        </div>

        <div class="skill-card slide-up delay-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
          <h3>HTML5</h3>
          <p>Foundation of web content structure and semantics using clean markup.</p>
        </div>

        <div class="skill-card slide-up delay-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
          <h3>JavaScript</h3>
          <p>Powerful scripting language enabling dynamic, interactive web experiences.</p>
        </div>

        <div class="skill-card slide-up delay-4">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
          <h3>CSS3</h3>
          <p>Beautiful, responsive styles and animations crafted with modern CSS features.</p>
        </div>

        <div class="skill-card slide-up delay-5">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
          <h3>Python</h3>
          <p>Flexible language great for web, scripting, automation, and machine learning.</p>
        </div>

        <div class="skill-card slide-up delay-6">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue" />
          <h3>Vue.js</h3>
          <p>Progressive JavaScript framework for building elegant and reactive UIs.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default { components: { Navbar } };
</script>

<style scoped>
.skills {
  padding: 5rem 2rem;
  text-align: center;
  color: white;
}

h1 {
  color: cyan;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 15px cyan;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #e0e0e0;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
}

.skill-card {
  width: 250px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 2rem 1rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 35px rgba(0, 255, 255, 0.2);
}

.skill-card img {
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
}

.skill-card h3 {
  color: cyan;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.skill-card p {
  font-size: 0.95rem;
  color: #f0f0f0;
}

/* Animations */
.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
}

.slide-up {
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 1s ease forwards;
}

.delay-1 { animation-delay: 0.3s; }
.delay-2 { animation-delay: 0.6s; }
.delay-3 { animation-delay: 0.9s; }
.delay-4 { animation-delay: 1.2s; }
.delay-5 { animation-delay: 1.5s; }
.delay-6 { animation-delay: 1.8s; }

@keyframes fadeIn {
  to { opacity: 1; }
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
