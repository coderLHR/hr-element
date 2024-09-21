<script lang="ts" setup>
import { HrMessage } from "hr-ui";
import { h } from "vue";

const open = () => {
  HrMessage("This is a message.");
};

const openVn = () => {
  HrMessage({
    message: h("p", { style: "line-height: 1; font-size: 14px" }, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
};
</script>

<template>
  <hr-button :plain="true" @click="open">Show message</hr-button>
  <hr-button :plain="true" @click="openVn">VNode</hr-button>
</template>
