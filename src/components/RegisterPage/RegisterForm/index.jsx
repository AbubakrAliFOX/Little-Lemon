import { useState } from "react";


export default function RegisterForm () {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
        address: '',
    });

    const handleChange = (e) => {
        setFormData(prevData => ({...prevData, [e.target.name]: e.target.value}))
        console.log(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return <form onSubmit={handleSubmit} method="post" action="http://localhost:3000/user/login">
        <label htmlFor="name">name</label><input onChange={handleChange} value={formData.name} name="name" id="name" type="text" />
        <label htmlFor="password">password</label><input onChange={handleChange} value={formData.password} name="password" id="password" type="password" />
        <label htmlFor="email">email</label><input onChange={handleChange} value={formData.email} name="email" id="email" type="text" />
        <label htmlFor="address">address</label><input onChange={handleChange} value={formData.address} name="address" id="address" type="text" />
        <button
        className="submit-button"
        type="submit"
        disabled={
          !(
            formData.name &&
            formData.password &&
            formData.email &&
            formData.address
          )
        }
      >
        Reserve a table
      </button>
    </form>
}