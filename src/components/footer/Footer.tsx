import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
  const data = new Date().getFullYear()

  return (
    <footer className="flex justify-center bg-indigo-900 text-white">
      <div className="container flex flex-col items-center py-4">
        <p className='text-lg font-bold'>
  Blog Pessoal Vitória Albuquerque | Copyright: 2026
        </p>
        <p className="text-md">Acesse as nossas redes sociais</p>
        <div className="flex gap-2 pt-2">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <LinkedinLogo size={48} weight="bold" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <InstagramLogo size={48} weight="bold" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FacebookLogo size={48} weight="bold" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer