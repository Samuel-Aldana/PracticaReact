import { NavLink } from 'react-router'

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-purple-400 font-semibold'
      : 'text-gray-300 hover:text-purple-400'

  return (
    <nav className="border-b border-purple-900 bg-black">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <NavLink to="/" className="text-xl font-bold text-white">
          WikiGame
        </NavLink>
        <div className="flex gap-6 text-sm">
          <NavLink to="/" end className={linkClass}>
            Inicio
          </NavLink>
          <NavLink to="/games" className={linkClass}>
            Juegos
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
