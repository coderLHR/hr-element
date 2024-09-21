<script setup lang="ts">
import { HrNotification } from "hr-lee-element";
import { h } from "vue";

function openNotify1() {
  HrNotification({
    title: "Title",
    message: h("i", { style: "color:teal" }, "This is a remider"),
    position:'bottom-right'
  });
}

function openNotify2() {
  HrNotification({
    title: "Prompt",
    message: "This is a message that does not auto close",
    duration: 0,
    position:'top-left'
  });
}
</script>

<template>
  <hr-button @click="openNotify1" plain>Closes automatically</hr-button>
  <hr-button @click="openNotify2" plain>Won't closes automatically</hr-button>
</template>
