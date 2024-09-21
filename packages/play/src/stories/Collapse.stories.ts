import type { Meta, StoryObj } from "@storybook/vue3";
import { HrCollapse, HrCollapseItem } from "hr-element";
import 'hr-element/dist/theme/Collapse.css';

type Story = StoryObj<typeof HrCollapse>;

const meta: Meta<typeof HrCollapse> = {
  title: "Example/Collapse",
  component: HrCollapse,
  subcomponents: { HrCollapseItem },
  tags: ["autodocs"],
};

export const Default: Story = {
  render: (args) => ({
    components: {
      HrCollapse,
      HrCollapseItem,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
    <hr-collapse v-bind="args">
      <hr-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </hr-collapse-item>
      <hr-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </hr-collapse-item>
      <hr-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </hr-collapse-item>
    </hr-collapse>
    `,
  }),
  args: {
    accordion: true,
    modelValue: ["a"],
  },
};

export default meta;
