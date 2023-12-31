<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div class="app-wrapper content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <div :key="$route.name">
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </div>
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

  /* TRANSITIONS */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.app-wrapper {
  background: var(--main-grey);
}


/* Track */
::-webkit-scrollbar {
  height: 1rem;
  width: 0.5rem;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--main-grey);
  border-radius: 400px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--main-grey);
}

/* Track on hover */
::-webkit-scrollbar-track:hover {
  background: #202123;
}

/* Track piece */
::-webkit-scrollbar-track {
  background: #202123;
}

/* Handle when scrolling */
::-webkit-scrollbar-thumb:active {
  background: var(--main-grey);
}
</style>
