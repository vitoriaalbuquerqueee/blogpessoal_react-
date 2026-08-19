
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="w-full bg-indigo-900 text-white flex justify-center py-4">
      <div className="container flex justify-between text-lg px-4">
        <Link to="/home" className="text-2xl font-bold">
          Blog Pessoal
        </Link>

        <div className="flex gap-4">
          <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>
          <span className="hover:underline cursor-pointer">Postagens</span>
          <span className="hover:underline cursor-pointer">Temas</span>
          <span className="hover:underline cursor-pointer">Cadastrar tema</span>
          <span className="hover:underline cursor-pointer">Perfil</span>
          <span className="hover:underline cursor-pointer">Sair</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar