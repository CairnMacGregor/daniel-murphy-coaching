<template>
    <FormKit
      type="text"
      label="Name"
      prefix-icon="avatarMan"
      validation="required"
    />
    <FormKit
      type="email"
      label="Email"
      prefix-icon="email"
      validation="required|email"
    />

    <FormKit
      type="tel"
      label="Phone number"
      placeholder="Phone number"
      prefix-icon="telephone"
      validation="required"
    />

    <FormKit
      type="number"
      help="What age are you?"
      label="Age"
      name="age"
      value="18"
      min="18"  
      step="1"
    />
 
  </template>