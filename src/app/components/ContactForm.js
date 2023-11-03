'use client'

import React, {useState} from 'react';
import styles from "@/app/styles/contact.module.css"
import {Inter, Mulish} from "next/font/google";


const inter = Inter({ subsets: ["latin"] });
const ContactForm = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message: "",
    })
    const [status,setStatus] = useState(null)


    function handleChange(e) {

        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('api/contact', {
                method: "POST",
                headers: {"Content_type": "application/json"},
                body: JSON.stringify({
                    username : user.username,
                    email : user.email,
                    phone : user.phone,
                    message : user.message
                } )
            })

            if(response.status === 200)
            {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: "",
                })
                setStatus('success')
            }
            else
            {
                setStatus('error')
            }
        } catch (e) {
            console.log(e)
        }
    }


    return (<form className={styles.contact_form} onSubmit={handleSubmit}>

        <div className={styles.input_field}>

            <label htmlFor="username" className={styles.label}>
                Enter Your Name
                <input type="text" name="username" id="username" placeholder="Enter Your Name"
                       className={inter.c} value={user.username} onChange={handleChange} autoComplete="off"
                       required/>
            </label>


        </div>

        <div className={styles.input_field}>

            <label htmlFor="email" className={styles.label}>
                Email
                <input type="email" name="email" id="email" placeholder="Enter Your Email"
                       className={inter.c} value={user.email} onChange={handleChange} autoComplete="off"
                       required/>
            </label>


        </div>

        <div className={styles.input_field}>

            <label htmlFor="phone" className={styles.label}>
                Phone
                <input type="number" name="phone" id="phone" placeholder="Enter Your Phone"
                       className={inter.c} value={user.phone} onChange={handleChange} autoComplete="off"
                       required/>
            </label>


        </div>

        <div className={styles.input_field}>

            <label htmlFor="message" className={styles.label}>
                Message
                <textarea name="message" id="message" placeholder="Enter Your Message" rows={5}
                          className={inter.c} value={user.message} onChange={handleChange} autoComplete="off"
                          required/>
            </label>


        </div>

        <div>
            {status === 'success' && <p className={styles.success_msg}>Thanks For Submitting Your Message!</p>}
            {status === 'error' && <p className={styles.error_msg}>There Was An Error Submitting Your Message!</p>}
            <button type="submit" className={inter.c}>Send Message</button>
        </div>

    </form>);
};

export default ContactForm;