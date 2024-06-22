export const defaultLabels = [
  {
    id: "1",
    name: "bug",
    color: "red",
  },
  {
    id: "2",
    name: "feature",
    color: "blue",
  },
  {
    id: "3",
    name: "enhancement",
    color: "cyan",
  },
  {
    id: "4",
    name: "question",
    color: "orange",
  },
  {
    id: "5",
    name: "help wanted",
    color: "lime",
  },
  {
    id: "6",
    name: "wontfix",
    color: "white",
  },
  {
    id: "7",
    name: "duplicate",
    color: "purple",
  },
];

export const possibleStatus = [
  { id: "backlog", label: "Backlog" },
  { id: "todo", label: "Todo" },
  { id: "inProgress", label: "In Progress" },
  { id: "done", label: "Done" },
  { id: "cancelled", label: "Cancelled" },
];

export const defaultIssue = [
  {
    id: "1",
    title: "The App is actually working fine. I just wanted to let you know you're great every time I wear my green shirt",
    status: "help wanted",
    labels: [{ id: "1", name: "help wanted", color: "lime" }],
  },
  {
    id: "2",
    title: "Button is actually working fine. I just wanted to let you know you're great all the time",
    status: "duplicate",
    labels: [{ id: "2", name: "duplicate", color: "purple" }],
  },
  {
    id: "3",
    title: "Target is having a problem when I'm on a boat",
    status: "wontfix",
    labels: [{ id: "3", name: "wontfix", color: "white" }],
  },
  {
    id: "4",
    title: "The App cannot read property 'length' of undefined whenever I try to demo it",
    status: "enhancement",
    labels: [{ id: "4", name: "enhancement", color: "cyan" }],
  },
  {
    id: "5",
    title: "Field won't run right on Tuesdays",
    status: "question",
    labels: [{ id: "5", name: "question", color: "orange" }],
  },
  {
    id: "6",
    title: "JQuery causes the processor to heat up when I'm on a boat",
    status: "bug",
    labels: [{ id: "6", name: "bug", color: "red" }],
  },
  {
    id: "7",
    title: "JavaScript is having a problem all the time",
    status: "feature",
    labels: [{ id: "7", name: "feature", color: "blue" }],
  },
  {
    id: "8",
    title: "The App is actually working fine. I just wanted to let you know you're great when I'm with Taylor Swift",
    status: "help wanted",
    labels: [{ id: "8", name: "help wanted", color: "lime" }],
  },
  {
    id: "9",
    title: "Target looks weird when I'm with Taylor Swift",
    status: "bug",
    labels: [{ id: "9", name: "bug", color: "red" }],
  },
  {
    id: "10",
    title: "JQuery is not working as expected all the time",
    status: "wontfix",
    labels: [{ id: "10", name: "wontfix", color: "white" }],
  },
];