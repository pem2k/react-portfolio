import React from 'react'
import { useForm } from "react-hook-form";
// import emailjs from '@emailjs/browser'

export default function Contact() {
  

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (event, data) => {
        event.preventDefault() 
        console.log(data)}

    // const form = useRef();

    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm('service_i1n08rj', 'template_umutuu6', e.target, '_fW6-3cDHGFpG7NkV')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // };

       
          
        
    return (
        <div className="container text-light mb-5" id="contact">
            <h5 className="text-center">Contact</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    
                    <input className="form-control contact-form"  type="text" name="from_email" placeholder="Your Email" {...register("Email", {required: "Your Email is required.", pattern: /^\S+@\S+$/i})} />
                    <p>{errors.Email?.message}</p>
                </div>

                <div className="form-group">
                   
                    <input className="form-control" type="text" name="subject" placeholder="Subject" {...register("Subject", {required: "Subject is required."})} />
                    <p>{errors.Subject?.message}</p>
                </div>

                <div className="form-group">
                   
                    <input className="form-control" type="text" name="html_message" placeholder="Body" {...register("Body", {required: "Body is required."})} />
                    <p>{errors.Body?.message}</p>
                </div>

                <div className="mb-5 pb-5">
                <button className=" btn mb-2 mb-md-0 btn-secondary btn-block btn-rounded " type="submit" value="Send">
                    Submit
                </button>
                </div>
            </form>

        </div>
    )
}
