<script setup>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <Navbar></Navbar>
    <div class = "content">
      <Header></Header>
      <About></About>
      <Services></Services>
      <Contact></Contact>
    </div>
    <Footer></Footer>

</template>

<style>

  :root{
    --blue: #1298FF;
    --brand-blue: #000616;
    --brand-blue: #000;
    background-color: var(--brand-blue);
  }
  html {
    box-sizing: border-box;
    font-size: 16px;
    scroll-behavior: smooth;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font-family: 'Lato', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto', sans-serif;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: 'Poppins', sans-serif;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
</style>
