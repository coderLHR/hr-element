<script lang="ts" setup>
import { HrNotification } from "hr-lee-element";

const open1 = () => {
  HrNotification({
    title: "Success",
    message: "This is a success message",
    type: "success",
  });
};

const open2 = () => {
  HrNotification({
    title: "Warning",
    message: "This is a warning message",
    type: "warning",
  });
};

const open3 = () => {
  HrNotification({
    title: "Info",
    message: "This is an info message",
    type: "info",
  });
};

const open4 = () => {
  HrNotification({
    title: "Error",
    message: "This is an error message",
    type: "danger",
  });
};
</script>

<template>
  <hr-button plain @click="open1"> Success </hr-button>
  <hr-button plain @click="open2"> Warning </hr-button>
  <hr-button plain @click="open3"> Info </hr-button>
  <hr-button plain @click="open4"> Error </hr-button>
</template>
