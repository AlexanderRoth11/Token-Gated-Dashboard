import React from 'react'

type ButtonProps = {
  text: string
  onClick: () => void
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className='rounded-lg border cursor-pointer border-white/55 px-8 py-2 duration-200 hover:border-white/85 hover:bg-zinc-800/40'>
      {text}
    </button>
  )
}

export default Button
