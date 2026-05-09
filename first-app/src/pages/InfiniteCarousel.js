import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function InfiniteCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <style>
          {`
          .box {
            width: 50%;
           
            height: 300px
          }
           
        `}
       
      </style>
      <Carousel style={{position: 'relative',top: '850px'}} 
        activeIndex={index} 
        onSelect={handleSelect}
        pause={true}
        touch={true}
        controls={false}
        indicators={false}
      >
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            <div className="box"><img src="/imaes/2001.jpg" className="w-25" style={{borderRadius: '20px',position: 'relative',top: '90px',right: '180px'}} /></div>
            <div className="box"><img src="/imaes/2001.jpg" className="w-25" style={{borderRadius: '20px',position: 'relative',top: '90px',right: '180px'}} /></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            <div className="box"><img src="/imaes/2001.jpg" className="w-25" style={{borderRadius: '20px',position: 'relative',top: '90px',right: '180px'}} /></div>
            <div className="box"><img src="/imaes/2001.jpg" className="w-25" style={{borderRadius: '20px',position: 'relative',top: '90px',right: '180px'}} /></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            <div className="box"><img src="/imaes/2001.jpg" className="w-25" style={{borderRadius: '20px',position: 'relative',top: '90px',right: '180px'}} /></div>
            <div className="box"><img src="/imaes/2001.jpg" className="w-25" style={{borderRadius: '20px',position: 'relative',top: '90px',right: '180px'}} /></div>
          </div>
        </Carousel.Item>
      </Carousel>
<p class="Qth" style={{position: "absolute",width: '450px',top: '5920px',left: '100px',color: 'gray'}}>Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                                <p class="Qth" style={{position: "absolute",width: '450px',top: '5920px',left: '740px',color: 'gray'}}>Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
          <p style={{position: 'absolute',top: '5980px',left: '270px',fontSize: '30px',color: 'green'}}>Client Name</p>
                    <p style={{position: 'absolute',top: '5980px',left: '920px',fontSize: '30px',color: 'green'}}>Client Name</p>
                              <p style={{position: 'absolute',top: '6030px',left: '280px',color: 'gray'}}>profession</p>
                                        <p style={{position: 'absolute',top: '6030px',left: '930px',color: 'gray'}}>profession</p>
                                               <div class="d-flex" style={{position: 'absolute',top: '6060px',left: '280px'}} >
                         <i class="bi bi-star-fill" ></i>
                         <i class="bi bi-star-fill"></i>
                         <i class="bi bi-star-fill"></i>
                         <i class="bi bi-star-fill"></i>
                         <i className='bi bi-star'></i>
                         </div>
                         <div class="d-flex" style={{position: 'absolute',top: '6060px',left: '930px'}} >
                         <i class="bi bi-star-fill" ></i>
                         <i class="bi bi-star-fill"></i>
                         <i class="bi bi-star-fill"></i>
                         <i class="bi bi-star-fill"></i>
                         <i className='bi bi-star'></i>
                         </div>
                         <p style={{position: 'absolute',top: '5700px',left: '400px',fontSize: '70px',color: 'green'}}>Our Client Saying!</p>
                         <p style={{position: 'absolute',top: '5660px',left: '540px',fontSize: '40px',color: 'gray'}}>Our Testimonial</p>
                         

                                      
                       </>
  );
}

export default InfiniteCarousel;