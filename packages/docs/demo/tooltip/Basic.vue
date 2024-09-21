<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <hr-tooltip
        class="box-item"
        content="Top Left prompts info"
        placement="top-start"
      >
        <hr-button>top-start</hr-button>
      </hr-tooltip>
      <hr-tooltip
        class="box-item"
        content="Top Center prompts info"
        placement="top"
      >
        <hr-button>top</hr-button>
      </hr-tooltip>
      <hr-tooltip
        class="box-item"
        content="Top Right prompts info"
        placement="top-end"
      >
        <hr-button>top-end</hr-button>
      </hr-tooltip>
    </div>
    <div class="row">
      <hr-tooltip
        class="box-item"
        content="Left Top prompts info"
        placement="left-start"
      >
        <hr-button>left-start</hr-button>
      </hr-tooltip>
      <hr-tooltip
        class="box-item"
        content="Right Top prompts info"
        placement="right-start"
      >
        <hr-button>right-start</hr-button>
      </hr-tooltip>
    </div>
    <div class="row">
      <hr-tooltip
        class="box-item"
        content="Left Center prompts info"
        placement="left"
      >
        <hr-button class="mt-3 mb-3">left</hr-button>
      </hr-tooltip>
      <hr-tooltip
        class="box-item"
        content="Right Center prompts info"
        placement="right"
      >
        <hr-button>right</hr-button>
      </hr-tooltip>
    </div>
    <div class="row">
      <hr-tooltip
        class="box-item"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <hr-button>left-end</hr-button>
      </hr-tooltip>
      <hr-tooltip
        class="box-item"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <hr-button>right-end</hr-button>
      </hr-tooltip>
    </div>
    <div class="row center">
      <hr-tooltip
        class="box-item"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <hr-button>bottom-start</hr-button>
      </hr-tooltip>
      <hr-tooltip
        class="box-item"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <hr-button>bottom</hr-button>
      </hr-tooltip>
      <hr-tooltip
        class="box-item"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <hr-button>bottom-end</hr-button>
      </hr-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
