<template>
  <div class="page-container">
    <section class="homepage">
      <div class="content">
        <h1>Hi, I'm <span class="highlight">Desnond Eli.A</span></h1>
        <h2>Frontend Developer</h2>

        <!-- Social Icons -->
        <div class="social-icons">
          <a href="#" class="social-card">
            <img src="@/assets/images/Gmail.svg" alt="Gmail" />
          </a>
          <a href="#" class="social-card">
            <img src="@/assets/images/whatsappb.svg" alt="Whatsapp" />
          </a>
          <a href="#" class="social-card">
            <img src="@/assets/images/githubl.svg" alt="GitHub" />
          </a>
          <a href="#" class="social-card">
            <img src="@/assets/images/caller.svg" alt="Call" />
          </a>
        </div>

        <a href="/cv.pdf" class="download-btn">Download CV</a>
      </div>

      <div class="profile-img">
        <img src="@/assets/images/profile.jpg" alt="Profile Picture" />
      </div>
    </section>
    
    <!-- Footer -->
  
  </div>
</template>

<script>
export default {
  methods: {
    sendMessage() {
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (email && message) {
        window.location.href = `mailto:your-email@example.com?subject=Message from ${email}&body=${message}`;
      } else {
        alert("Please fill in both fields.");
      }
    }
  }
};
</script>

<style scoped>
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Page Container */
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 2rem; /* Ensures the footer isn't cut off */
}

/* Homepage */
.homepage {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 6rem 5%;
  min-height: calc(100vh - 100px); /* Leaves space for footer */
  position: relative; /* To avoid footer overlap */
}

/* Hero Content */
.content {
  flex: 1 1 70%;
  max-width: 70%;
  text-align: left;
  z-index: 1;
}

h1 {
  font-size: 3rem;
  color: white;
  font-weight: bold;
}

.highlight {
  color: cyan;
  text-shadow: 0 0 15px cyan;
  animation: textGlow 1.5s infinite alternate;
}

h2 {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
}

/* Social Icons */
.social-icons {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}

.social-card {
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  transition: transform 0.3s, background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-card:hover {
  transform: scale(1.2);
  background-color: rgba(0, 255, 255, 0.3); /* Cyan Hover */
}

.social-card img {
  width: 40px;
  height: 40px;
  transition: transform 0.3s;
}

/* Button */
.download-btn {
  display: inline-block;
  background: cyan;
  color: black;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
}

.download-btn:hover {
  box-shadow: 0 0 25px cyan;
  transform: scale(1.1);
}

/* Profile Image */
.profile-img {
  flex: 1 1 25%;
  max-width: 25%;
  align-self: flex-start;
  margin-top: 2rem;
  border: 3px solid cyan;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
  overflow: hidden;
  transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
  animation: float 4s infinite ease-in-out;
}

.profile-img img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.profile-img:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px cyan;
}

.profile-img:hover img {
  transform: scale(1.1);
}

/* Footer */
.footer {
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  color: cyan;
  text-align: center;
  z-index: 10;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.contact-input {
  width: 250px;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.contact-input::placeholder {
  color: white;
}

.contact-input:focus {
  background: rgba(255, 255, 255, 0.3);
}

.contact-btn {
  padding: 0.8rem 1.5rem;
  background-color: cyan;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

.contact-btn:hover {
  background-color: darkcyan;
}

@media (max-width: 768px) {
  .homepage {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .content, .profile-img {
    max-width: 100%;
    flex: 1 1 100%;
  }

  .profile-img {
    width: 200px;
    height: auto;
  }

  .footer-content {
    flex-direction: column;
    align-items: center;
  }
}

/* Glow Animations */
@keyframes textGlow {
  0% {
    text-shadow: 0 0 10px cyan;
  }
  100% {
    text-shadow: 0 0 20px cyan;
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
