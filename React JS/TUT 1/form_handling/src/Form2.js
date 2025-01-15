import React, { useEffect, useState } from 'react'
import './Form2.css'
const Form2 = () => {
   const [formData, setFormData] = useState({                            //Other method would be creating separate states for these values
           username: '',
           email: '',
           password: '',
           confirmpassword: ''
    })

    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIssubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormErrors(validate(formData))
        setIssubmit(true);
    }

    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formData);
        }
    }, [formErrors])

    const validate = (values) => {
         const error = {};
         const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
         
         if(!values.username){
            error.username = "*Username is required"
         }

         if(!values.email){
            error.email = "*Email is required"
         }
         else if (!emailRegex.test(values.email)){
            error.email = "*Invalid emaill"
         }

         if(!values.password){
            error.password = "*Password is required"
         }
         else if (values.password.length < 4){
            error.password = "*Length should be more than 4 characters"
         }
         else if (values.password.length > 12){
            error.password = "*Length should be less than 12 characters"
         }

         if(values.password != values.confirmpassword){
            error.confirmpassword = "*Password doesn't match"
         }

        return error
    }

  return (
    <div className='Main'>
      <form onSubmit={handleSubmit}>
      <div>
        <label className='Label'>Username</label>
        <p className='error'>{formErrors.username}</p>
          <input 
                className='Input'
                type='text' 
                value={formData.username}
                onChange={(e)=> setFormData({...formData, username : e.target.value})} 
          />
      </div>
      <div>
        <label className='Label'>Email</label>
        <p className='error'>{formErrors.email}</p>
        <input 
                className='Input'
                type='email' 
                value={formData.email}
                onChange={(e)=> setFormData({...formData, email : e.target.value})} 
          />
      </div>
      <div>
        <label className='Label'>Password</label>
        <p className='error'>{formErrors.password}</p>
        <input 
                className='Input'
                type='password' 
                value={formData.password}
                onChange={(e)=> setFormData({...formData, password : e.target.value})} 
          />
      </div>
      <div>
        <label className='Label'>Confirm Password</label>
        <p className='error'>{formErrors.confirmpassword}</p>
        <input 
                className='Input'
                type='password' 
                value={formData.confirmpassword}
                onChange={(e)=> setFormData({...formData, confirmpassword : e.target.value})} 
          />
      </div>
      <button type='submit' className='button'>Submit Form</button>
      </form>
    </div>
  )
}

export default Form2
