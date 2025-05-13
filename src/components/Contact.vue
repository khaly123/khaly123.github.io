<template>
  <section class="contact">
    <h2>Contact Me</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
</template>

<style scoped>
.contact {
  padding: 50px;
  text-align: center;
}

input, textarea {
  display: block;
  width: 80%;
  margin: 10px auto;
  padding: 10px;
}

button {
  background: cyan;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
