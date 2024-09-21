<script lang="ts" setup>
import { ref } from "vue";

const disabled = ref(false);
</script>

<template>
  <hr-tooltip
    :disabled="disabled"
    content="click to close tooltip function"
    placement="bottom"
  >
    <hr-button @click="disabled = !disabled"
      >click to {{ disabled ? "active" : "close" }} tooltip function</hr-button
    >
  </hr-tooltip>
</template>
