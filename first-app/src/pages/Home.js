import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';











function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Auto-play carousel

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 2); // 6 carousel items
    }, 3000); 
    // Change slide every 3 seconds

     return () => clearInterval(interval);
  }, []);

  return (

  
    <div className="page" style={{
      backgroundImage: `url(${require('../components/4.jpg')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
  
     

      <div style={{ maxWidth: 400, marginLeft: '700px',backgroundColor: 'orange' }}>
        <Carousel 
          activeIndex={index}
          onSelect={handleSelect}
          controls={true}
          indicators={false}
          pause={true}
          touch={true}
          

          
        >
          <Carousel.Item>
            <img 
              src="/imaes/7.png" 
              alt="Slide 1" 
              className="d-block w-100"
              style={{ height: '300px', objectFit: 'cover' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              src="/imaes/8.jpg
" 
              alt="Slide 2" 
              className="d-block w-100"
              style={{ height: '300px', objectFit: 'cover'}}
            />
          </Carousel.Item>
          
     
        
        
        
         
        
        </Carousel>
   
    
      </div>
  
  
    <section>
   <h1 style={{position: 'absolute',right: '800px',color: 'orange',top: '250px',fontSize: '40px'}}>100% Oraganic Foods</h1>
  <h1 style={{position: 'absolute',right: '800px',fontSize: '40px', color: 'green',left: '100px',top: '320px'}}>Organic Veggies & Fruits Foods</h1>


</section>
<input type='search' placeholder='search' style={{position: 'absolute',left: '100px',top: '440px',width: '20%',borderRadius: '20px',borderColor: 'orange'}}></input>
       <button style={{ position: 'absolute',borderRadius: '20px', right: '900px',top: '440px',borderColor: 'orange',backgroundColor: 'green',color: 'white'}}>Submit Now</button>

    </div>
  
    

    

    
  
  
  );
}

export default Home;




