import React from "react"
import Layout from "../components/Layout/Layout"

import Image from "../components/Images/Images"
export default function About() {
  return (
    <Layout>
      <Image 
             className="d-block mx-lg-auto img-fluid"
             filename={"about.jpg"}
             alt="1"
             />
       
        <h1 class="display-10 fw-bold lh-1 mb-3 text-center text-warning">About Us </h1>
        <div class="container col-xxl-20 px-2 py-2">
        <h2 class="display-10 fw-bold lh-1 mb-3 ">What is BRAINZONE?</h2>
          <p class="lead">“BRAINZONE” or we can also say “ Fun Group Project” is an innovative platform which provides quizzes , 
          and digital paint to increase imaginative thinking of the user . 
          This platform is designed in such a way that people of all age groups can participate in the activities according to their choices.
          This website is a source of entertainment in which the general or specific knowledge of the players is tested by a series of questions.
          Users can also show their innovation on the white board provided by this website.</p>


          <h2 class="display-10 fw-bold lh-1 mb-3 ">DRAW</h2>  

          <p class="lead">Modern Technology brought the use of pictures in various fields. Also a simple picture speaks thousand words. So applications are required to create images and save them. An attempt has been made to do the same using simple algorithms.

          The objective of the project is to create an application that can draw simple images.  The Paint using JavaScript  application is created to easily draw images using several tool options. They include options like drawing circles, lines, rectangles, ellipses,  in 2D. 
         However, complex 3D images are not considered for the project.
         The images created using this application can be saved. We can further retrieve the images and view them. However, the options for editing of images like cropping are also provided. We are able to save the images into raw file format. So the images can be viewed anywhere downloaded in your system.
         This application is compatible with Windows Operating System, MacOs etc.</p>

          

             
        
          <h2 class="display-10 fw-bold lh-1 mb-3 ">QUIZ</h2>  

          <p class="lead">A quiz is a game which can also be called a mind sport where in the players,either as individuals or in teams attempt to answer questions.

            By playing this game a person can gather his knowledge in different field.Brainzone is a website that has general questions related to sports , science and many more.
             It has multiple choice questions and shows the correct answer after you attempt one. It is good for students of every age group it helps in increasing general knowledge about world ,Sports and science etc. 
            This website helps the user to increase his/her knowledge.  </p>

                 
                  
                    </div>
                   
    </Layout>
  )
}
