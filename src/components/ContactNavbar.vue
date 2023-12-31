<template>
    <nav class="navbar">
        <div class="navbar__inner">
            <a href="/"><img class="logo" src="../assets/Text.png" alt="Daniel Murphy Coaching Logo" /></a>
            <div :class = "{'hamburger': true, 'open': navOpen}" @click ="toggleNav()">
                <span class = "hamburger-line"></span>
            </div>
        </div>
    </nav>
    <div :class = "{'sidebar': true, 'open': navOpen}">
        <ul :class = "{'items': true, 'open': navOpen}">
            <li class = "items__item" v-for="item in items" ><a :href = "item.link">{{ item.name }}</a></li>
        </ul>
    </div>
</template>

<style  lang = "scss">
:root {
    --navbar-height: 70px;
    --hamburger-size: 30px
}

.navbar{

    position: fixed;
    top: 0;
    left: 0;
    height: var(--navbar-height);
    width: 100%;
    z-index: 20;
    border-bottom: 1px solid #ffffff59;

    &__inner{
        height: 100%;
        background-color: #000;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 1.5em;
        justify-content: space-between;
    }

    .logo{
        height: 45px;
    }

    .hamburger{
        width: var(--hamburger-size);
        height: var(--hamburger-size);
        &:hover{
            cursor: pointer;
        }
        
        &-line{
            width: 100%;
            height: 2px;
            background-color: white;
            display: block;
            position: relative;
            top: 50%;
            transform: translateY(-50%);

            &::before, &::after{
                content: "";
                width: 100%;
                width: 100%;
                height: 2px;
                background-color: white;
                display: block;
                position: absolute;
            }

            &::before{
                top: calc(var(--hamburger-size) / 3);
                transition: top 0.2s 0.2s ease, transform 0.2s  ease;

            }

            &::after{
                bottom: calc(var(--hamburger-size) / 3);
                transition: bottom 0.2s 0.2s ease, transform 0.2s ease;

            }
        }

        &.open{
            .hamburger-line{
                background-color: transparent;
                &::before{
                    top: 0;
                    transition: transform 0.2s 0.2s ease, top 0.2s ease;
                    transform: rotate(45deg);
                }
                &::after{
                    bottom: 0;
                    transition:  transform 0.2s 0.2s ease, bottom 0.2s  ease;
                    transform: rotate(-45deg);
                }
            }
        }
    }

}

.sidebar{
    position: fixed;
    top: 0;
    right: -300px;
    height: 100vh;
    width: 300px;
    background-color: #000;
    z-index: 19;
    transition: all 0.3s ease;
    margin-top: var(--navbar-height);
    border-left: 1px solid #ffffff59;
    @media(max-width: 768px){
        width: 100%;
        right: -100%;
    }
    
    &.open{
        right: 0;
        transform: translateX(0);
    }

    .items{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        height: 100%;
        list-style: none;
        opacity: 0;
        transition: opacity 0.3s 0.3s ease;
        padding-top: 20px;
        padding-left: 20px;
        &.open{
            opacity: 1;
        }
        &__item{
            a{
                font-size: 1.5rem;
                color: white;
                margin-bottom: 1em;
                text-decoration: none;
                &:hover{
                    cursor: pointer;
                }
            }
            font-size: 1.5rem;
            color: white;
            margin-bottom: 1em;
            &:hover{
                cursor: pointer;
            }
        }
    }
}

</style>

<script setup>
import { ref } from 'vue';
const navOpen = ref(false);
const items  = [
    
    {
        name: "Home",
        link: "/",
        otherPage: true
    },
];

const toggleNav = () => {
    navOpen.value = !navOpen.value;
};

const navigateToLink = (link) => {
    if(link.otherPage){
        document.location.href = link.link;
    }
    navOpen.value = false;

    setTimeout(() => {
        const element = document.querySelector(link.link);
        const offset = 80; // Adjust this value to your needs
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
           top: offsetPosition,
           behavior: 'smooth'
        });
    }, 300);
};


</script>
