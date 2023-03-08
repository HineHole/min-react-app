import OneTask from "./oneTask";
import TodoList from "../modeller/listModel";

interface IListTasks {
  list: TodoList[];
  allTodos: number;
  onDeleteTaskHandler: (id: number) => void;
}

const ListTasks = (props: IListTasks) => {
  const listOfTasks = props.list.map((item) => (
    <OneTask
      key={item.id}
      task={item.task}
      onDeleteTaskHandler={() => props.onDeleteTaskHandler(item.id)}
    />
  ));

  return (
    <div
      className="list-of-tasks"
      style={{
        backgroundColor: props.allTodos !== 0 ? "rgb(100, 200, 100)" : "white",
      }}
    >
      {props.allTodos !== 0 && <h1> Dina Uppgifter:</h1>}
      <hr />
      <table className="table">
        <tbody>{listOfTasks}</tbody>
      </table>
    </div>
  );
};

export default ListTasks;
