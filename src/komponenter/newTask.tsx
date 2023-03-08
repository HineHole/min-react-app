import { useState } from "react";

interface InewTask {
  display: boolean;
  ptext: string;
  addNewTask: (task: string) => void;
}

const NewTask = (props: InewTask) => {
  const [task, setTask] = useState<string>("");

  const addTaskHandler = (event: React.MouseEvent<HTMLElement>) => {
    props.addNewTask(task);
    setTask("");
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };
  return (
    <div className="addTask">
      <div>
        <h1>skriv uppgiften här:</h1>
      </div>

      <div>
        <input
          className="input-country"
          type="text"
          value={task}
          onChange={(event) => inputChangeHandler(event)}
        ></input>
        <button onClick={addTaskHandler}>Lägg till uppgift</button>
      </div>

      <div>
        <p style={{ visibility: props.display ? "visible" : "hidden" }}>
          {props.ptext}
        </p>
      </div>
    </div>
  );
};

export default NewTask;
