import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductGallery from './components/ProductGallery';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Fox from './pages/Fox';
import Arrow from './pages/Arrow';
import Joe from './pages/Joe';
import Zoom from './pages/Zoom'
import Mongo from './pages/Mongo';
import Star from './pages/Star';
import Carousel from './pages/InfiniteCarousel';
import Three from './pages/Three'; 
import Qot from './pages/Qot';
import Wot from './pages/Wot';
import Eot from './pages/Eot';
import Rot from './pages/Rot';
import Shopd from './pages/Shopd';
import Ball from './pages/Ball';
import Mop from './pages/Mop';























function App() {
  return (
  
  
    <Router>
    
    
      <Navbar />
     
      <Routes>
        <Route path="/" element={<><Home/><ProductGallery/><Fox/><Arrow/><Joe/><Zoom/><Mongo/><Star/><Carousel/><Three/></>}/>
      
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Ball/>} />
            <Route path="/cart" element={<Qot />} />
             <Route path="/checkout" element={<Wot />} />
                    <Route path="/testimonial" element={<Eot />} />
                        <Route path="/error" element={<Rot />} />
                          <Route path="/shop-detail" element={<><Shopd /><Mop/></>} />
                           
                          
       
     
        
    
       
      
  

      </Routes>

  
    </Router>
    
   
    
  )
}

export default App;
