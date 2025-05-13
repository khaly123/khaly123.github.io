<template>
  <footer class="footer">
    <div class="footer-content">
      <p>© 2025 Bhilly_Gram. All rights reserved.</p>
      <div class="form-container">
        <form class="form">
          <div class="form-group">
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" class="contact-input" required />
          </div>
          <div class="form-group">
            <label for="message">Your Message</label>
            <textarea id="message" name="message" class="contact-input" required></textarea>
          </div>
          <button @click="sendMessage" class="form-submit-btn" type="submit">Send Message</button>
          <div> Contact me Through EMAIL Directly Here</div>
        </form>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    sendMessage(event) {
      event.preventDefault();
      const email = this.$refs.email.value;
      const message = this.$refs.message.value;

      // Check if both fields are filled
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
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5); /* Transparent background */
  color: cyan;
  font-family: Arial, sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  flex-wrap: wrap;
}

.form-container {
  width: 280px; /* Further reduced width */
  background: linear-gradient(#212121, #212121) padding-box,
              linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
  border: 2px solid transparent;
  padding: 16px 12px; /* Further reduced padding */
  font-size: 12px; /* Smaller font size */
  font-family: inherit;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 12px; /* Reduced gap between form elements */
  box-sizing: border-box;
  border-radius: 12px; /* Smaller border radius */
}

.form-container .form {
  display: flex;
  flex-direction: column;
  gap: 12px; /* Reduced gap between form elements */
}

.form-container .form-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.form-container .form-group label {
  display: block;
  margin-bottom: 4px;
  color: #717171;
  font-weight: 600;
  font-size: 10px; /* Smaller label font size */
}

.form-container .form-group input,
.form-container .form-group textarea {
  width: calc(90% + 20px); /* Increased width to extend beyond the input field */
  margin-left: -10px; /* Adjust to center with extended border */
  padding: 8px 12px; /* Smaller padding */
  border-radius: 6px; /* Smaller border radius */
  color: #fff;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid #382E2EFF;
}

.form-container .form-group input::placeholder,
.form-container .form-group textarea::placeholder {
  opacity: 0.5;
}

.form-container .form-group input:focus,
.form-container .form-group textarea:focus {
  outline: none;
  border-color: #e81cff;
}

.form-container .form-submit-btn {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-self: flex-start;
  font-family: inherit;
  color: #717171;
  font-weight: 600;
  width: 40%; /* Smaller button width */
  background: #313131;
  border: 1px solid #414141;
  padding: 8px 12px; /* Smaller padding */
  font-size: 12px; /* Smaller font size */
  gap: 6px;
  margin-top: 6px; /* Reduced margin */
  cursor: pointer;
  border-radius: 6px; /* Smaller border radius */
}

.form-container .form-submit-btn:hover {
  background-color: #fff;
  border-color: #fff;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .form-container {
    width: 80%; /* Adjusted width for smaller screens */
  }

  .form-container .form-submit-btn {
    width: 60%;
  }
}
</style>
