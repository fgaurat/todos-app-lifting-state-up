import "../../index.css"
import type { Meta, StoryObj } from '@storybook/react';
import TodoRow from './TodoRow';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'TodoApp/TodoRow',
  component: TodoRow,
  tags: ['autodocs'],
  argTypes: {
    doDelete:{action:"Click"},

  },
} satisfies Meta<typeof TodoRow>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Completed: Story = {
    args: {
        todo:{id:1,userId:1,title:"Une todo Completed",completed:true}
    }
};

export const NotCompleted: Story = {
    args: {
        todo:{id:2,userId:1,title:"Une todo NotCompleted",completed:false}
    }    
};
