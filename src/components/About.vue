<template>
    <div id = "about" class = "about section">   
        <div class ="left">
            <h2 class = "about-title">IT ALL BEGINS WITH A SIMPLE CHANGE.</h2>
            <p class = "about-text">In the ever-evolving world of fitness, distinguishing between accurate information and misleading advice can be overwhelming. Whether you're taking your first steps into this realm or you're a seasoned enthusiast, the right guidance is crucial for achieving your goals. </p>

            <p class = "about-text">That's where I come in. As a dedicated bodybuilding coach, I offer personalized coaching services tailored to your unique journey. My years of experience in training and bodybuilding have not only equipped me with extensive knowledge but also an empathetic understanding of the challenges faced at every stage of this journey. </p>

            <p class = "about-text"><span>Why Choose My Coaching Services?</span></p>

            <p class = "about-text"><span>Personalized Approach:</span> Your fitness goals are unique, and so should be your training. I provide customized coaching that aligns with your specific needs, whether you're just starting out or looking to elevate your existing routine. </p>

            <p class = "about-text"><span>Experienced Guidance:</span> Having navigated the fitness landscape from its grassroots, I bring a wealth of experience and proven strategies to help you avoid common pitfalls and embrace effective practices. </p>

            <p class = "about-text"><span>Results-Driven Training:</span> Your success is my priority. By combining evidence-based techniques with practical experience, I ensure that you're not just working hard but also working smart towards your goals. </p>

            <p class = "about-text"><span>Supportive Environment:</span> I understand the value of motivation and support in this journey. As your coach, I am committed to being there for you, offering encouragement, and keeping you accountable every step of the way. </p>

            <p class = "about-text">Embark on your fitness journey with a coach who understands, supports, and guides you towards achieving your best self. Let's transform your aspirations into reality, together.</p>
        </div>
        <div class = "right">
            <img class = "about-image" src="../assets/placeholder-2.jpg" alt="Photo by Edgar Chaparro on Unsplash">
        </div>
    </div>
    <Timeline></Timeline>
</template>

<style lang = "scss">
    .about{
        min-height: 100vh;
        height: fit-content;
        padding: 5% 20%;
        width: 100%;
        margin: 0 auto;
        background-color: var(--brand-blue );
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: white;
        gap: 20px;

        @media(max-width: 768px){
            flex-direction: column-reverse;
            padding: 5%;
        }
        &-image{
            object-fit: cover;
        }

        .left{
            z-index: 2;
        }
        .right{
            z-index: 1;
        }
        .right, .left{
            position: relative;
            width: 50%;
            height: 100%;

            @media(max-width: 768px){
                width: 100%;
            }
        }



        &-title{
            z-index: 2;
            color: #fff;
            width: 150%;
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

        &-text{
            font-size: 18px;
            margin: 20px 0;
            font-weight: 200;
            span{
                font-weight: bold;
            }
        }
    }
</style>

<script setup>
    import Timeline from "./Timeline.vue"
</script>