export default function List(props) {
  const listItems = props.items.map((item, k) => <li key={k}>{item}</li>);

  return (
    <ul>{listItems}</ul>
  );
};
