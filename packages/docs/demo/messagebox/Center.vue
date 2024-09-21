<script setup lang="ts">
import { HrMessage, HrMessageBox } from "hr-lee-element";

function openMsgBox() {
  HrMessageBox.confirm(
    "proxy will permanently delete the file. Continue?",
    "Warning",
    {
      type: "warning",
      center: true,
      // 这里展示一下 不用 Promise 写法的时候
      callback(action) {
        if (action === "confirm") {
          HrMessage.info(action);
        } else {
          HrMessage.warning(action as string);
        }
      },
    }
  );
}
</script>

<template>
  <hr-button @click="openMsgBox" plain>Click to open Message Box</hr-button>
</template>
