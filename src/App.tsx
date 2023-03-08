import React, { useState } from "react";
import "./App.css";
import NewTask from "./komponenter/newTask";
import ListTasks from "./komponenter/taskList";
import TodoList from "./modeller/listModel";

function App() {
  const [todoList, setTodoList] = useState<TodoList[]>([]);
  const [display, setDisplay] = useState<boolean>(false);
  const [ptext, setPtext] = useState<string>("");

  const addNewTask = (task: string) => {
    if (task.trim().length !== 0) {
      setDisplay(false);

      const filtered = todoList.filter((value) => value.task === task);
      if (filtered.length === 0) {
        const newTask = new TodoList(task);
        setTodoList((arrayTodoList) => {
          return [...arrayTodoList, newTask];
        });
      } else {
        setDisplay(true);
        setPtext("This task is already in your list!");
      }
    } else {
      setDisplay(true);
      setPtext("You can not add an empty task!");
    }
  };

  const deleteTaskHandler = (id: number) => {
    setTodoList((arrayTodoList) => {
      return arrayTodoList.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <NewTask
        addNewTask={addNewTask}
        display={display}
        ptext={ptext}
      ></NewTask>

      <ListTasks
        list={todoList}
        allTodos={todoList.length}
        onDeleteTaskHandler={deleteTaskHandler}
      ></ListTasks>
    </div>
  );
}

export default App;
