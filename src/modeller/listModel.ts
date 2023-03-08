class TodoList {
  id: number;
  task: string;

  constructor(task: string) {
    this.id = Math.random();
    this.task = task;
  }
}
export default TodoList;
