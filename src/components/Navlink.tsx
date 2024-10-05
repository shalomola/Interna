import { NavLink } from "react-router-dom";

// Define the type for props
interface NavlinksProps {
  to: string;  // The 'to' property should be a string, as used in NavLink
  name: string;  // The 'name' property should also be a string
}

const Navlinks: React.FC<NavlinksProps> = (props) => {
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
