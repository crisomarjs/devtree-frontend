import { Link } from "react-router-dom";

export default function RegisterView() {
  return (
    <>
        <div>RegisterView</div>

        <nav>
            <Link
                to='/auth/register'
            >
                Ya tienes una cuenta? Inicia Sesión
            </Link>
        </nav>
    </>
  )
}
