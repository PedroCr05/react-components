const FounderListItem = (props) => {
  return (
    <>
      <li>
        <h3>
          Hello, my name is {props.name}. I am the {props.title} of{" "}
          {props.company}.
        </h3>
      </li>
    </>
  );
};

export default FounderListItem;
