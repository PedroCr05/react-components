// const FounderListItem = (props) => {
// const {founder} = props
//   return (
//     <>
//       <li>
//         <h3>
//           {/* Hello, my name is {props.name}. I am the {props.title} of{" "}
//           {props.company}. {props.credintials} */}
//           Hello, my name is {props.founder.name}. I am the {props.founder.title}{" "}
//           of {props.founder.company}.
//         </h3>
//         <p>{props.founder.credential}</p>
//       </li>
//     </>
//   );
// };

const FounderListItem = ({ founder }) => {
  return (
    <>
      <li>
        <h3>
          {/* Hello, my name is {props.name}. I am the {props.title} of{" "}
            {props.company}. {props.credintials} */}
          Hello, my name is {founder.name}. I am the {founder.title} of{" "}
          {founder.company}.
        </h3>
        <p>{founder.credential}</p>
      </li>
    </>
  );
};

export default FounderListItem;
