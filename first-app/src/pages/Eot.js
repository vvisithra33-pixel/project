import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Dot from '../components/91.jpg'

function Eot() {
   const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
  return (
    <>
    <img src={Dot} alt=''></img>
    <div>
        <style>
          {`
          .box {
            width: 50%;
           
            height: 300px;

   
}
             
          .bottom-border-example {
            width: 100%;
            border: 1px solid orange;
            height: 200px
          }
           
        
    
   
         
        
       
        `}
       
      </style>
          <Carousel style={{position: 'relative',top: '200px'}} 
        activeIndex={index} 
        onSelect={handleSelect}
        pause={true}
        touch={true}
        controls={false}
        indicators={false}
      >
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            <div className="box"><img src="/imaes/2001.jpg" className="w-25" style={{borderRadius: '20px',position: 'relative',top: '130px',right: '150px'}} /></div>
            <div className="box"><img src="/imaes/2001.jpg" className="w-25" style={{borderRadius: '20px',position: 'relative',top: '130px',right: '150px'}} /></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            <div className="box"><img src="/imaes/2001.jpg" className="w-25" style={{borderRadius: '20px',position: 'relative',top: '130px',right: '150px'}} /></div>
            <div className="box"><img src="/imaes/2001.jpg" className="w-25" style={{borderRadius: '20px',position: 'relative',top: '130px',right: '150px'}} /></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
           <div className="d-flex justify-content-around">
            <div className="box"><img src="/imaes/2001.jpg" className="w-25" style={{borderRadius: '20px',position: 'relative',top: '130px',right: '150px'}} /></div>
            <div className="box"><img src="/imaes/2001.jpg" className="w-25" style={{borderRadius: '20px',position: 'relative',top: '130px',right: '150px'}} /></div>
          </div>
       
        </Carousel.Item>
      </Carousel>
          <a href="#" style={{position: 'absolute',bottom: '310px',left: '560px',textDecoration: 'none',color: 'green'}}>Home /</a>
                    <a href="#" style={{position: 'absolute',bottom: '310px',left: '630px',textDecoration: 'none',color: 'green'}}>Pages /</a>
                      <a href="#" style={{position: 'absolute',bottom: '310px',left: '690px',textDecoration: 'none',color: 'green'}}>Testimonial </a>
<p class="Qth" style={{position: "absolute",width: '450px',top: '740px',left: '100px',color: 'gray'}}>Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                                <p class="Qth" style={{position: "absolute",width: '450px',top: '740px',left: '740px',color: 'gray'}}>Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
          <p style={{position: 'absolute',top: '850px',left: '290px',fontSize: '30px',color: 'green'}}>Client Name</p>
                    <p style={{position: 'absolute',top: '850px',left: '930px',fontSize: '30px',color: 'green'}}>Client Name</p>
                              <p style={{position: 'absolute',top: '890px',left: '300px',color: 'gray'}}>profession</p>
                                        <p style={{position: 'absolute',top: '890px',left: '950px',color: 'gray'}}>profession</p>
                                               <div class="d-flex" style={{position: 'absolute',top: '920px',left: '300px'}} >
                         <i class="bi bi-star-fill" ></i>
                         <i class="bi bi-star-fill"></i>
                         <i class="bi bi-star-fill"></i>
                         <i class="bi bi-star-fill"></i>
                         <i className='bi bi-star'></i>
                         </div>
                         <div class="d-flex" style={{position: 'absolute',top: '920px',left: '950px'}} >
                         <i class="bi bi-star-fill" ></i>
                         <i class="bi bi-star-fill"></i>
                         <i class="bi bi-star-fill"></i>
                         <i class="bi bi-star-fill"></i>
                         <i className='bi bi-star'></i>
                         </div>
                         <p style={{position: 'absolute',top: '540px',left: '400px',fontSize: '70px',color: 'green'}}>Our Client Saying!</p>
                         <p style={{position: 'absolute',top: '500px',left: '540px',fontSize: '40px',color: 'gray'}}>Our Testimonial</p>
                         </div>
<p style={{ borderBottom: "2px solid orange", marginLeft: "100px",position: 'relative',width: '450px',bottom: '20px' }}></p>
<p style={{ borderBottom: "2px solid orange", marginLeft: "750px",position: 'relative',width: '450px',bottom: '30px' }}></p>
 
 
<div className='card' style={{height: '610px',position: 'relative',top: '370px',backgroundColor: '#2E865F'}}>


   
<input type="text" class="moo" style={{position: 'absolute',top: '100px',left: '350px',width: '650px',borderRadius: '20px'}}>
</input>

   
     
  

<div class="bottom-border-example"></div>
<button style={{width: '150px',backgroundColor: 'orange',position: 'absolute',top: '102px',left: '850px',borderRadius: '20px',border: 'orange',color: 'white'}}>Subscribe Now</button>
<h1 class="Voo mb-0" style={{position: 'absolute', color: 'orange',top: '70px',left: '100px'}}>Fruitables</h1>
<p class="Iov" style={{position: 'absolute',color: 'white',top: '120px',left: '100px'}}>Fresh products</p>
<a class="btn " style={{position: 'absolute',left: '1100px',top: '100px',color: 'white'}}><i class="fab fa-twitter"></i></a>
<a class="btn " style={{position: 'absolute',left: '1130px',top: '100px',color: 'white'}}><i class="fab fa-facebook-f"></i></a>
<a class="btn " style={{position: 'absolute',left: '1160px',top: '100px',color: 'white'}}><i class="fab fa-youtube"></i></a>
<a class="btn " style={{position: 'absolute',left: '1190px',top: '100px',color: 'white'}}><i class="fab fa-linkedin-in"></i></a>

<h4 className='text-light  ' style={{ position: 'absolute',left: '80px',top: '270px'}}>Why People Like us!</h4>
<h4 className='text-light  ' style={{ position: 'absolute' ,left: '420px',top: '270px'}}>Shop info</h4>
<h4 className='text-light ' style={{ position: 'absolute',left: '680px',top: '270px'}}>Account</h4>
<h4 className='text-light ' style={{ position: 'absolute',left: '980px',top: '270px'}}>Contact</h4>

  
   <div class="boo" style={{position: 'absolute',top: '350px',left: '80px'}}>
  <p>typesetting, remaining essentially</p>
  <p>unchanged. It was popularised in the </p>
  <p>1960s with the like Aldus PageMaker</p>
  <p>including of Lorem Ipsum.</p>
  </div>
  <div class="soo" style={{position: 'absolute',top: '350px',left: '420px'}}>
    <p>Contact Us</p>
    <p>FAQs & Help</p>
    <p>About Us</p>
    <p>Privacy Policy</p>
    <p>Terms & Condition</p>
    <p>Return Policy</p>
  </div>
    <div class="goo" style={{position: 'absolute',top: '350px',left: '680px'}}>
    <p>My Account</p>
    <p>Shop details</p>
    <p>Shopping Cart</p>
    <p>Wishlist</p>
    <p>Order History</p>
    <p>International Orders</p>
  </div>
     <div class="woo" style={{position: 'absolute',top: '350px',left: '980px'}}>
    <p>Address: 1429 Netus Rd, NY 48247</p>
    <p>Email: Example@gmail.com</p>
    <p>Phone: +0123 4567 8910</p>
    <p>Payment Accepted</p>
  

  </div>


</div>
  <h1 class="text-center" style={{position: 'absolute',top: '200px',left: '550px',color: 'white'}}>Testimonial</h1>





                  </>
  
    
      
    
  )
}

export default Eot
