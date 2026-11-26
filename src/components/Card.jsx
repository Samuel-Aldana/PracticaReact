const Card = ({ children, bg = 'bg-zinc-900' }) => {
  return (
    <article
      className={[bg, 'rounded-xl border border-purple-900 p-6'].join(' ')}
    >
      {children}
    </article>
  )
}

export default Card
