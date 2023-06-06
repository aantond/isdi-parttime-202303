import { context } from '../ui.js'
import authenticateUser from '../logic/authenticateUser.js'

export default function Login({ onRegisterClick, onUserLoggedIn }) {
    console.log('Login -> render')

    function handleRegisterClick(event) {
        event.preventDefault()

        onRegisterClick()
    }

    function handleLogin(event) {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            const userId = authenticateUser(email, password)

            context.userId = userId

            onUserLoggedIn()
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="login page container">
        <h1 className="title">Login</h1>

        <form className="form" onSubmit={handleLogin}>
            <input className="input" type="email" name="email" placeholder="email" />
            <input className="input" type="password" name="password" placeholder="password" />
            <button className="button" type="submit">Login</button>
        </form>

        <p>Go to <a href="" onClick={handleRegisterClick}>Register</a></p>
    </div>
}