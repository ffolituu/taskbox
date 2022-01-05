import React from "react";
import TaskList from "./TaskList";

export default {
  component: TaskList,
  title: "TaskList",
  //   decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
};

const Template = (args) => <TaskList {...args} />;
export const Default = Template.bind({});
export const WithPinnedTasks = Template.bind({});
export const Loading = Template.bind({});
export const Empty = Template.bind({});

Default.args = {
  loading: false,
  tasks: [
    {
      id: "1",
      title: "Tâche 1",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      id: "2",
      title: "Tâche 2",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      id: "3",
      title: "Tâche 3",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      id: "4",
      title: "Tâche 4",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      id: "5",
      title: "Tâche 5",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      id: "6",
      title: "Tâche 6",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
  ],
};

WithPinnedTasks.args = {
  loading: false,
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: "6", title: "Tâche 6 (épinglé)", state: "TASK_PINNED" },
  ],
};

Loading.args = {
  loading: true,
  tasks: [],
};

Empty.args = {
  loading: false,
  tasks: [],
};
