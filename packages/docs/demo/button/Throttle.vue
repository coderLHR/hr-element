<script setup>
[object Promise]</script>

<template>
  <p>
    <hr-button @click="handleBtnClick"> with throttle</hr-button>
    <hr-button :use-throttle="false"
               @click="handleBtnClick">without throttle</hr-button>
  </p>
</template>
