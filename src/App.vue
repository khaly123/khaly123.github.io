<template>
  <div id="app">
    <!-- Background Video (affects all pages) -->
    <video autoplay muted loop class="bg-video">
      <source src="/src/assets/videos/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Shared Layout -->
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';  // Changed from Header to Navbar
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,  // Updated to Navbar
    Footer
  }
};
</script>

<style scoped>
/* General Styles */
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background-color: transparent;
  color: white;
  height: 100%;
  overflow-x: hidden;
}

.bg-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}

#app {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}
</style>
