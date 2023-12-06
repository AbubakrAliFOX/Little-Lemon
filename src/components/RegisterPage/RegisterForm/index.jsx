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
        <section className="register-form">
         <div className="form-field"><label className="form-control" htmlFor="name">Name</label><input placeholder="Your name" onChange={handleChange} value={formData.name} name="name" id="name" type="text" /></div>
         <div className="form-field"><label className="form-control" htmlFor="password">Password</label><input placeholder="Your password" onChange={handleChange} value={formData.password} name="password" id="password" type="password" /></div>
         <div className="form-field"><label className="form-control" htmlFor="email">Email</label><input placeholder="example@gmail.com" onChange={handleChange} value={formData.email} name="email" id="email" type="text" /></div>
         <div className="form-field"><label className="form-control" htmlFor="address">Address</label><input placeholder="Your address" onChange={handleChange} value={formData.address} name="address" id="address" type="text" /></div>
        </section>
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
        Create Accout
      </button>
    </form>
}