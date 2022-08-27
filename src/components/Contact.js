import React, { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import emailjs from '@emailjs/browser'

function validateName(value) {
    let error;
    if (value === '') {
        error = 'Your name is required';
    }
    return error;
}

function validateEmail(value) {
    let error;
    if (value === '') {
        error = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

function validateSubject(value) {
    let error;
    if (value === '') {
        error = 'Subject is required';
    }
    return error;
}

function validateBody(value) {
    let error;
    if (value === '') {
        error = 'Body is required';
    }
    return error;
}



export default function Contact(props) {


    const form = useRef();

    const sendEmail = () => {


        emailjs.sendForm('service_i1n08rj', 'template_umutuu6', form.current, '_fW6-3cDHGFpG7NkV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <div className="container text-light mb-5" id="contact">
            <h5 className="text-center mb-4">Contact</h5>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    subject: '',
                    msgBody: '',
                }}

                onSubmit={(values, {resetForm}) => {
                    // same shape as initial values
                    console.log(values);
                    sendEmail()
                    resetForm({ values:"" })
                    window.alert("Email sent successfully")
                }}
            >
                {({ errors, touched, isValidating, isSubmitting, dirty, isValid }) => (

                    <Form ref={form}>

                        <div className="form-group">

                            <Field
                                className="form-control contact-form"
                                type="text" name="name"
                                placeholder="Name"
                                validate={validateName}
                            />

                            {errors.name && touched.name && errors.name}

                        </div>

                        <div className="form-group">

                            <Field
                                className="form-control contact-form"
                                type="text" name="email"
                                placeholder="Your Email"
                                validate={validateEmail}
                            />

                            {errors.email && touched.email && errors.email}

                        </div>

                        <div className="form-group">

                            <Field
                                className="form-control"
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                validate={validateSubject}
                            />
                            {errors.subject && touched.subject && errors.subject}
                        </div>

                        <div className="form-group">

                            <Field
                                className="form-control"
                                type="text"
                                name="msgBody"
                                placeholder="Body"
                                validate={validateBody}
                            />
                            {errors.msgBody && touched.msgBody && errors.msgBody}
                        </div>

                        <div className="mb-5 pb-5">
                            <button
                                className=" btn mb-2 mb-md-0 btn-secondary btn-block btn-rounded "
                                type="submit"

                                disabled={!isValid || !dirty || isValidating || isSubmitting}
                                value="Send">
                                Submit
                            </button>

                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    )
}
