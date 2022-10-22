import Item from "./Item";

const ToDoList = ({ items }) => {
  const removeItem = () => {
    console.log("Removed");
  };
  return (
    <div className="todo-list">
      <ul>
        {
          // TODO: Implement remove Todo
          items.map((item) => (
            <Item item={item} onRemove={removeItem} />
          ))
        }
      </ul>
    </div>
  );
};

export default ToDoList;
