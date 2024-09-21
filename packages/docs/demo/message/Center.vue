<script lang="ts" setup>
import { HrMessage } from "hr-lee-element";

const openCenter = () => {
  HrMessage({
    showClose: true,
    message: "Centered text",
    center: true
  });
};
</script>

<template>
  <hr-button plain @click="openCenter">Centered text</hr-button>
</template>
