<template>
    <div class = "footer">
        <ul class = "footer__list">
            <li class = "footer__list-item" v-for="item in items">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script setup>

    import {ref} from 'vue';

    const items = ref([
        {name: `© DMCoaching ${new Date().getFullYear()}`}
    ]);

</script>

<style lang = "scss">

    .footer{
        width: 100%;
        height: fit-content;
        background-color: var(--brand-blue);
        color: #ffffff59;
        border-top: 1px solid #ffffff59;
        &__list{
            height: 100%;
            min-height: 70px;
            padding: 0 10%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            &-item{
                &:last-of-type{
                    margin-left: auto;
                }
            }
        }
    }

</style>