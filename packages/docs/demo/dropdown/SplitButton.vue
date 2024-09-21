<script setup lang="ts">
import { type DropdownItemProps, HrMessage } from "hr-lee-element";

const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];

function handleClick() {
  HrMessage.info("button click");
}
</script>

<template>
  <div class="row">
    <hr-dropdown :items="items">
      <hr-button type="primary">
        Dropdown List
        <hr-icon icon="angle-down" style="margin-left: 8px" />
      </hr-button>
    </hr-dropdown>
    <hr-dropdown
      :items="items"
      type="primary"
      @click="handleClick"
      split-button
    >
      Dropdown List
    </hr-dropdown>
  </div>
</template>

<style scoped>
.row div {
  margin-right: 16px;
}
</style>
