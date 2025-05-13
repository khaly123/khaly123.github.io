<template>
  <div class="about-container">
    <Navbar />
    <section class="about">
      <h1 class="fade-in">About Me</h1>
      <div class="card-container">
        <div class="card slide-up">
          <h2>Frontend Developer</h2>
          <p>
            I'm a passionate <span class="highlight">Frontend Developer</span> who loves transforming ideas into visually stunning and interactive digital experiences.
            With a keen eye for detail and design, I specialize in building responsive web interfaces using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and frameworks like <strong>Vue.js</strong>.
          </p>
        </div>
        <div class="card slide-up delay-1">
          <h2>Mission</h2>
          <p>
            My mission is to craft engaging user interfaces that are not only visually appealing but also accessible and performant. I believe great design is invisible—it just works.
          </p>
        </div>
        <div class="card slide-up delay-2">
          <h2>Exploration</h2>
          <p>
            When I’m not coding, I’m exploring design trends, creating UI mockups, or learning about the latest web technologies. Let's build something amazing together!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  components: {
    Navbar
  }
};
</script>

<style scoped>
.about-container {
  color: white;
  padding-top: 4rem;
}

.about {
  max-width: 1200px;
  margin: auto;
  padding: 3rem 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: cyan;
  text-shadow: 0 0 15px cyan;
}

.card-container {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 3rem;
}

.card {
  background: rgba(255, 255, 255, 0.1); /* Light frosted effect */
  border-radius: 12px;
  padding: 2rem;
  width: 30%;
  backdrop-filter: blur(10px); /* Glass effect */
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.card h2 {
  font-size: 1.8rem;
  color: cyan;
  margin-bottom: 1rem;
}

.card p {
  font-size: 1.1rem;
  line-height: 1.6;
}

.highlight {
  color: cyan;
  font-weight: bold;
  text-shadow: 0 0 10px cyan;
}

strong {
  color: #00ffff;
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

.delay-1 {
  animation-delay: 0.5s;
}

.delay-2 {
  animation-delay: 1s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
