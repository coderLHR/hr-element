import type { Meta, StoryObj } from "@storybook/vue3";

import { fn } from "@storybook/test";
import { HrTooltip } from "hr-ui";
import 'hr-ui/dist/theme/Tooltip.css';

type Story = StoryObj<typeof HrTooltip>;

const meta: Meta<typeof HrTooltip> = {
  title: "Example/Tooltip",
  component: HrTooltip,
  tags: ["autodocs"],
  argTypes: {
    trigger: {
      options: ["hover", "click", "contextmenu"],
      control: {
        type: "select",
      },
    },
    placement: {
      options: ["top", "bottom", "left", "right"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    "onVisible-change": fn(),
  },
};

export const Default: Story = {
  args: {
    content: "This is a tooltip",
    placement: "top",
    trigger: "hover",
  },
  render: (args) => ({
    components: { HrTooltip },
    setup() {
      return {
        args,
      };
    },
    template: `
      <HrTooltip v-bind="args">
          <div style="height:30px;width:200px;background:red;padding:auto">trigger</div>
      </HrTooltip>
    `,
  }),
};

export default meta;
