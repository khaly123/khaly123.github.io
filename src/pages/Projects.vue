<template>
  <section class="min-h-screen bg-primary text-light px-6 py-20">
    <div class="max-w-7xl mx-auto space-y-12">
      <!-- Header with enhanced animation -->
      <div class="text-center space-y-3">
        <h2 
          class="text-4xl font-bold text-accent"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          My <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accentDark">Projects</span>
        </h2>
        <p 
          class="text-secondary"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          Explore my creative works and professional projects
        </p>
      </div>

      <!-- Filter Buttons with bounce animation -->
      <div 
        class="flex flex-wrap justify-center gap-3"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800"
      >
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          :class="[
            'px-5 py-2 rounded-full font-medium transition-all transform hover:-translate-y-1',
            'hover:shadow-lg hover:shadow-accent/20',
            activeCategory === cat
              ? 'bg-gradient-to-r from-accent to-accentDark text-light shadow-lg shadow-accent/30'
              : 'bg-accent/10 text-light hover:bg-accent/30'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Projects Grid with staggered animations -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          class="relative group bg-gradient-to-br from-primaryDark/80 to-primary/80 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 border border-accent/20"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          :data-aos-delay="100 + (index * 100)"
          data-aos-duration="800"
        >
          <!-- Image with zoom effect -->
          <div class="overflow-hidden h-48">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          <!-- Content with slide-up effect -->
          <div class="p-5 space-y-3 transform transition-all duration-500 group-hover:-translate-y-2">
            <h3 class="text-xl font-bold text-light">{{ project.title }}</h3>
            <p class="text-sm text-secondary-light">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                class="inline-block text-xs bg-gradient-to-r from-accent/80 to-accentDark/80 text-light px-3 py-1 rounded-full"
              >
                {{ project.category }}
              </span>
              <span 
                v-for="(tech, i) in project.tech" 
                :key="i"
                class="inline-block text-xs bg-primaryDark text-light px-2 py-1 rounded-full border border-accent/30"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Hover Overlay with gradient and button -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-accent/70 to-transparent flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6"
          >
            <div class="flex gap-3">
              <a
                :href="project.link"
                target="_blank"
                class="bg-light text-accent px-5 py-2 rounded-full font-semibold hover:bg-accent hover:text-light transition-all transform hover:scale-105 shadow-lg"
              >
                Live Demo
              </a>
              <a
                v-if="project.code"
                :href="project.code"
                target="_blank"
                class="border border-light text-light px-5 py-2 rounded-full font-semibold hover:bg-light hover:text-primary transition-all transform hover:scale-105"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeCategory: "All",
      categories: ["All", "Web", "App"],
      projects: [
        {
          id: 1,
          title: "Portfolio Site",
          category: "Web",
          image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Modern personal portfolio with dark theme and animations.",
          link: "https://portfolio.example.com",
          tech: ["Vue", "Tailwind", "GSAP"]
        },
        {
          id: 2,
          title: "Data Purchase Platform",
          category: "Web",
          image: "https://ghdatabundles.com/assets/data_bundle_logo-OGOYY2mE.png",
          description: "Buy cheap and affordable Data on all Networks in Ghana.",
          link: "https://ghdatabundles.com/",
          tech: ["React", "Node.js", "Markdown"]
        },
        {
          id: 3,
          title: "E-commerce Store",
          category: "Web",
          image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          description: "Full-featured online store with payment integration.",
          link: "https://shop.example.com",
          tech: ["Vue", "Stripe", "Firebase"]
        },
        {
          id: 4,
          title: "Consulting Agency",
          category: "Web",
          image: "https://images.unsplash.com/photo-1473649085228-583485e6e4d7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "High-conversion marketing page with animations.",
          link: "https://educeptconsult.org/",
          tech: ["GSAP", "Tailwind", "AOS"]
        },
        {
          id: 5,
          title: "Game Tournament site ",
          category: "Web",
          image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Admin dashboard with analytics and data visualization.",
          link: "https://my-project-1675794085164.web.app/",
          tech: ["React", "Chart.js", "Material UI"]
        },
        {
          id: 6,
          title: "Software Services Website",
          category: "Web",
          image: "https://vitechsc.com/assets/vtc1-DOzETIoB.png",
          description: "Event management and ticket booking platform.",
          link: "https://vitechsc.com/",
          tech: ["Vue", "Node.js"]
        },
        {
          id: 7,
          title: "Weather App",
          category: "App",
          image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80",
          description: "Beautiful weather forecasts with live updates.",
          link: "#",
          tech: ["React Native", "API", "Geolocation"]
        },
        {
          id: 8,
          title: "Task Manager",
          category: "App",
          image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          description: "Productivity app with cloud sync and reminders.",
          link: "#",
          tech: ["Flutter", "Firebase", "BLoC"]
        },
        {
          id: 9,
          title: "Fitness Tracker",
          category: "App",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          description: "Track workouts, nutrition, and health metrics.",
          link: "#",
          tech: ["Swift", "HealthKit", "Core Data"]
        },
        {
          id: 10,
          title: "Chat App",
          category: "App",
          image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
          description: "Real-time messaging with end-to-end encryption.",
          link: "#",
          tech: ["React Native", "Socket.io", "MongoDB"]
        },
        {
          id: 11,
          title: "Recipe App",
          category: "App",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
          description: "Discover, save, and share your favorite recipes.",
          link: "#",
          tech: ["Flutter", "Firebase", "API"]
        },
        {
          id: 12,
          title: "Budget Tracker",
          category: "App",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1011&q=80",
          description: "Track expenses and income with visual reports.",
          link: "#",
          tech: ["Kotlin", "Room", "MPAndroidChart"]
        },
      ],
    };
  },
  computed: {
    filteredProjects() {
      return this.activeCategory === "All"
        ? this.projects
        : this.projects.filter(
            (project) => project.category === this.activeCategory
          );
    },
  },
  mounted() {
    // Initialize AOS animation library
    if (typeof AOS !== 'undefined') {
      AOS.init({
        once: true,
        duration: 800,
        easing: 'ease-out-quart'
      });
    }
  }
};
</script>

<style scoped>
/* Custom styles */
.text-secondary-light {
  color: #cbd5e1;
}

/* Gradient text for accent */
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

/* Card hover effect */
.group:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
}

/* Custom animation durations */
.duration-500 {
  transition-duration: 500ms;
}

.duration-700 {
  transition-duration: 700ms;
}

/* Custom shadows */
.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>