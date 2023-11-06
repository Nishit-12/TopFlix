import React from "react";
import styles from "@/app/styles/contact.module.css";
import ContactCard from "@/app/components/contactCard";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={styles.rescontact}>
          <h1>Contact</h1>
          <ContactCard />
        </div>

        <section className={styles.contact_section}>
          <h2>
            We'd Love To Hear <span>From You</span>
          </h2>
          <ContactForm />
        </section>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2290044036554!2d72.80224877493237!3d21.14328288053482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051fa48b4dc07%3A0xffb048d3679d15dd!2sAtlanta%20Shopping%20Mall!5e0!3m2!1sen!2sin!4v1688385436031!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.mapping}
      ></iframe>
    </>
  );
};

export default Contact;
