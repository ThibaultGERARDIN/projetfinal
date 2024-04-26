import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../../styles/components/ContactMe.scss'
import Swal from 'sweetalert2'

const ContactMe = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_dl2rp2e', 'template_lakguta', form.current, {
        publicKey: 'e-cSNLo4T91MuYRhS',
      })
      .then(
        () => {
          console.log('SUCCESS!')
          Swal.fire({
            icon: 'success',
            title: 'Message envoyé !',
            showConfirmButton: false,
            timer: 1500,
          })
          form.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text)
        },
      )
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="ContactMe">
      <label htmlFor="last-name">Nom</label>
      <input
        type="text"
        name="last-name"
        id="last-name"
        className="input-txt"
        required
      />
      <label htmlFor="first-name">Prénom</label>
      <input
        type="text"
        name="first-name"
        id="first-name"
        className="input-txt"
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        className="input-txt"
        required
      />
      <label htmlFor="phone">Téléphone</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        className="input-txt"
        required
      />
      <label htmlFor="subject">Motif de contact</label>

      <select name="subject" id="select" className="input-select" required>
        <option value="">Veuillez choisir un motif</option>
        <option value="Je souhaite créer un site">
          Je souhaite créer un site
        </option>
        <option value="Je souhaite optimiser mon site">
          Je souhaite optimiser mon site
        </option>
        <option value="Je souhaite refaire mon site">
          Je souhaite refaire mon site
        </option>
        <option value="Autre">Autre</option>
      </select>
      <label htmlFor="message">Votre message</label>
      <textarea name="message" id="message" required />
      <input type="submit" value="Envoyer" className="link submit" />
    </form>
  )
}

export default ContactMe
