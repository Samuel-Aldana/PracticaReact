import { Link } from 'react-router'
import Hero from '../components/Hero'
import Card from '../components/Card'
import { useEffect } from 'react'
import { useState } from 'react'

const Home = () => {
  const [games, setGames] = useState([])
  useEffect(() => {
    fetch('/api/games')
      .then((response) => response.json())
      .then((data) => setGames(data))
  }, [])

  return (
    <main className="min-h-screen bg-[#0b0b0f]">
      <div className="mx-auto max-w-5xl px-5 pb-16">
        <Hero />

        <section className="grid gap-5 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-bold text-white">Explorar juegos</h2>
            <p className="mt-3 mb-5 text-gray-400">
              Consulta los juegos y sus desbloqueables.
            </p>
            <Link
              to="/games"
              className="font-semibold text-purple-400 hover:text-purple-300"
            >
              Ver catálogo →
            </Link>
          </Card>
          <Card bg="bg-purple-950">
            <h2 className="text-xl font-bold text-white">Añadir juego</h2>
            <p className="mt-3 mb-5 text-gray-400">
              Comparte un juego con la comunidad.
            </p>
            <Link
              to="/games/add"
              className="font-semibold text-purple-400 hover:text-purple-300"
            >
              Añadir juego →
            </Link>
          </Card>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-white">Juegos recientes</h2>
          {games.map((game) => (
            <p key={game.id}>{game.title}</p>
          ))}
          <p className="mt-4 rounded-xl border border-purple-900 p-6 text-gray-400">
            Aquí aparecerán los tres juegos añadidos más recientemente.
          </p>
        </section>
      </div>
    </main>
  )
}

export default Home
