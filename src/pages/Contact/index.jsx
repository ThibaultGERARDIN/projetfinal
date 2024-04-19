import '../../styles/pages/Contact.scss'
import Banner from '../../components/Banner'
import ContactMe from '../../components/ContactMe'

function Contact() {
  return (
    <div className="Contact">
      <Banner>
        <h2 className="banner-title">CONTACT</h2>
      </Banner>
      <div className="contact-form">
        <h2>
          Une question ? Un projet ? <br></br>
          N’hésitez pas à me contacter !
        </h2>
        <ContactMe />
      </div>
    </div>
  )
}

export default Contact
