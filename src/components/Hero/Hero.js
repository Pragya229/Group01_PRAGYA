import React from "react"
import Image from "../Images/Images"

const Hero = () => {
  return (

    <div className="container col-xxl-8 px-5 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-10 py-10">
        <div className="col-8 col-sm-8 col-lg-6">

          <Image
            className="d-block mx-lg-auto img-fluid"
            filename="i1.jpg"
            alt="1"
          />
          
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3 text-bold">
            BRAINZONE
          </h1>
          <p className="lead">
          “BRAINZONE” or we can also say “ Fun Group Project” is an innovative platform which provides quizzes,
          and digital paint to increase imaginative thinking of the user. 
          This platform is designed in such a way that people of all age groups can participate in the
          activities according to their choices. This website is a source of entertainment in which the general or 
          specific knowledge of the players is tested by a series of questions. Users can also show their innovation on the 
          white board provided by this website.
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default Hero