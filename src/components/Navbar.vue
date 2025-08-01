<template>
  <nav class="bg-accent text-light p-4 flex justify-between">
    <h1 class="font-bold text-xl">My Portfolio</h1>
    <ul class="flex gap-4">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/skills">Skills</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>