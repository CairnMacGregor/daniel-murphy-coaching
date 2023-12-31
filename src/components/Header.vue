<template>
    <section class = "header">
        <swiper
          :slides-per-view="1"
          :space-between="0"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :loop="true"
          :autoplay="{
            delay: 3500,
            disableOnInteraction: true,
          }"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
        >
          <swiper-slide>
            <div class = "slide">
                <img class = "slide-img" src = "../assets/Clear.png" alt = "Daniel Murphy Coaching Logo">
                <h1 class="slide-title">Elevate Your Fitness</h1>
                <p class="slide-text">Experience a comprehensive lifestyle change, beyond just physical transformation.</p>
                <p class="slide-text">Take charge of your well-being. Unlock your potential today.</p>
                <a class="slide-button" href="/contact">Work with me</a>
              </div>
          </swiper-slide>
          <!-- <swiper-slide>
            <div class = "slide">
                <h1 class="slide-title">Lorem Ipsum</h1>
                <p class="slide-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias unde maxime ipsam ut pariatur, enim aperiam, dolor quibusdam dicta sint adipisci ratione fugiat nihil quae in amet illo quod..</p>
                <a class="slide-button" href="#services">What I offer</a>
              </div>
          </swiper-slide> -->
        </swiper>
    </section>
</template>

<style lang = "scss">
    .header{
        height: 100vh;
        width: 100%;
        background-color: #fff;
    }

    .swiper{
      height: 100%;
      .swiper-pagination-bullet{
        background-color: white;
      }
    }
    .slide{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: var(--brand-blue);
      
      &-img{
        object-fit: contain;
        width: 25%;
        @media(max-width: 768px){
            width: 80%;
        }
      }
      &-title{
        margin-bottom: 20px;
        font-size: 8rem;
        font-weight: 900;
        color: white;
        margin: 0;
        line-height: 1em;
        text-transform: uppercase;
        @media(max-width: 768px){
          font-size: 2rem;
          padding: 0 5%;
          text-align: center;
          margin-bottom: 10px;
        }
      }
      &-text{
        color: white;
        max-width: 50%;
        @media(max-width: 768px){
          max-width: 100%;
          padding: 0 5%;
          text-align: center;        }
      }

      &-button{
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

        &:hover{
          background-color: #000;
          color: #fff;
        }
      }
    }
</style>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  export default {
    components: {
      Swiper,
      SwiperSlide,
      Navigation,
      Pagination,
      Scrollbar,
      A11y
    },
    setup() {
      const onSwiper = (swiper) => {
      };
      const onSlideChange = () => {
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Autoplay, Navigation, Pagination, Scrollbar, A11y],
      };
    },
  };
</script>