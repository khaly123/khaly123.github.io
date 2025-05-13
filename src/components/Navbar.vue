<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/" class="nav-link" active-class="active">Home</router-link></li>
      <li><router-link to="/about-us" class="nav-link" active-class="active">About Us</router-link></li>
      <li><router-link to="/projects" class="nav-link" active-class="active">Projects</router-link></li>
      <li><router-link to="/skills" class="nav-link" active-class="active">Skills</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background: #111;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 100;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 1rem;  /* Reduced gap */
  margin: 0;
}

.navbar li {
  display: inline;
}

.navbar .nav-link {
  display: inline-block;
  padding: 0.5rem 1rem;  /* Reduced padding */
  background-color: #222;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;  /* Reduced font size */
  border-radius: 8px;  /* Slightly smaller border radius */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);  /* Reduced shadow size */
  transition: 0.3s ease-in-out;
  text-align: center;
}

.navbar .nav-link:hover {
  background-color: #333;
  color: cyan;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);  /* Slightly smaller hover shadow */
}

.navbar .nav-link.active {
  background-color: cyan;
  color: black;
  font-weight: bold;
}
</style>
