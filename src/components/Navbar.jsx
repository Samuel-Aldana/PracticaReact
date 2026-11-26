import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink
          to="/games"
          className={({ isActive }) =>
            isActive ? 'bg-black text-white' : 'bg-red-500 text-black'
          }
        >
          Games
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
          }
        >
          Inicio
        </NavLink>
      </nav>
    </>
  )
}

export default Navbar
