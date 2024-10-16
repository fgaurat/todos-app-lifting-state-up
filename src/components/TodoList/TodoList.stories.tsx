import "../../index.css"
import type { Meta, StoryObj } from '@storybook/react';
import TodoList from './TodoList';
import { Todo } from "../../core/Todo";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'TodoApp/TodoList',
  component: TodoList,
  tags: ['autodocs'],
  argTypes: {
    doDelete:{action:"Click"},
    todos:[]
  },
} satisfies Meta<typeof TodoList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
    args: {
        todos:[
            {
                "userId": 1,
                "id": 6,
                "title": "qui ullam ratione quibusdam voluptatem quia omnis",
                "completed": false
              },
              {
                "userId": 1,
                "id": 7,
                "title": "illo expedita consequatur quia in",
                "completed": false
              },
              {
                "userId": 1,
                "id": 8,
                "title": "quo adipisci enim quam ut ab",
                "completed": true
              },            
        ]
    }
};
