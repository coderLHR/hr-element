<script setup lang="ts">
import { HrMessage, HrMessageBox } from "hr-element";

function openConfirm() {
  HrMessageBox.confirm("proxy will permanently delete the file. Continue?", "Warning", { type: "warning" })
    .then((action) => {
      HrMessage.info(`action: ${action}`);
    })
    .catch((action) => {
      HrMessage.warning(`action: ${action}`);
    });
}
</script>

<template>
  <hr-button @click="openConfirm" plain> Click to open the Confirm</hr-button>
</template>
