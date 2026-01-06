<template>
  <nav 
    class="fixed w-full z-50 bg-gradient-to-r from-primaryDark to-primary border-b border-accent/20 backdrop-blur-lg"
    :class="{'shadow-lg': isScrolled}"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Brand -->
        <router-link 
          to="/" 
          class="flex-shrink-0 flex items-center group"
          @mouseenter="animateLogo(true)"
          @mouseleave="animateLogo(false)"
        >
          <div class="relative">
            <span 
              class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-accentDark"
              :class="{'animate-pulse': logoPulsing}"
            >
              Desmond's Portfolio
            </span>
            <span 
              class="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent to-accentDark transition-all duration-500"
              :class="logoUnderlineWidth"
            ></span>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-8">
            <router-link
              v-for="(item, index) in navigation"
              :key="item.name"
              :to="item.path"
              class="relative px-3 py-2 text-sm font-medium group"
              :class="{'text-accent': $route.path === item.path, 'text-light hover:text-accent': $route.path !== item.path}"
              @mouseenter="animateHover(index, true)"
              @mouseleave="animateHover(index, false)"
            >
              <span class="relative z-10 transition-all duration-300">
                {{ item.name }}
              </span>
              <span 
                v-if="$route.path === item.path"
                class="absolute inset-0 rounded-md bg-accent/10 border border-accent/30"
              ></span>
              <span 
                v-else
                class="absolute inset-0 rounded-md transition-all duration-500 opacity-0 group-hover:opacity-100"
                :class="hoverAnimations[index]"
              ></span>
            </router-link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="-mr-2 flex md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-light hover:text-accent focus:outline-none transition duration-150"
            aria-label="Main menu"
          >
            <svg
              class="h-6 w-6"
              :class="{ 'hidden': isOpen, 'block': !isOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="h-6 w-6"
              :class="{ 'hidden': !isOpen, 'block': isOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-show="isOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 sm:px-3 space-y-1">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.path"
            @click="isOpen = false"
            class="block px-3 py-2 rounded-md text-base font-medium relative overflow-hidden"
            :class="{'text-accent bg-accent/10': $route.path === item.path, 'text-light hover:text-accent': $route.path !== item.path}"
          >
            <span class="relative z-10">
              {{ item.name }}
            </span>
            <span 
              v-if="$route.path === item.path"
              class="absolute inset-0 bg-accent/5 border-l-2 border-accent"
            ></span>
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const isOpen = ref(false)
    const isScrolled = ref(false)
    const logoPulsing = ref(false)
    const logoUnderlineWidth = ref('w-0')
    const hoverAnimations = ref([])
    
    const navigation = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Skills', path: '/skills' },
      { name: 'Projects', path: '/projects' },
      { name: 'Graphic Design', path: '/graphics' },
      { name: 'Contact', path: '/contact' }
    ]

    // Initialize hover animations
    const initHoverAnimations = () => {
      hoverAnimations.value = navigation.map(() => '')
    }

    const animateHover = (index, isHovering) => {
      if (route.path === navigation[index].path) return
      
      if (isHovering) {
        hoverAnimations.value[index] = 'bg-accent/10 animate-pulse'
      } else {
        hoverAnimations.value[index] = ''
      }
    }

    const animateLogo = (isHovering) => {
      if (isHovering) {
        logoUnderlineWidth.value = 'w-full'
        logoPulsing.value = true
      } else {
        logoUnderlineWidth.value = 'w-0'
        logoPulsing.value = false
      }
    }

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 10
    }

    onMounted(() => {
      initHoverAnimations()
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      navigation,
      isOpen,
      isScrolled,
      logoPulsing,
      logoUnderlineWidth,
      hoverAnimations,
      animateHover,
      animateLogo
    }
  }
}
</script>

<style scoped>
/* Custom futuristic glow effect */
nav {
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

/* Active link glow */
.router-link-active.router-link-exact-active {
  text-shadow: 0 0 8px rgba(99, 102, 241, 0.5);
}

/* Mobile menu transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Underline animation */
@keyframes underline {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

/* Pulse animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>