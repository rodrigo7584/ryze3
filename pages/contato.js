import { useEffect, useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contato() {
  useEffect(() => {
    // Load the HubSpot JavaScript SDK
    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/v2.js'
    script.async = true
    document.body.appendChild(script)

    // When the script is loaded, create the form
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '40106032',
          formId: '39157407-8f1f-4c5b-9b4a-7f5798f522c5',
          target: '.hubspot-form-container' // Replace with the ID or selector where you want the form to appear
        })
      }
    }

    return () => {
      // Cleanup the script if the component unmounts
      document.body.removeChild(script)
    }
  }, [])
  return (
    <>
      <Header />
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="hubspot-form-container"></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
