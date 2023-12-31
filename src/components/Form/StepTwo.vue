<template>
    
    <FormKit
      type="number"
      label="How many years have you been training for?"
      help="If you haven't trained before leave as 0"
      name="training-years"
      value="0"
      step="1"
    />
    <FormKit
      type="textarea"
      label="If you have trained before, briefly describe your training?"
    />
    <FormKit
      type="text"
      label="Do you track the food you eat?"
      validation="required"
    />
    <FormKit
      type="textarea"
      label="Give me a brief description of your diet, including drinks"
      validation="required"
    />
  </template>