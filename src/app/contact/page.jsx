import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from "@/app/contact/contact.module.css"
import ContactForm from '../components/ContactForm'


const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
      <ContactCard />

      <section className={styles.contact_section}>
        <h2>We'd love to hear <span>from you</span></h2>
          <ContactForm />
      </section>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4247121303224!2d80.97359907606493!3d26.85824426242794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd377ef4c58b%3A0x398b0ee4e7570492!2sFun%20Republic%20Mall%2C%20NH%2028%2C%20Vipin%20Khand%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226016!5e0!3m2!1sen!2sin!4v1682430883707!5m2!1sen!2sin" width={100} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping} ></iframe>
      </>    
      )
}

export default Contact