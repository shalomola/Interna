import { NavLink } from "react-router-dom";

const Navlinks = (props) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `lg:text-sm font-medium ml-5 py-1 px-4 ${
          isActive ? 'text-white bg-black' : 'text-black bg-transparent'
        }`
      }
      to={props.to}
    >
      {props.name}
    </NavLink>
  );
};

export default Navlinks;
