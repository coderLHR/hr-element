<template>
  <h2>通过 slot 传入内容</h2>
  <div style="max-width: 600px">
    <hr-alert type="success">Success alert</hr-alert>
    <hr-alert type="info">Info alert</hr-alert>
    <hr-alert type="warning">Warning alert</hr-alert>
    <hr-alert type="danger">Error alert</hr-alert>
  </div>
  <h2>通过 prop 传入内容</h2>
  <div style="max-width: 600px">
    <hr-alert type="success"
              title="Success alert" />
    <hr-alert type="info"
              title="Info alert" />
    <hr-alert type="warning"
              title="Warning alert" />
    <hr-alert type="danger"
              title="Error alert" />
  </div>
</template>
