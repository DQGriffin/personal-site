"use client"

import { useState } from "react"

export function ContactForm () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isNameErrorHidden, setIsNameErrorHidden] = useState(true)
    const [isEmailErrorHidden, setIsEmailErrorHidden] = useState(true)
    const [isMessageErrorHidden, setIsMessageErrorHidden] = useState(true)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const isFormValid = () => {
        if (name === '') {
            setIsNameErrorHidden(false)
            return false
        } else {
            setIsNameErrorHidden(true)
        }

        if (email === '' || !isEmailValid()) {
            setIsEmailErrorHidden(false)
            return false
        } else {
            setIsEmailErrorHidden(true)
        }

        if (message === '') {
            setIsMessageErrorHidden(false)
            return false
        } else {
            setIsMessageErrorHidden(true)
        }

        return true
    }

    const isEmailValid = () => {
        return email.includes('@') && email.includes('.')
    }

    const handleSubmit = () => {
        if (!isFormValid()) {
            return
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({name: name, email: email, message: message})
        })
        setFormSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
    }

    if (formSubmitted) {
        return (
            <div className="flex flex-col justify-center items-center transition-all duration-1000">
                <h3 className='text-3xl font-semibold my-4'>Thanks for reaching out!</h3>
                <p className='text-center'>I&apos;ll get back to you as soon as I can.</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center items-center" id="contact-form">
            <div className=' mx-4 lg:w-[500px] flex flex-col items-center justify-center py-6 space-y-4'>
                <h3 className='text-3xl font-bold'>Contact me</h3>
                
                <div className='w-full'>
                    <p className='font-bold'>Your name*</p>
                    <p className="text-red-600 mt-2" hidden={isNameErrorHidden}>You must provide your name</p>
                    <input className='border-[2px] border-slate-500 focus:outline-none focus:border-contactbutton transition duration-300 bg-inputbg rounded mt-1 w-full h-12 ' aria-label="name-field" type="text" value={name} onInput={(e) => setName(e.currentTarget.value)} />
                </div>
                <div className='w-full'>
                    <p className='font-bold'>Your email*</p>
                    <p className="text-red-600 text-sm mt-2" hidden={isEmailErrorHidden}>Hmm... That doesn&apos;t look like a valid email address</p>
                    <input className='border-[2px] border-slate-500 focus:outline-none focus:border-contactbutton transition duration-300 bg-inputbg rounded mt-1 w-full h-12' aria-label="email-field" type="email" value={email} onInput={(e) => setEmail(e.currentTarget.value)} />
                </div>
                <div className='w-full'>
                    <p className='font-bold mb-1'>Message*</p>
                    <p className="text-red-600 mt-2" hidden={isMessageErrorHidden}>You must provide a message</p>
                    <textarea className='border-[2px] border-slate-500 focus:outline-none bg-inputbg focus:border-contactbutton transition duration-300 w-full rounded' name="message" aria-label="message-field" value={message} id="" cols={30} rows={10} onInput={(e) => setMessage(e.currentTarget.value)}></textarea>
                </div>
                <button className='p-2 bg-contactbutton disabled:bg-inputbg disabled:text-slate-500 transition duration-300 text-white rounded-lg' disabled={name === '' || email === '' || message === ''} onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}