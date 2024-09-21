<template>
  <div>
    <hr-button type="primary" loading>Loading</hr-button>
    <hr-button type="primary" loading-icon="circle-notch" loading
      >Loading</hr-button
    >
    <hr-button type="primary" loading>
      <template #loading>
        <hr-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </hr-button>
  </div>
</template>
