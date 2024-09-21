<script lang="ts" setup>
import { HrMessage } from "hr-element";

const open1 = () => {
  HrMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open2 = () => {
  HrMessage.success("Congrats, this is a success message.");
};
</script>
<template>
  <div>
    <hr-button @click="open1">插件式调用</hr-button>
    <hr-button @click="open2">函数式调用</hr-button>
    <hr-button @click="$message.success('Congrats, this is a success message.')"
      >全局方法调用</hr-button
    >
  </div>
</template>
