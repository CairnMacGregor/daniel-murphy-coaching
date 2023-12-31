<template>
    <div id="services" class="services section">   
        <h2 class="services__title">Discover My Services</h2>
        <p class="services__strapline">Select the Essentials Tailored Just for You</p>
        <div class="services__selection">
            <div v-for="service in services" class="services__selection-item">
                <img class = "services__selection-item--icon" :src="service.icon" :alt="`Icon for ${service.name}`">
                <h4 class = "services__selection-item--name">{{ service.name }}</h4>
                <p class = "services__selection-item--text">{{ service.description }}</p>   
            </div>
        </div>
        <a class = "button" href="/contact">Get started</a>
    </div>
</template>

<script setup>
import {ref} from 'vue'    
import trainingImg from '../assets/training.png';
import nutritionImg from '../assets/nutrition.png';
import checkinImg from '../assets/checkin.png';

const services = ref([
        {
            name: "Customized Training",
            description: "Expertly crafted training programs, precisely tailored to fit your unique needs.",
            icon: trainingImg
        },
        {
            name: "Personalized Nutrition",
            description: "Bespoke meal plans complemented with supplement guidance, designed to synergize with your training regimen.",
            icon: nutritionImg
        },
        {
            name: "Dedicated Check-Ins",
            description: "Regular weekly assessments to monitor your progress, complemented by round-the-clock support and guidance.",
            icon: checkinImg
        },
    ]);
</script>

<style lang="scss">
    .services{
        min-height: 100vh;
        width: 100%;
        padding: 5% 10%;
        background-color: var(--brand-blue);
        gap: 40px;
        color: #fff;
        display: flex;
        flex-direction: column;
        @media(max-width: 768px){
        padding: 10% 5%;

        }

        &__title{
            line-height: 1em;
            font-size: 4rem;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 20px;

            @media(max-width: 768px){
                width: 100%;
                font-size: 2rem;
            }
        }

        &__strapline{
            font-size: 2rem;
            font-weight: 200;
            margin: 0;
            margin-bottom: 50px;
            @media(max-width: 768px){
                font-size: 1rem;
            }
        }

        &__selection{
            display: flex;
            flex-direction: row;
            margin: auto;

            @media(max-width: 768px){
                flex-direction: column;
                gap: 50px;
            }
            &-item{
                width: 33%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 15px;
                color: white;
                transition: 0.3s ease;
                @media(max-width: 768px){
                    width: 100%;
                }
                &:hover{
                    scale: 1.1;
                }
                &--icon{
                    filter: invert(1);
                    height: 100px;
                    width: 100px;
                }

                &--name{
                    font-size: 2em;
                    margin: 0;
                    text-transform: uppercase;
                    font-weight: 700;
                    @media(max-width: 768px){
                        font-size: 1.5rem;
                        text-align: center;
                    }
                }

                &--text{
                    font-size: 1em;
                    text-align: center;
                    text-wrap: balance;
                }
            }
        }
        .button{
            margin-top: 20px;
            background-color: #fff;
            color: #000;
            text-decoration: none;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            font-size: 1.2rem;
            text-transform: uppercase;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            width: fit-content;
            align-self: center;
            &:hover{
              background-color: #000;
              color: #fff;
            }
        }
    }
</style>