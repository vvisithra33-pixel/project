import Dot from '../components/91.jpg'
import Rot from '../components/92.jpg'
import React,{ useState } from "react";
import Milk from '../components/41.jpg'
import Bar from '../components/42.jpg'
import Lab from '../components/43.jpg'
import Mop from '../components/44.jpg'
import Zop from '../components/45.jpg'
import Jop from '../components/46.jpg'
import Banner from '../components/Banner.jpg'
import Avatar from '../components/76.jpg'
import Carousel from 'react-bootstrap/Carousel';


function Shopd() {
   
  const [count,setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
    const decreaseCount = () => {
    setCount(count - 1);
  };
    const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  
  return (
    <>
    
          <style>{`
          
.cart-btn:hover {
    background-color: #ffb524; /* Bootstrap primary color */
    color: #fff;
    border-color: #ffb524;
    transform: translateY(-2px); /* slight lift */
}
.fa-shopping-bag {
color: green;
}
.cart-btn {
   /* custom orange */
    color: green;
      position: absolute;
      left: 530px;
    
      top: 1040px;
    

   
   
   
  
      
  }
  .btn:hover {
      background-color: #ffb524; /* Bootstrap primary color */
    color: #fff;
    border-color: #ffb524;
    transform: translateY(-2px); /* slight lift */
 
 
}
    .custom-tabs {
    border-bottom: none;  /* removes parent bottom border */
}

.custom-tabs {
    border-bottom: none;  /* removes parent bottom border */
}

.custom-tabs .nav-link {

        border: none !important;      
    background: none !important;    /* removes background color */
    color: gray;                   /* optional: default text color */
    padding: 5px 10px;              /* optional: spacing */
    margin-left: 100px;
}

.custom-tabs .nav-link.active {
        border: none !important;   
    background: none !important;    /* optional: no highlight */
    color: green;
  
                 
    
}

#nav-reviews {
    margin-left: 110px;  /* moves content 100px to the right */
}
#nav-about {
 margin-left: 110px;  /* moves content 100px to the right */
}
}
.btn:hover {
  background-color: orange;
  color: white;
  border-color: orange;
}


      `}

      </style>
      
  
    <div>
        
      <img src={Dot} alt=''></img>
      <h1 class="text text-white display-6" style={{position: 'absolute',top: '200px',left: '550px'}}>Shop Detail</h1>
      <a href="#" style={{textDecoration: 'none',position: 'relative',bottom: '150px',left: '550px',color: 'green'}}>Home /</a>
      <a href="#" style={{textDecoration: 'none',position: 'relative',bottom: '150px',left: '560px',color: 'green'}}>Pages /</a>
       <a href="#" style={{textDecoration: 'none',position: 'relative',bottom: '150px',left: '570px',color: 'white'}}>Shop Detail</a>
      

      
            

      <div class="star" style={{position: 'relative',left: '530px',top: '360px'}}>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-secondary" ></i>
      </div>

        <h4 class="fw-bold mb-3" style={{color: '#45595b',left: '530px',position: 'relative',top: '220px'}}>Brocoli</h4>
        <p class="mb-3"  style={{color: '#747d88',left: '530px',position: 'relative',top: '220px'}}>Category: Vegetables</p>
        <h5 class="fw-bold mb-3" style={{color: '#45595b',position: 'relative',left: '530px',top: '220px'}}>3,35 $</h5>
<div class='card' style={{width: "400px",height: '350px',position: 'relative',top: '100px',left: '100px'}}>
  <img src={Rot} alt='' style={{width: '400px',height: '350px'}} ></img>
  </div> 
        <p class="tatoo" style={{width: '350px',left: '530px',position: 'relative',bottom: '100px',color: '#747d88'}}>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
        <p class="ball" style={{width: '350px',left: '530px',position: 'relative',bottom: '100px',color: '#747d88'}}>Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish</p>
        <div>

           <button onClick={decreaseCount} style={{borderRadius: '100%',position: 'relative',left: '530px',bottom: '100px'}}>-</button>
             <p style={{position: 'relative',left: '560px',bottom: '125px'}}>{count}</p>
          <button onClick={increaseCount} style={{borderRadius: '100%',position: 'relative',left: '580px',bottom: '170px'}}>+</button>
        
     
        </div>

    </div>
     <a href="#" class="btn border  rounded-pill  cart-btn " ><i class="fa fa-shopping-bag me-2 " ></i> Add to cart</a>
      <input class="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" type="search" style={{width: '300px',position: 'relative',left: '920px',bottom: '550px'}}></input>
      <i class="fa fa-search" style={{position: 'absolute',left: '1180px',top: '645px'}}></i>


<div>
<i class="fas fa-apple-alt me-2" style={{position: 'absolute',top: '710px',left: '920px',color: 'green'}}></i>
<i class="fas fa-apple-alt me-2" style={{position: 'absolute',top: '740px',left: '920px',color: 'green'}}></i>
<i class="fas fa-apple-alt me-2" style={{position: 'absolute',top: '770px',left: '920px',color: 'green'}}></i>
<i class="fas fa-apple-alt me-2" style={{position: 'absolute',top: '800px',left: '920px',color: 'green'}}></i>
<i class="fas fa-apple-alt me-2" style={{position: 'absolute',top: '830px',left: '920px',color: 'green'}}></i>
</div>
<p style={{position: 'absolute',left: '950px', top: '705px',color: 'green'}}>Apples</p>
<p style={{position: 'absolute',left: '950px', top: '735px',color: 'green'}}>Oranges</p>
<p style={{position: 'absolute',left: '950px', top: '765px',color: 'green'}}>Strawbery</p>
<p style={{position: 'absolute',left: '950px', top: '795px',color: 'green'}}>Banana</p>
<p style={{position: 'absolute',left: '950px', top: '825px',color: 'green'}}>Pumpkin</p>
<span style={{position: 'absolute',left: '1200px', top: '705px',color: 'gray'}}>(3)</span>
<span style={{position: 'absolute',left: '1200px', top: '735px',color: 'gray'}}>(5)</span>
<span style={{position: 'absolute',left: '1200px', top: '765px',color: 'gray'}}>(2)</span>
<span style={{position: 'absolute',left: '1200px', top: '795px',color: 'gray'}}>(8)</span>
<span style={{position: 'absolute',left: '1200px', top: '825px',color: 'gray'}}>(5)</span>
<h4 class="mb-4" style={{position: 'absolute',left: '920px',top: '900px',color: '#45595b'}}>Featured products</h4>
<img src={Milk} alt='' style={{width: '100px',position: 'absolute',left: '900px',top: '950px'}}></img>
<h6 class="mb-2" style={{position: 'absolute',left: '1010px',top: '950px',color: '#45595b'}}>Big Banana</h6>
      <div class="star" style={{position: 'absolute',left: '1010px',top: '970px'}}>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-secondary" ></i>
      </div>
  <h5 class="fw-bold me-2" style={{position: 'absolute',left: '1010px',top: '1000px',color: '#45595b'}}>2.99 $</h5>
  <h5 class="text-danger text-decoration-line-through" style={{position: 'absolute',left: '1080px',top: '1000px'}}>4.11 $</h5>
  <img src={Bar} alt='' style={{width: '100px',position: 'absolute',left: '900px',top: '1050px'}}></img>
  <h6 class="mb-2" style={{position: 'absolute',color: '#45595b',left: '1010px',top: '1060px'}}>Big Banana</h6>
    <div class="star" style={{position: 'absolute',left: '1010px',top: '1080px'}}>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-secondary" ></i>
      </div>
    <h5 class="fw-bold me-2" style={{position: 'absolute',left: '1010px',top: '1110px',color: '#45595b'}}>2.99 $</h5>
      <h5 class="text-danger text-decoration-line-through" style={{position: 'absolute',left: '1080px',top: '1110px'}}>4.11 $</h5>
    <img src={Lab} alt='' style={{width: '100px',position: 'absolute',left: '900px',top: '1150px'}}></img>
      <h6 class="mb-2" style={{position: 'absolute',color: '#45595b',left: '1010px',top: '1150px'}}>Big Banana</h6>
     <div class="star" style={{position: 'absolute',left: '1010px',top: '1170px'}}>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-secondary" ></i>
      </div>
        <h5 class="fw-bold me-2" style={{position: 'absolute',left: '1010px',top: '1200px',color: '#45595b'}}>2.99 $</h5>
              <h5 class="text-danger text-decoration-line-through" style={{position: 'absolute',left: '1080px',top: '1200px'}}>4.11 $</h5>
   <img src={Mop} alt='' style={{width: '100px',position: 'absolute',left: '900px',top: '1250px'}}></img>
         <h6 class="mb-2" style={{position: 'absolute',color: '#45595b',left: '1010px',top: '1260px'}}>Big Banana</h6>
       <div class="star" style={{position: 'absolute',left: '1010px',top: '1280px'}}>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-secondary" ></i>
      </div>
          <h5 class="fw-bold me-2" style={{position: 'absolute',left: '1010px',top: '1310px',color: '#45595b'}}>2.99 $</h5>
                    <h5 class="text-danger text-decoration-line-through" style={{position: 'absolute',left: '1080px',top: '1310px'}}>4.11 $</h5>
     <img src={Zop} alt='' style={{width: '100px',position: 'absolute',left: '900px',top: '1350px'}}></img>
              <h6 class="mb-2" style={{position: 'absolute',color: '#45595b',left: '1010px',top: '1360px'}}>Big Banana</h6>
        <div class="star" style={{position: 'absolute',left: '1010px',top: '1380px'}}>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-secondary" ></i>
      </div>
            <h5 class="fw-bold me-2" style={{position: 'absolute',left: '1010px',top: '1410px',color: '#45595b'}}>2.99 $</h5>
                          <h5 class="text-danger text-decoration-line-through" style={{position: 'absolute',left: '1080px',top: '1410px'}}>4.11 $</h5>
     <img src={Jop} alt='' style={{width: '100px',position: 'absolute',left: '900px',top: '1450px'}}></img>
              <h6 class="mb-2" style={{position: 'absolute',color: '#45595b',left: '1010px',top: '1450px'}}>Big Banana</h6>
        <div class="star" style={{position: 'absolute',left: '1010px',top: '1470px'}}>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-warning" ></i>
      <i class="fa fa-star text-secondary" ></i>
      </div>
             <h5 class="fw-bold me-2" style={{position: 'absolute',left: '1010px',top: '1500px',color: '#45595b'}}>2.99 $</h5>
                              <h5 class="text-danger text-decoration-line-through" style={{position: 'absolute',left: '1080px',top: '1500px'}}>4.11 $</h5>
    <a href="#" class="btn border border-secondary px-4 py-3 rounded-pill text-primary " style={{width: '250px',position: 'absolute',left: '900px',top: '1560px'}}>Vew More</a>
    <img src={Banner} alt='' style={{width: '250px',position: 'absolute',top: '100px',left: '900px',top: '1650px'}}></img>
<div class="nav nav-tabs custom-tabs">
    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-about" type="button">
        Description
    </button>
    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-reviews" type="button">
        Reviews
    </button>
</div>

<div class="tab-content mt-3">
    <div class="tab-pane fade show active" id="nav-about">
        <p style={{width: '750px',color: 'gray'}}>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit</p>
     <p style={{width: '750px',color: 'gray'}}>Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish Antarctic icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish, electric ray sweeper.</p>
   
  <table class="table text-center" style={{width: '400px'}}>
    <tbody>
        <tr class="bg-gray">
            <td style={{color: 'gray'}}>Weight</td>
            <td style={{color: 'gray'}}>1 kg</td>
        </tr>
        <tr>
            <td style={{color: 'gray'}}>Country of Origin</td>
            <td style={{color: 'gray'}}>Agro Farm</td>
        </tr>
        <tr class="bg-light">
            <td style={{color: 'gray'}}>Quality</td>
            <td style={{color: 'gray'}}>Organic</td>
        </tr>
          <tr class="bg-light">
            <td style={{color: 'gray'}}>Check</td>
            <td style={{color: 'gray'}}>Healthy</td>
        </tr>
          <tr class="bg-light">
            <td style={{color: 'gray'}}>Min Weight</td>
            <td style={{color: 'gray'}}>250 kg</td>
        </tr>
    </tbody>
</table>
    </div>
    
    <div class="tab-pane fade" id="nav-reviews">
     <div>
        <img src={Avatar} alt=''></img>
        <p class="Date" style={{position: 'absolute',left: '200px',top: '1270px',color: 'gray'}}>April 12, 2024</p>
        <h5 style={{position: 'absolute',left: '200px',top: '1300px',color: '#45595b'}}>Jason Smith</h5>
        <p style={{width: '750px',position: 'relative',left: '90px',color: 'gray'}}>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit</p>
     </div>
     <div style={{position: 'absolute',top: '1430px'}}>
        <img src={Avatar} alt=''></img>
         <p class="Date" style={{position: 'absolute',left: '100px',color: 'gray',width: '100px',bottom: '30px'}}>April 12, 2024</p>
           <h5 style={{position: 'absolute',color: '#45595b',width: '100px',left: '100px',bottom: '10px'}}>Sam Peters</h5>
        <p style={{width: '750px',position: 'absolute',left: '100px',color: 'gray'}}>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit </p>

     </div>
      
    </div>
</div>
<h4 class="mb-5 fw-bold" style={{position: 'absolute',left: '100px',color: '#45595b',top: '1680px'}}>Leave a Reply</h4>



     


     


  <div class="border-bottom rounded" style={{width: '350px',position: 'relative',top: '130px',left: '100px'}}>
<input type="text" class="form-control border-0 me-4" placeholder="Yur Name *"></input>
                                        </div>
    <div class="border-bottom rounded" style={{width: '350px',position: 'relative',top: '90px',left: '500px'}}>
<input type="text" class="form-control border-0 me-4" placeholder="Your Email"></input>
                                        </div>
<div class="border-bottom rounded " style={{width: '740px',position: 'relative',top: '170px',left: '100px'}}>
                                            <textarea name="" id="" class="form-control border-0" cols="30" rows="8" placeholder="Your Review *" spellcheck="false"></textarea>
                                        </div>
<a href="#" class="btn border border-secondary text-primary rounded-pill px-4 py-3" style={{position: 'relative',left: '690px',top: '240px'}}> Post Comment</a>
<p class="mb-0 me-3" style={{position: 'relative',left: '100px',top: '200px'}}>Please rate:</p>
<div class="Aow" style={{position: 'relative',top: '175px',left: '200px'}}>
<i class="fa fa-star text-muted"></i>
<i class="fa fa-star text-muted"></i>
<i class="fa fa-star text-muted"></i>
<i class="fa fa-star text-muted"></i>
<i class="fa fa-star text-muted"></i>
</div>
      <Carousel style={{position: 'relative',top: '500px'}} 
        activeIndex={index} 
        onSelect={handleSelect}
        pause={true}
        touch={true}
        controls={false}
        indicators={false}
      >
        <Carousel.Item>
          <div className="d-flex justify-content-around" style={{height: '500px'}} >
             <div className="card"><img src="/imaes/Poq.jpg"style={{borderRadius: '0px',position: 'relative',width: '300px'}} /><h4 style={{position: 'relative',top: '30px',left: '20px',color: '#45595b'}}>Bell Papper</h4><p style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px', color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><p class="text- fs-5 fw-bold" style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px',color: '#45595b'}}>$7.99 / kg</p><a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-success" style={{position: 'relative',top: '40px',left: '20px',width: '150px'}}><i class="fa fa-shopping-bag me-2 text-success"></i> Add to cart</a></div>
            <div className="card"><img src="/imaes/Poq1.jpg"style={{borderRadius: '0px',position: 'relative',width: '300px'}} /><h4 style={{position: 'relative',top: '30px',left: '20px',color: '#45595b'}}>Bell Papper</h4><p style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px', color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><p class="text- fs-5 fw-bold" style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px',color: '#45595b'}}>$7.99 / kg</p><a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-success" style={{position: 'relative',top: '40px',left: '20px',width: '150px'}}><i class="fa fa-shopping-bag me-2 text-success"></i> Add to cart</a></div>
            <div className="card"><img src="/imaes/Poq2.jpg"style={{borderRadius: '0px',position: 'relative',width: '300px'}} /><h4 style={{position: 'relative',top: '30px',left: '20px',color: '#45595b'}}>Bell Papper</h4><p style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px', color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><p class="text- fs-5 fw-bold" style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px',color: '#45595b'}}>$7.99 / kg</p><a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-success" style={{position: 'relative',top: '40px',left: '20px',width: '150px'}}><i class="fa fa-shopping-bag me-2 text-success"></i> Add to cart</a></div>
                        <div className="card"><img src="/imaes/Poq1.jpg"style={{borderRadius: '0px',position: 'relative',width: '300px'}} /><h4 style={{position: 'relative',top: '30px',left: '20px',color: '#45595b'}}>Bell Papper</h4><p style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px', color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><p class="text- fs-5 fw-bold" style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px',color: '#45595b'}}>$7.99 / kg</p><a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-success" style={{position: 'relative',top: '40px',left: '20px',width: '150px'}}><i class="fa fa-shopping-bag me-2 text-success"></i> Add to cart</a></div>
            

          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-around" style={{height: '500px'}}>
                        <div className="card"><img src="/imaes/Poq2.jpg"style={{borderRadius: '0px',position: 'relative',width: '300px'}} /><h4 style={{position: 'relative',top: '30px',left: '20px',color: '#45595b'}}>Bell Papper</h4><p style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px', color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><p class="text- fs-5 fw-bold" style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px',color: '#45595b'}}>$7.99 / kg</p><a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-success" style={{position: 'relative',top: '40px',left: '20px',width: '150px'}}><i class="fa fa-shopping-bag me-2 text-success"></i> Add to cart</a></div>
                        <div className="card"><img src="/imaes/Poq2.jpg"style={{borderRadius: '0px',position: 'relative',width: '300px'}} /><h4 style={{position: 'relative',top: '30px',left: '20px',color: '#45595b'}}>Bell Papper</h4><p style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px', color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><p class="text- fs-5 fw-bold" style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px',color: '#45595b'}}>$7.99 / kg</p><a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-success" style={{position: 'relative',top: '40px',left: '20px',width: '150px'}}><i class="fa fa-shopping-bag me-2 text-success"></i> Add to cart</a></div>
                        <div className="card"><img src="/imaes/Poq4.jpg"style={{borderRadius: '0px',position: 'relative',width: '300px'}} /><h4 style={{position: 'relative',top: '30px',left: '20px',color: '#45595b'}}>Bell Papper</h4><p style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px', color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><p class="text- fs-5 fw-bold" style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px',color: '#45595b'}}>$7.99 / kg</p><a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-success" style={{position: 'relative',top: '40px',left: '20px',width: '150px'}}><i class="fa fa-shopping-bag me-2 text-success"></i> Add to cart</a></div>
                        <div className="card"><img src="/imaes/Poq5.png"style={{borderRadius: '0px',position: 'relative',width: '300px'}} /><h4 style={{position: 'relative',top: '30px',left: '20px',color: '#45595b'}}>Bell Papper</h4><p style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px', color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><p class="text- fs-5 fw-bold" style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px',color: '#45595b'}}>$7.99 / kg</p><a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-success" style={{position: 'relative',top: '40px',left: '20px',width: '150px'}}><i class="fa fa-shopping-bag me-2 text-success"></i> Add to cart</a></div>

          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-around" style={{height: '500px'}}>
                                <div className="card"><img src="/imaes/Poq.jpg"style={{borderRadius: '0px',position: 'relative',width: '300px'}} /><h4 style={{position: 'relative',top: '30px',left: '20px',color: '#45595b'}}>Bell Papper</h4><p style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px', color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><p class="text- fs-5 fw-bold" style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px',color: '#45595b'}}>$7.99 / kg</p><a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-success" style={{position: 'relative',top: '40px',left: '20px',width: '150px'}}><i class="fa fa-shopping-bag me-2 text-success"></i> Add to cart</a></div>
                        <div className="card"><img src="/imaes/Poq1.jpg"style={{borderRadius: '0px',position: 'relative',width: '300px'}} /><h4 style={{position: 'relative',top: '30px',left: '20px',color: '#45595b'}}>Bell Papper</h4><p style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px', color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><p class="text- fs-5 fw-bold" style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px',color: '#45595b'}}>$7.99 / kg</p><a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-success" style={{position: 'relative',top: '40px',left: '20px',width: '150px'}}><i class="fa fa-shopping-bag me-2 text-success"></i> Add to cart</a></div>
                        <div className="card"><img src="/imaes/Poq2.jpg"style={{borderRadius: '0px',position: 'relative',width: '300px'}} /><h4 style={{position: 'relative',top: '30px',left: '20px',color: '#45595b'}}>Bell Papper</h4><p style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px', color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><p class="text- fs-5 fw-bold" style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px',color: '#45595b'}}>$7.99 / kg</p><a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-success" style={{position: 'relative',top: '40px',left: '20px',width: '150px'}}><i class="fa fa-shopping-bag me-2 text-success"></i> Add to cart</a></div>
                        <div className="card"><img src="/imaes/Poq1.jpg"style={{borderRadius: '0px',position: 'relative',width: '300px'}} /><h4 style={{position: 'relative',top: '30px',left: '20px',color: '#45595b'}}>Bell Papper</h4><p style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px', color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><p class="text- fs-5 fw-bold" style={{position: 'relative',top: '30px',left: '20px',width: '280px',top: '40px',color: '#45595b'}}>$7.99 / kg</p><a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-success" style={{position: 'relative',top: '40px',left: '20px',width: '150px'}}><i class="fa fa-shopping-bag me-2 text-success"></i> Add to cart</a></div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className='card' style={{height: '610px',position: 'relative',top: '650px',backgroundColor: '#2E865F'}}>


   
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



 






   
  </>
    
  )
}

export default Shopd
