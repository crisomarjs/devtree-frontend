import { Link } from "react-router-dom"

export default function LoginView() {
  return (
    <>
        <div className="text-6xl">LoginView</div>

        <nav>
            <Link
                to='/auth/register'
            >
                ¿No tienes una cuenta? Crea una aquí
            </Link>
        </nav>
    </>
    
  )
}
