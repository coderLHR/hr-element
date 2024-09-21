<script setup>
function handleBtnClick() {
  console.log("btn click");
}
</script>

<template>
  <p>
    <hr-button @click="handleBtnClick"> with throttle</hr-button>
    <hr-button :use-throttle="false"
               @click="handleBtnClick">without throttle</hr-button>
  </p>
</template>
