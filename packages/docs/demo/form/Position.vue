<script lang="ts" setup>
import { HrMessage, type FormProps } from "hr-lee-element";
import { reactive, ref } from "vue";

const form = reactive({
  name: "",
  region: "",
  delivery: false,
  desc: "",
});
const options = ref([
  { value: "beijing", label: "Zone One" },
  { value: "shanghai", label: "Zone Two" },
]);
const labelPosition = ref<FormProps["labelPosition"]>("right");

const onSubmit = () => {
  HrMessage.success("submit");
};
</script>

<template>
  <hr-button-group size="small">
    <hr-button
      @click="labelPosition = 'left'"
      :type="labelPosition === 'left' ? 'primary' : 'info'"
      >Left</hr-button
    >
    <hr-button
      @click="labelPosition = 'right'"
      :type="labelPosition === 'right' ? 'primary' : 'info'"
      >Right</hr-button
    >
    <hr-button
      @click="labelPosition = 'top'"
      :type="labelPosition === 'top' ? 'primary' : 'info'"
      >Top</hr-button
    >
  </hr-button-group>
  <div style="margin: 20px"></div>
  <hr-form :model="form" :label-position="labelPosition">
    <hr-form-item label="Activity name">
      <hr-input v-model="form.name" />
    </hr-form-item>
    <hr-form-item label="Activity zone">
      <hr-select
        v-model="form.region"
        placeholder="please select your zone"
        :options="options"
      />
    </hr-form-item>
    <hr-form-item label="Instant delivery">
      <hr-switch v-model="form.delivery" />
    </hr-form-item>
    <hr-form-item label="Activity form">
      <hr-input v-model="form.desc" type="textarea" />
    </hr-form-item>
    <hr-form-item>
      <hr-button type="primary" @click="onSubmit">Create</hr-button>
      <hr-button>Cancel</hr-button>
    </hr-form-item>
  </hr-form>
</template>
