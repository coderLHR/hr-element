<script lang="ts" setup>
import { HrNotification } from 'hr-element-ui';

const open = () => {
  HrNotification.success({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  })
}
</script>

<template>
  <hr-button plain @click="open"> Hide close button </hr-button>
</template>