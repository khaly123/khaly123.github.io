<template>
  <div>
    <Navbar />
    <section class="projects">
      <h1 class="fade-in">My Projects</h1>
      <p class="fade-in delay-1">Explore some of my latest work.</p>

      <!-- Website Projects -->
      <h2 class="fade-in delay-2">Website Projects</h2>
      <div class="card-container">
        <div class="card slide-up">
          <img src="https://source.unsplash.com/featured/?website,design" alt="Website 1" />
          <h3>Portfolio Website</h3>
          <p>A sleek modern portfolio to showcase personal work and achievements.</p>
          <a href="https://example.com" target="_blank">View Project</a>
        </div>

        <div class="card slide-up delay-1">
          <img src="https://source.unsplash.com/featured/?code,frontend" alt="Website 2" />
          <h3>Landing Page</h3>
          <p>A marketing landing page designed for high conversions.</p>
          <a href="https://example.com" target="_blank">View Project</a>
        </div>

        <div class="card slide-up delay-2">
          <img src="https://source.unsplash.com/featured/?dashboard,web" alt="Website 3" />
          <h3>Admin Dashboard</h3>
          <p>Responsive admin interface with real-time analytics.</p>
          <a href="https://example.com" target="_blank">View Project</a>
        </div>
      </div>

      <!-- Application Projects -->
      <h2 class="fade-in delay-3">Application Projects</h2>
      <div class="card-container">
        <div class="card slide-up">
          <img src="https://source.unsplash.com/featured/?app,ui" alt="App 1" />
          <h3>Task Manager App</h3>
          <p>Cross-platform app for productivity and task tracking.</p>
          <a href="https://example.com" target="_blank">View App</a>
        </div>

        <div class="card slide-up delay-1">
          <img src="https://source.unsplash.com/featured/?chat,app" alt="App 2" />
          <h3>Chat App</h3>
          <p>Realtime messaging application with group chat features.</p>
          <a href="https://example.com" target="_blank">View App</a>
        </div>

        <div class="card slide-up delay-2">
          <img src="https://source.unsplash.com/featured/?mobile,design" alt="App 3" />
          <h3>Fitness App</h3>
          <p>A workout and nutrition tracker with beautiful UI.</p>
          <a href="https://example.com" target="_blank">View App</a>
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
.projects {
  padding: 5rem 2rem;
  text-align: center;
  color: white;
}

h1, h2 {
  color: cyan;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 15px cyan;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
}

.card {
  background: rgba(255, 255, 255, 0.07);
  border-radius: 15px;
  padding: 1.5rem;
  width: 300px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card:hover {
  transform: translateY(-10px);
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.card h3 {
  color: cyan;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card p {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #e0e0e0;
}

.card a {
  text-decoration: none;
  font-weight: bold;
  color: #00ffff;
  border: 1px solid #00ffff;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.card a:hover {
  background-color: #00ffff;
  color: black;
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

.delay-3 {
  animation-delay: 1.5s;
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
