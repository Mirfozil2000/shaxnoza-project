import { Link, NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  //Accessing state from cart slice
  const { cartItems } = useSelector((state) => state.cart);

  //Menu active style
  const isNavActiveStyles = ({ isActive }) => {
    return {
      color: isActive ? "#d4d4d4" : null,
    };
  };

  return (
    <div className='flex items-center justify-center p-10 navbar-bg bg-violet-500 text-violet-50 h-28 sm:h-20 sm:p-0'>
      <div className='container flex flex-col items-center justify-between gap-3 mx-auto navbar sm:gap-0 sm:flex-row'>
        <div className='left'>
          <Link to='/' className='group'>
            <span className='text-xl font-semibold duration-300 logo group-hover:text-orange-500'>
              Camera
              <span className='text-orange-500 duration-300 group-hover:text-violet-50'>
                Shop
              </span>
            </span>
          </Link>
        </div>
        <div className='flex items-center gap-5 right'>
          <NavLink end to='/' className='nav-link' style={isNavActiveStyles}>
            Home
          </NavLink>
          <NavLink
            to='/products'
            className='nav-link'
            style={isNavActiveStyles}
          >
            Products
          </NavLink>
          <Link to='/cart'>
            <span className='relative cart-icon'>
              <BsCart3 />
              <span className='cart-counter absolute -top-3 -right-3 text-xs bg-orange-600 font-medium rounded-full w-5 h-5 flex justify-center items-center z-[1]'>
                {cartItems.length}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
