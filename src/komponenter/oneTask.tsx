import { useState } from "react";

interface IOneTask {
  task: string;
  onDeleteTaskHandler: (event: React.MouseEvent) => void;
}

const OneTask = (props: IOneTask) => {
  const [decoration, setDecoration] = useState("none");

  const doneHandler = () => {
    if (decoration === "none") {
      setDecoration("line-through 2px");
    } else {
      setDecoration("none");
    }
  };
  return (
    <>
      <tr>
        <td style={{ textDecoration: decoration }}>
          <li>{props.task}</li>
        </td>
        <td>
          <button onClick={doneHandler}>Klar</button>
          <button onClick={props.onDeleteTaskHandler}>Ta bort</button>
        </td>
      </tr>
    </>
  );
};

export default OneTask;
