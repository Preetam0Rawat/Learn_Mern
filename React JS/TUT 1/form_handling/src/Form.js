import React, { useState } from 'react'

//Step1 Create form component
const Form = () => {

    //Step2 Define state for form data
    const [formData, setFormData] = useState({                            //Other method would be creating separate states for these values
        username: '',
        feedback: '',
        topic: 'reactjs'
    })

    //Step4 Handle form submittion
    const handleSubmit = (event) => {
       console.log(formData)
       event.preventDefault()
       
    }

    return (
        //Step5 Rendering the form
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type='text' value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}  //Step3 Handle input changes
                />

            </div>
            <div>
                <label>Feedback</label>
                <textarea value={formData.feedback}
                    onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                />

            </div>
            <div>
                <label>Topic</label>
                <select value={formData.topic}   onChange={(e) => setFormData({ ...formData, topic: e.target.value })}>
                    <option value={'react'}>ReactJS</option>
                    <option value={'angular'}>Angular</option>
                    <option value={'nextjs'}>NextJS</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form