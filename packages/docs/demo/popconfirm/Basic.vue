<script setup lang="ts">
import { en, ja, ko, zhCn, zhTw } from "hr-lee-element";
import { get } from "lodash-es";

import { computed, ref } from "vue";

const language = ref("");
const langMap = {
  ja,
  ko,
  en,
  zhCn,
  zhTw,
} as const;
const locale = computed(() => get(langMap, language.value));
const changelang = () => {
  const l = ["zhCn", "zhTw", "ko", "en", "ja"];
  language.value = l[(l.indexOf(language.value) + 1) % l.length];
};
</script>
<template>
  <hr-button @click="changelang" type="info" style="margin-right: 20px"
    >change language</hr-button
  >
  <hr-config-provider :locale="locale">
    <hr-popconfirm title="Are you shure to delete this item?">
      <hr-button>Delete</hr-button>
    </hr-popconfirm>
  </hr-config-provider>
</template>
