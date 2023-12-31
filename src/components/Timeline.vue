<template>
    <div class="timeline">
        <Timeline :value="events" :align="align" class="customized-timeline">
            <template #marker="slotProps">
                <span class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" :style="{ backgroundColor: slotProps.item.color }">
                </span>
            </template>
            <template #content="slotProps">
                <Card class="mt-3 timeline-card">
                    <template #title>
                        {{ slotProps.item.status }}
                    </template>
                    <template #subtitle>
                        {{ slotProps.item.date }}
                    </template>
                    <template #content>
                       <img v-if="slotProps.item.image" :src="getImage(slotProps.item.image)" :alt="slotProps.item.name" width="200" class="shadow-1 timeline-image" />
                        <p v-if="slotProps.item.description">
                            {{ slotProps.item.description }}
                        </p>
                    </template>
                </Card>
            </template>
        </Timeline>
    </div>
</template>

<style lang = "scss">
    .timeline{
        background-color: var(--brand-blue);
        width: 100%;
        padding: 0 10%;
        padding-bottom: 5%;
        @media(max-width: 768px){
            padding: 0 5%;
            .p-timeline-event-opposite{
                width: 0px !important;
                display: none;
            }
        }
        &-card{
            color: #fff;
            background-color: #000616;
        }

        &-image{
            width: 100%;
        }
    }
</style>

<script setup>
import Timeline from 'primevue/timeline';
import Button from 'primevue/button';
import Card from 'primevue/card';
import { ref, onMounted, onUnmounted} from "vue";

const align = ref('alternate');

const images = import.meta.glob('/assets/*');
console.log(images)
const getImage = (imageName) => {
  const imageModule = images[`/assets/${imageName}`];
  return imageModule ? imageModule.name : '';
};

onMounted(() => {
  const updateAlign = () => {
    if (window.innerWidth < 768) {
      align.value = 'unset';
    } else {
      align.value = 'alternate';
    }
  };

  window.addEventListener('resize', updateAlign);
  updateAlign(); // Call once on mount to set initial value
});

onUnmounted(() => {
  window.removeEventListener('resize', updateAlign);
});

const events = ref([
    { status: 'Pre Lifting', date: '15/10/2016', icon: 'pi pi-check', color: '#fff', image: 'pre_lifting.jpeg', description: 'I was a skinny little bitch eh.'},
    { status: 'Lifting Begins', date: '15/10/2017', icon: 'pi pi-cog', color: '#fff', image: 'lifting_begins.jpg', description: 'Slightly less skinny.' },
    { status: 'Serious Now', date: '15/10/2021', icon: 'pi pi-shopping-cart', color: '#fff', image: 'serious_now.jpeg'  },
    { status: 'Current', date: '20/12/2023', icon: 'pi pi-check', color: '#fff', image: 'current.jpeg' }
]);
</script>

