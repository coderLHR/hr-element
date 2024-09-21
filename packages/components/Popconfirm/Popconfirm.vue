<script setup lang="ts">
import { ref, computed } from 'vue'
import { addUnit } from '@hr-element/utils'
import { useLocale } from '@hr-element/hooks'
import type { TooltipInstance } from '../Tooltip'
import type { PopconfirmProps, PopconfirmEmits } from './types'

import HrTooltip from '../Tooltip/Tooltip.vue'
import HrButton from '../Button/Button.vue'
import HrIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'HrPopconfirm',
})

const props = withDefaults(defineProps<PopconfirmProps>(), {
  title: '',
  confirmButtonType: 'primary',
  icon: 'question-circle',
  iconColor: '#f90',
  hideAfter: 200,
  width: 150,
})

const emits = defineEmits<PopconfirmEmits>()
const tooltipRef = ref<TooltipInstance>()
const style = computed(() => ({ width: addUnit(props.width) }))

const locale = useLocale()

function hidePopper() {
  tooltipRef.value?.hide()
}

function confrim(e: MouseEvent) {
  emits('confirm', e)
  hidePopper()
}

function cancel(e: MouseEvent) {
  emits('cancel', e)
  hidePopper()
}
</script>

<template>
  <hr-tooltip ref="tooltipRef"
              trigger="click"
              :hide-timeout="hideAfter">
    <template #content>
      <div class="hr-popconfirm"
           :style="style">
        <div class="hr-popconfirm__main">
          <hr-icon v-if="!hideIcon && icon"
                   :icon="icon"
                   :color="iconColor" />
          {{ title }}
        </div>
        <div class="hr-popconfirm__action">
          <hr-button class="hr-popconfirm__cancel"
                     size="small"
                     :type="cancelButtonType"
                     @click="cancel">
            {{ cancelButtonText || locale.t("popconfirm.cancelButtonText") }}
          </hr-button>
          <hr-button class="hr-popconfirm__confirm"
                     size="small"
                     :type="confirmButtonType"
                     @click="confrim">
            {{ confirmButtonText || locale.t("popconfirm.confirmButtonText") }}
          </hr-button>
        </div>
      </div>
    </template>

    <template v-if="$slots.default"
              #default>
      <slot name="default"></slot>
    </template>

    <template v-if="$slots.reference"
              #default>
      <slot name="reference"></slot>
    </template>
  </hr-tooltip>
</template>

<style scoped>
@import './style.css';
</style>
