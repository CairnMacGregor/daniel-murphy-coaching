<script setup>
import ContactNavbar from '../components/ContactNavbar.vue';
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
    <div class = "content contactpage">
        <ContactNavbar></ContactNavbar>
        <Contact></Contact>
        <Footer></Footer>
    </div>
</template>

<style lang ="scss">
    .contactpage{
        padding-top: 50px;
    }
</style>