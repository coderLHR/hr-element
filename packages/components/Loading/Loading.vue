<script setup lang="ts">
import type { LoadingOptions } from './types'
import { computed, type Ref } from 'vue'
import { isString } from 'lodash-es'
import HrIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'HrLoading',
  inheritAttrs: false,
})
const props = defineProps<LoadingOptions>()

const iconName = computed(() => {
  if (isString(props.spinner)) {
    return props.spinner
  }
  return 'spinner' // 'circle-notch' 也很好看
})
</script>

<template>
  <transition name="fade-in-linear"
              @after-leave="onAfterLeave">
    <div v-show="(props.visible as Ref).value"
         class="hr-loading er-loading__mask"
         :class="{ 'is-fullscreen': fullscreen }">
      <div class="hr-loading__spinner">
        <hr-icon v-if="props.spinner !== false"
                 :icon="iconName"
                 spin />
        <p v-if="text"
           class="hr-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<style>
@import './style.css';
.hr-loading {
  --hr-loading-bg-color: v-bind(background) !important;
  --hr-loading-z-index: v-bind(zIndex) !important;
}
</style>
