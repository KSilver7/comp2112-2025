'use client';
import PageTitle from "../components/PageTitle";

import { useState } from "react";

export default function Contact() {
    const [ name, setName ] = useState<string>('');

    // watch name input and update state var as input value changes
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const [ message, setMessage ] = useState<string>('');

    // watch the message input and update state var as input value changes
    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }

    const [ confirmation, setConfirmation ] = useState<string>('');
    

    // show confirmation when button clicked

    
    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        setConfirmation(`Your name: ${name} - Your message: ${message}`);
    }

    return (
        <main>
            <PageTitle title="Contact" />
            <h1>Contact Us</h1>
            <p>Contact us at 705.000.0000 or send us a message below</p>
            <input type="text" placeholder="Your Name" value={name} onChange={handleNameChange} />
            <p>Your name is: {name}</p>
            <input type="text" placeholder="Your Message" value={message} onChange={handleMessageChange} />
            <p>Your message is: {message}</p>

            <button onClick={handleSubmit}>Submit</button>
            <p>{confirmation}</p>
        </main>
    );
}