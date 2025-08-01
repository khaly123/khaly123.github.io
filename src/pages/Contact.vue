<template>
  <section class="min-h-screen bg-secondary text-light py-20 px-6 flex flex-col items-center justify-center overflow-hidden">
    <div class="max-w-6xl w-full mx-auto space-y-16">
      <!-- Header Section -->
      <div class="text-center space-y-4" data-aos="fade-down" data-aos-duration="800">
        <h2 class="text-5xl font-bold">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accentDark">Get In Touch</span>
        </h2>
        <p class="text-xl text-light max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div 
          class="relative"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <div class="absolute -inset-1 bg-gradient-to-r from-accent to-accentDark rounded-xl opacity-75 blur-md group-hover:opacity-100 transition duration-500"></div>
          <form
            @submit.prevent="submitForm"
            class="relative w-full space-y-6 bg-primary/80 p-8 rounded-xl shadow-2xl backdrop-blur-sm border border-accent/20 transition-all duration-500 hover:border-accent/50"
          >
            <div class="space-y-1">
              <label for="name" class="text-sm font-medium text-secondary-light">Your Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full p-4 rounded-lg bg-primaryDark border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-accent/50 transition duration-300 placeholder-secondary"
                placeholder="Bhilly Gram"
              />
            </div>

            <div class="space-y-1">
              <label for="email" class="text-sm font-medium text-secondary-light">Email Address</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full p-4 rounded-lg bg-primaryDark border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-accent/50 transition duration-300 placeholder-secondary"
                placeholder="bhilly@vitechsc.com"
              />
            </div>

            <div class="space-y-1">
              <label for="subject" class="text-sm font-medium text-secondary-light">Subject</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                class="w-full p-4 rounded-lg bg-primaryDark border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-accent/50 transition duration-300 placeholder-secondary"
                placeholder="Project Inquiry"
              />
            </div>

            <div class="space-y-1">
              <label for="message" class="text-sm font-medium text-secondary-light">Your Message</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                class="w-full p-4 h-40 rounded-lg bg-primaryDark border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-accent/50 transition duration-300 placeholder-secondary"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-gradient-to-r from-accent to-accentDark text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else>Sending...</span>
              <svg v-if="!isSubmitting" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              <svg v-if="isSubmitting" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div 
          class="space-y-8"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="800"
        >
          <div class="bg-primary/80 p-8 rounded-xl shadow-2xl backdrop-blur-sm border border-accent/20">
            <h3 class="text-2xl font-semibold mb-6 text-accent">Other Ways to Connect</h3>
            
            <div class="space-y-6">
              <!-- Email -->
              <a 
                href="mailto:khalydesmond@gmail.com" 
                class="flex items-start gap-4 group hover:bg-primaryDark/50 p-2 rounded-lg transition duration-300"
              >
                <div class="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-secondary-light">Email</h4>
                  <p class="text-light hover:text-accent transition duration-300">khalydesmond@gmail.com</p>
                </div>
              </a>

              <!-- Phone -->
              <a 
                href="tel:+233595484068" 
                class="flex items-start gap-4 group hover:bg-primaryDark/50 p-2 rounded-lg transition duration-300"
              >
                <div class="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-secondary-light">Phone</h4>
                  <p class="text-light hover:text-accent transition duration-300">+233 595 484 068</p>
                </div>
              </a>

              <!-- Location -->
              <a 
                :href="locationLink" 
                target="_blank"
                class="flex items-start gap-4 group hover:bg-primaryDark/50 p-2 rounded-lg transition duration-300"
              >
                <div class="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-secondary-light">Location</h4>
                  <p class="text-light hover:text-accent transition duration-300">Ho (Volta Region), Ghana</p>
                </div>
              </a>
            </div>

            <!-- Social Media -->
            <div class="mt-10">
              <h4 class="font-medium text-indigo-400 mb-4">Follow Me</h4>
              <div class="flex gap-4">
                <a 
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  class="p-3 bg-primaryDark rounded-lg hover:bg-accent/20 transition duration-300 group"
                  :aria-label="social.name"
                >
                  <component 
                    :is="social.icon" 
                    class="h-5 w-5 text-secondary-light group-hover:text-accent transition duration-300"
                  />
                </a>
              </div>
            </div>
          </div>

          <!-- Success Message (shown after form submission) -->
          <div 
            v-if="isSuccess"
            class="bg-green-500/10 border border-green-500/30 p-4 rounded-lg backdrop-blur-sm flex items-start gap-3"
            data-aos="fade-up"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 class="font-medium text-green-300">Message Sent Successfully!</h4>
              <p class="text-sm text-green-200">Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { GithubIcon, LinkedinIcon, InstagramIcon } from 'lucide-vue-next'

export default {
  components: {
    GithubIcon,
    LinkedinIcon,
    InstagramIcon
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      isSuccess: false,
      socialLinks: [
        {
          name: 'GitHub',
          url: 'https://github.com/khaly123',
          icon: 'GithubIcon'
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/desmond-afenu-a59614238/',
          icon: 'LinkedinIcon'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/bhilly_gram/',
          icon: 'InstagramIcon'
        }
      ],
      // Google Maps link for Ho, Ghana
      locationLink: "https://www.google.com/maps/place/Ho,+Ghana/@6.6005254,0.4571429,14z/data=!3m1!4b1!4m6!3m5!1s0x10201d4a8e5f1e5f:0x2f5a5473f8b9f40!8m2!3d6.6008386!4d0.4713026!16zL20vMDJmYzBm?entry=ttu"
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      this.isSubmitting = false
      this.isSuccess = true
      
      // Reset form
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.isSuccess = false
      }, 5000)
    }
  },
  mounted() {
    // Initialize AOS if needed
    if (typeof AOS !== 'undefined') {
      AOS.init({
        once: true,
        duration: 800
      })
    }
  }
}
</script>

<style scoped>
/* Custom styles */
.text-secondary-light {
  color: #94a3b8;
}

/* Gradient background animation */
.bg-gradient-to-br {
  background-size: 200% 200%;
  animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Form input focus effect */
input:focus, textarea:focus {
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
}

/* Success message animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

[data-aos="fade-up"] {
  animation: fadeIn 0.6s ease-out forwards;
}

/* Contact item hover effect */
.hover\:bg-primaryDark\/50:hover {
  background-color: rgba(15, 23, 42, 0.5);
}
</style>