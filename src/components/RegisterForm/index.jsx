

export default function RegisterForm () {
    return <form method="post" action="http://localhost:3000/user/login">
        <input name="username" type="text" />
        <input name="password" type="text" />
        <input name="name" type="text" />
        <input name="email" type="text" />
        <input name="address" type="text" />
        <button type="submit">Sumbit</button>
    </form>
}