export const Item = (props) => {

  return (
    <li>
      <input type="checkbox" value={props.item.value} />
      <span className="todo-title">{props.item.name}</span>
      <button onClick={() => props.onRemove()}>Remove</button>
    </li>
  );
};

export default Item;
