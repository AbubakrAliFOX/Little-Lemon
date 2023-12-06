import RegisterForm from "./RegisterForm"
import './style.css'

export default function RegisterPage () {
    return <article className="page-padding">
        <h1 className="form-title">Create an account</h1>
        <RegisterForm />
    </article>
}