import React from "react"
import Layout from "../components/Layout/Layout"
import Image from "../components/Images/Images"
import ContactUs from "../components/ContactUs/ContactUs"

const Contact = () => {
  return (
    <Layout>
      <Image 
             className="d-block mx-lg-auto img-fluid"
             filename={"contact.jpg"}
             alt="1"
             />

      <div className="container py-5"> </div>
      <ContactUs />
    </Layout>
  )
}

export default Contact