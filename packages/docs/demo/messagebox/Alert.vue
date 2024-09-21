<script setup lang="ts">
import { HrMessage, HrMessageBox } from "hr-element-ui";

function openAlert() {
  HrMessageBox.alert("This is a message", "Title")
    .then((action) => {
      HrMessage.info(`action: ${action}`);
    })
    .catch((action) => {
      HrMessage.warning(`action: ${action}`);
    });
}
</script>

<template>
  <hr-button @click="openAlert" plain> Click to open the Alert</hr-button>
</template>
