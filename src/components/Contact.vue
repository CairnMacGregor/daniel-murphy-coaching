<template>
    <div class="contact section" id ="contact">
        <h2 class = "contact__title">Get in touch</h2>
        <FormKit type="form" id = "form" @submit="submitApp" :actions="false">
            <div class="success" v-if="complete">Submitted successfully!</div>
          <FormKit type="multi-step" tab-style="tab">
            <FormKit type="step" name="personalInfo">
              <StepOne />
            </FormKit>
        
            <FormKit type="step" name="General Questions">
              <StepTwo />
            </FormKit>
        
            <FormKit type="step" name="Coaching Questions">
              <StepThree />
            
              <template #stepNext>
                <FormKit type="submit" />
              </template>
            </FormKit>
          </FormKit>
        </FormKit>
    </div>
  </template>

<script setup>
    import {ref} from 'vue';
    import StepOne from './Form/StepOne.vue';
    import StepTwo from './Form/StepTwo.vue';
    import StepThree from './Form/StepThree.vue';
    const complete = ref(false)
    const submitApp = async (formData, node) => {
        try {
            console.log(formData);
            node.clearErrors()
            alert('Need to hookup email to capture form data');
            complete = true
        } catch (err) {
            node.setErrors(err.formErrors, err.fieldErrors)
        }
    }
</script>
<style lang = "scss">
    .contact{
        min-height: 100vh;
        width: 100%;
        padding: 0 10%;
        background-color: var(--brand-blue);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media(max-width: 768px){
          padding-top: 50px;
          padding-bottom: 50px;
        }

        &__title{
            color: white;
            font-size: 4rem;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 40px;
            align-self: flex-start;

            @media(max-width: 768px){
                font-size: 2rem;
            }
        }
    }

    #form{
        background-color: white;
    }
</style>