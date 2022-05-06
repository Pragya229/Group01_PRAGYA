import React from "react"
import Image from "../Images/Images"

const Carousel = () => {

  return  ( 
<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
      <Image
            className="d-block mx-lg-auto img-fluid"
            filename="img1.png"
            alt="1"
          />
      
      
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>QUIZ</h1>
            <p></p>
        
          </div>
        </div>
      </div>
      <div class="carousel-item">
        
      <Image
            className="d-block mx-lg-auto img-fluid"
            filename="img2.jpg"
            alt="1"
          />
        <div class="container">
          <div class="carousel-caption">
            <h1>DRAW</h1>
            <p></p>
  
          </div>
        </div>
      </div>
      <div class="carousel-item">
      <Image
            className="d-block mx-lg-auto img-fluid"
            filename="Img3.jpg"
            alt="1"
          />


        <div class="container">
          <div class="carousel-caption text-end">
            <h1>Blog</h1>
            <p></p>
          
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}
 
export default Carousel