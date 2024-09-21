<script setup lang="ts">
import type { AlertProps, AlertEmits, AlertInstance } from './types'
import { typeIconMap } from '@hr-element/utils'
import { computed, ref } from 'vue'

import HrIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'HrAlert',
})

const props = withDefaults(defineProps<AlertProps>(), {
  effect: 'light',
  type: 'info',
  closable: true,
})

const emits = defineEmits<AlertEmits>()
const slots = defineSlots()

const visible = ref(true)

const iconName = computed(() => typeIconMap.get(props.type) ?? 'circle-info')
const withDescription = computed(() => props.description || slots.default)

function close() {
  visible.value = false
  emits('close')
}

function open() {
  visible.value = true
}

defineExpose<AlertInstance>({
  close,
  open,
})
</script>

<template>
  <transition name="hr-alert-fade">
    <div v-show="visible"
         class="hr-alert"
         role="alert"
         :class="{
        [`hr-alert__${type}`]: type,
        [`hr-alert__${effect}`]: effect,
        'text-center': center,
      }">
      <hr-icon v-if="showIcon"
               class="hr-alert__icon"
               :class="{ 'big-icon': withDescription }"
               :icon="iconName" />
      <div class="hr-alert__content">
        <span class="hr-alert__title"
              :class="{ 'with-desc': withDescription }"
              :style="{ display: center && !showIcon ? 'flow' : 'inline' }">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="hr-alert__description">
          <slot>{{ description }}</slot>
        </p>
        <div class="hr-alert__close"
             v-if="closable">
          <hr-icon @click.stop="close"
                   icon="xmark" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
@import './style.css';
</style>