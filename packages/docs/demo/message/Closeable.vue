<script lang="ts" setup>
import { HrMessage } from "hr-lee-element";

const open1 = () => {
  HrMessage({
    showClose: true,
    message: "This is a message.",
  });
};
const open2 = () => {
  HrMessage({
    showClose: true,
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open3 = () => {
  HrMessage({
    showClose: true,
    message: "Warning, this is a warning message.",
    type: "warning",
  });
};
const open4 = () => {
  HrMessage({
    showClose: true,
    message: "Oops, this is a error message.",
    type: "danger",
  });
};
</script>

<template>
  <hr-button :plain="true" @click="open1">Message</hr-button>
  <hr-button :plain="true" @click="open2">Success</hr-button>
  <hr-button :plain="true" @click="open3">Warning</hr-button>
  <hr-button :plain="true" @click="open4">Error</hr-button>
</template>
