<template>
  <div class="bg-darkBlack text-softCream">
    <Home />
    <About />
    <Graphics />
    <Skills />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import Home from './Home.vue'
import About from './About.vue'
import Skills from './Skills.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'
import Graphics from './Graphics.vue'

export default {
  name: 'Landing',
  components: {
    Home,
    About,
    Graphics,
    Skills,
    Projects,
    Contact
  }
}
</script>

<style scoped>
/* Optional: Add padding/margin between sections */
</style>
