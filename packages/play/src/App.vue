<script lang="ts" setup>
import { HrMessage, type FormInstance } from 'hr-element-ui';
import { reactive, ref } from 'vue';

const formRef = ref<FormInstance>()
const form = reactive({
  name: '',
  desc: '',
})

const rules = reactive({
  name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
  desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
})

const onSubmit = () => {
  formRef.value?.validate().then((valid) => {
    if (valid) {
      HrMessage.success('submit!')
    }
  })
}

const onReset = () => {
  formRef.value?.resetFields()
}
</script>

<template>
  <hr-form ref="formRef"
           :model="form"
           :rules="rules">
    <hr-form-item label="Activity name"
                  prop="name">
      <hr-input v-model="form.name" />
    </hr-form-item>
    <hr-form-item label="Activity form"
                  prop="desc">
      <hr-input v-model="form.desc"
                type="textarea" />
    </hr-form-item>
    <hr-form-item>
      <hr-button type="primary"
                 @click="onSubmit">Create</hr-button>
      <hr-button @click="onReset">Reset</hr-button>
    </hr-form-item>
  </hr-form>
</template>
