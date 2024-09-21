<script setup lang="ts">
import { HrMessage, HrMessageBox } from "hr-element";

function openConfirm() {
  HrMessageBox.prompt("Place input your name", "Tip", { type: "info" })
    .then(({ value }) => {
      HrMessage.info(`your name is: ${value}`);
    })
    .catch((action) => {
      HrMessage.warning(`action: ${action}`);
    });
}
</script>

<template>
  <hr-button @click="openConfirm" plain> Click to open the Confirm</hr-button>
</template>
