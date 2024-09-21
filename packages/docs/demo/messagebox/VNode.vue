<script setup lang="ts">
import { HrMessageBox, HrSwitch, type SwitchValueType } from "hr-lee-element";
import { h, ref } from "vue";

function open1() {
  HrMessageBox({
    title: "Message",
    message: h("p", null, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
}

function open2() {
  const checked = ref<SwitchValueType>(false);
  HrMessageBox({
    title: "Message",
    message: () =>
      h(HrSwitch, {
        modelValue: checked.value,
        "onUpdate:modelValue": (val: SwitchValueType) => {
          checked.value = val;
        },
      }),
  });
}
</script>

<template>
  <hr-button @click="open1" plain>Common VNode</hr-button>
  <hr-button @click="open2" plain>Dynamic props</hr-button>
</template>
