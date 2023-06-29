import { NavLink } from "react-router-dom";

const Footer = () => {
  //Menu active style
  const isNavActiveStyles = ({ isActive }) => {
    return {
      color: isActive ? "#d4d4d4" : null,
    };
  };

  return (
    <footer className='flex flex-col items-center justify-center gap-5 py-10 mx-auto text-sm text-center md:text-lg footer bg-violet-700 text-violet-50'>
      <div className='flex gap-3 md:gap-5'>
        <NavLink end to='/' style={isNavActiveStyles}>
          Home
        </NavLink>
        <NavLink to='/products' style={isNavActiveStyles}>
          Products
        </NavLink>
      </div>
      <p>&copy; {new Date().getFullYear()} CameraShop.</p>
    </footer>
  );
};

export default Footer;
