<script lang="ts" setup>
import { HrMessage, type FormInstance } from "hr-element";
import { reactive, ref } from "vue";

const formRef = ref<FormInstance>();
const form = reactive({
  name: "",
  password: "",
  passwordConfirm: "",
});

const rules: any = reactive({
  name: [
    { required: true, message: "请输入活动名称", trigger: "blur" },
    { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
  ],
  password: [{ required: true, trigger: "blur", message: "请输入密码" }],
  passwordConfirm: [
    {
      required: true,
      trigger: "blur",
      message: "请再次输入密码",
    },
    {
      validator: (_: typeof rules, value: string) => value === form.password,
      trigger: "blur",
      message: "两个密码必须相同",
    },
  ],
});

const onSubmit = async (instance?: FormInstance) => {
  const valid = await instance?.validate();
  if (!valid) return;
  HrMessage.success("submit!");
};

const onReset = () => {
  formRef.value?.resetFields();
};
</script>

<template>
  <hr-form
    ref="formRef"
    :model="form"
    :rules="rules"
    label-position="top"
    @submit.prevent="onSubmit(formRef)"
  >
    <hr-form-item label="Activity name" prop="name">
      <hr-input v-model="form.name" />
    </hr-form-item>
    <hr-form-item label="Password" prop="password">
      <hr-input v-model="form.password" type="password" />
    </hr-form-item>
    <hr-form-item label="Password Confirm" prop="passwordConfirm">
      <hr-input v-model="form.passwordConfirm" type="password" />
    </hr-form-item>
    <hr-form-item>
      <hr-button type="primary" native-type="submit">Create</hr-button>
      <hr-button @click="onReset">Reset</hr-button>
    </hr-form-item>
  </hr-form>
</template>
