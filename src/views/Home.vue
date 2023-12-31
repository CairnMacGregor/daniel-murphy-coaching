<script setup>
import HomeNavbar from '../components/HomeNavbar.vue';
import Header from '../components/Header.vue'
import About from '../components/about.vue'
import Services from '../components/Services.vue'
import Footer from '../components/Footer.vue'

</script>

<template>
    <HomeNavbar></HomeNavbar>
    <div class = "content">
      <Header></Header>
      <About></About>
      <Services></Services>
    </div>
    <Footer></Footer>
</template>