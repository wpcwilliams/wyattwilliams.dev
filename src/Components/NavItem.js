import React from "react";
import { Link, NavLink } from "react-router-dom";

const itemStyle = {
  marginRight: "60px",
  fontSize: "20px",
  fontFamily: "sans-serif"
};

// export default function NavItem(props) {
//   return (
//     <>
//       <li>
//         <a href={props.link} active>{props.children}</a>
//       </li>
//     </>
//   );
// }

export default function NavItem(props) {
  return (
      <NavLink to={props.link}>
        <li>{props.children}</li>
      </NavLink>
  );
}
