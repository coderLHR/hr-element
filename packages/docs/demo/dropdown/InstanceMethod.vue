<script setup lang="ts">
import type { DropdownInstance, DropdownItemProps } from "hr-ui";
import { ref } from "vue";

const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];
const dropdownRef = ref<DropdownInstance>();
</script>

<template>
  <hr-button @click="() => dropdownRef?.open()">open</hr-button>
  <hr-button @click="() => dropdownRef?.close()">close</hr-button>
  <br />
  <hr-dropdown ref="dropdownRef" :items="items">
    <span class="dropdown-link">
      Dropdown List
      <hr-icon icon="angle-down" />
    </span>
  </hr-dropdown>
</template>

<style scoped>
.dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--er-color-primary);
  margin-top: 20px;
  i {
    margin-left: 8px;
  }
}
</style>
