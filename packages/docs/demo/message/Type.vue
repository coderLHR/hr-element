<script lang="ts" setup>
import { HrMessage } from "hr-element-ui";

const open1 = () => {
  HrMessage("This is a message.");
};
const open2 = () => {
  HrMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open3 = () => {
  HrMessage({
    message: "Warning, this is a warning message.",
    type: "warning",
  });
};
const open4 = () => {
  HrMessage.error("Oops, this is a error message.");
};
</script>

<template>
  <hr-button :plain="true" @click="open2">Success</hr-button>
  <hr-button :plain="true" @click="open3">Warning</hr-button>
  <hr-button :plain="true" @click="open1">Message</hr-button>
  <hr-button :plain="true" @click="open4">Error</hr-button>
</template>
