<template>
  <section
    class="min-h-screen pt-24 pb-16 bg-secondary"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div
        class="text-center mb-12"
        data-aos="fade-down"
      >
        <h1
          class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent
                 bg-gradient-to-r from-accent to-accentDark"
        >
          Graphic Flyer Works
        </h1>
        <p class="mt-4 text-light/70 max-w-2xl mx-auto">
          A showcase of my creative flyer and promotional designs.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in graphics"
          :key="index"
          @click="openModal(index)"
          data-aos="fade-up"
          :data-aos-delay="index * 80"
          class="group relative cursor-pointer overflow-hidden rounded-xl
                 border border-accent/20 backdrop-blur-lg
                 transition-all duration-500
                 hover:-translate-y-2
                 hover:shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
        >
          <!-- Image -->
          <img
            :src="item.image"
            :alt="item.title"
            loading="lazy"
            class="w-full h-72 object-cover
                   transition-transform duration-700
                   group-hover:scale-110"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black/60 opacity-0
                   group-hover:opacity-100
                   transition-opacity duration-500
                   flex items-center justify-center"
          >
            <p
              class="text-white text-lg font-semibold text-center px-4
                     transform translate-y-4
                     group-hover:translate-y-0
                     transition-transform duration-500"
            >
              {{ item.title }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <transition name="zoom">
      <div
        v-if="showModal"
        class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md
               flex items-center justify-center p-4"
      >
        <div class="relative max-w-4xl w-full">
          <button
            @click="closeModal"
            class="absolute -top-10 right-0 text-white
                   hover:text-accent text-2xl transition"
          >
            ✕
          </button>

          <img
            :src="graphics[currentIndex].image"
            :alt="graphics[currentIndex].title"
            class="w-full max-h-[80vh] object-contain
                   rounded-xl shadow-2xl"
          />

          <p class="text-center text-accent text-xl mt-4">
            {{ graphics[currentIndex].title }}
          </p>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const currentIndex = ref(0)

const graphics = [
  { title: 'Flyer 01 – Digital Event', image: '/graphics/flyer01.jpg' },
  { title: 'Flyer 02 – Brand Design', image: '/graphics/flyer02.png' },
  { title: 'Flyer 03 – Music Promo', image: '/graphics/flyer03.png' },
  { title: 'Flyer 04 – Music Promo', image: '/graphics/flyer04.png' },
  { title: 'Flyer 05 – Music Promo', image: '/graphics/flyer05.png' },
  { title: 'Flyer 06 – Music Promo', image: '/graphics/flyer06.png' },
  { title: 'Flyer 07 – Music Promo', image: '/graphics/flyer07.png' },
  { title: 'Flyer 08 – Music Promo', image: '/graphics/flyer08.png' },
  { title: 'Flyer 09 – Music Promo', image: '/graphics/flyer09.png' },
  { title: 'Flyer 10 – Music Promo', image: '/graphics/flyer10.png' },
  { title: 'Flyer 11 – Music Promo', image: '/graphics/flyer11.png' },
  { title: 'Flyer 12 – Music Promo', image: '/graphics/flyer12.png' },
  { title: 'Flyer 13 – Music Promo', image: '/graphics/flyer13.jpg' },
  { title: 'Flyer 14 – Music Promo', image: '/graphics/flyer14.jpg' },
  { title: 'Flyer 15 – Music Promo', image: '/graphics/flyer15.jpg' },
  { title: 'Flyer 16 – Music Promo', image: '/graphics/flyer16.jpg' },
  { title: 'Flyer 17 – Music Promo', image: '/graphics/flyer17.jpg' }
]

const openModal = (index) => {
  currentIndex.value = index
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}
</script>

<style scoped>
/* Modal zoom animation */
.zoom-enter-active,
.zoom-leave-active {
  transition: all 0.35s ease;
}
.zoom-enter-from,
.zoom-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
