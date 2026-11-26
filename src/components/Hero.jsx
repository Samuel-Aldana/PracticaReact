import { Link } from 'react-router'

const Hero = ({
  title = 'Explora el mundo de los videojuegos',
  subtitle = 'Descubre juegos, habilidades y coleccionables en un solo lugar.',
}) => {
  return (
    <section className="py-16">
      <h1 className="max-w-2xl text-4xl font-bold text-white sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-xl text-lg text-gray-400">{subtitle}</p>
      <Link
        to="/games"
        className="mt-7 inline-block rounded-lg bg-purple-700 px-5 py-3 font-semibold text-white hover:bg-purple-600"
      >
        Ver juegos
      </Link>
    </section>
  )
}

export default Hero
