<script setup>
import { HrMessage } from "hr-element-ui";

function handleClose() {
  HrMessage.info("close callback");
}</script>
<template>
  <div class="basic block">
    <hr-alert title="Unclosable alert"
              type="success"
              :closable="false" />
    <hr-alert title="Alert with callback"
              type="warning"
              @close="handleClose" />
  </div>
</template>
