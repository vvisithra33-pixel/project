import { useState, useEffect, useRef, useCallback } from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';





const allProducts = [
  { id: 1, name: "Grapes", category: "Bread", img: "/imaes/5.jpg"  },
  { id: 2, name: "Apricots", category: "Bread", img: "/imaes/4.jpg"  },
  { id: 3, name: "Banana", category: "Meat", img: "/imaes/3.jpg" },
  { id: 4, name: "Raspberries", category: "Meat", img: "/imaes/2.jpg"  },
  { id: 5, name: "Oranges", category: "fruit", img: "/imaes/1.jpg"  },
  { id: 6, name: "Apple", category: "fruit", img: "/imaes/6.jpg"  },
  { id: 7, name: "Grapes", category: "vegetable", img: "/imaes/5.jpg" },
  { id: 8, name: "Raspberries", category: "vegetable", img: "/imaes/2.jpg"  },
  { id: 9, name: "Oranges", category: "Meat", img: "/imaes/1.jpg"  },
  { id: 10, name: "Carrot", category: "vegetable", img: "/imaes/4.jpg" },
  { id: 11, name: "Tomato", category: "vegetable", img: "/imaes/3.jpg" },

];

const ITEMS_PER_PAGE = 8;

export default function ProductGallery() {
  const [filter, setFilter] = useState("all");
  const [displayedItems, setDisplayedItems] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const observerTarget = useRef(null);

  const handleCarouselSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % 3); // 3 carousel items (4 cards each)
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);


  const filteredProducts =
    filter === "all"
      ? allProducts
      : allProducts.filter(item => item.category === filter);

  const visibleProducts = filteredProducts.slice(0, displayedItems);

  const loadMoreProducts = useCallback(() => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setDisplayedItems(prev => Math.min(prev + ITEMS_PER_PAGE, filteredProducts.length));
      setIsLoading(false);
    }, 300);
  }, [filteredProducts.length]);

  // Reset displayed items when filter changes
  useEffect(() => {
    setDisplayedItems(ITEMS_PER_PAGE);
  }, [filter]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !isLoading && visibleProducts.length < filteredProducts.length) {
          loadMoreProducts();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [isLoading, visibleProducts.length, filteredProducts.length, loadMoreProducts]);

  return (
    <div>
      {/* Buttons */}

    
        <button style={{ marginRight: "20px",borderRadius: "20px" ,width: "150px", marginLeft: "400px",marginTop: "440px",height: "40px" }}  onClick={() => setFilter("all")}>All Products</button>
        <button  style={{marginRight: "20px",borderRadius: "20px",width: "150px",height: "40px"}}  onClick={() => setFilter("vegetable")}>Vegetables</button>
        <button  style={{ marginRight: "20px",borderRadius: "20px",width: "150px",height: "40px"}}  onClick={() => setFilter("fruit")}>Fruits</button>
         <button  style={{marginRight: "20px",borderRadius: "20px",width: "150px",height: "40px"}}  onClick={() => setFilter("Bread")}>Bread</button>
          <button  style={{ marginRight: "20px",borderRadius: "20px",width: "150px", height: "40px"}}  onClick={() => setFilter("Meat")}>Meat</button>
              <p style={{ fontSize: "40px", width: "250px",marginLeft: "50px",color: "#0f250f"}}>Our Organic Products</p>
    

      {/* Images */}
    
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {visibleProducts.map(item => (
 
         <div style={{ width: "250px", borderColor: "#ffb524", marginLeft: "50px"}} className="card" key={item.id}>
          <div>
            <img 
              src={item.img}
              alt={item.name}
              width="100%"
              height="120"
             
              style={{ objectFit: "cover"}}
          
            />
           </div>
           <h1 style={{textAlign: "center"}}>{item.name}</h1>
           <p style={{ textAlign: "center", color: "gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
           <h5 style={{ marginLeft: "80px"}}>$4.99 / kg</h5>
             <button style={{ width: "100px", color: "green", borderRadius: "20px", marginLeft: "70px", borderColor: "#ffb524", backgroundColor: "white", marginBottom: "40px"}}>Add to cart</button>
       
          </div>
      

        ))}
      
        </div>

        {/* Infinite Scroll Sentinel */}
        <div 
          ref={observerTarget} 
          style={{ padding: "20px", textAlign: "center" }}
        >
          {isLoading && (
            <div style={{ color: "#0f250f", fontSize: "18px", fontWeight: "bold" }}>
              Loading more products...
            </div>
          )}
          {!isLoading && visibleProducts.length === filteredProducts.length && filteredProducts.length > 0 && (
            <div style={{ color: "#999", fontSize: "16px", marginTop: "20px" }}>
            </div>
          )}
        </div>

        {/* Infinite Carousel with 4 Product Cards */}
        <div style={{ maxWidth: "100%", margin: "40px auto", marginTop: "60px", paddingBottom: "50px" }}>
          <Carousel 
            activeIndex={carouselIndex}
            onSelect={handleCarouselSelect}
            controls={true}
            indicators={true}
            pause={false}
            touch={true}
          >
            {/* Item 1 - Cards 1-4 */}
            <Carousel.Item>
              <div style={{ display: "flex", gap: "20px", padding: "0 50px" }}>
                {allProducts.slice(0, 4).map(item => (
                  <div style={{ width: "22%", borderColor: "#ffb524" }} className="card" key={item.id}>
                    <div>
                      <img 
                        src={item.img}
                        alt={item.name}
                        width="100%"
                        height="150"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h5 style={{textAlign: "center", padding: "10px 5px"}}>{item.name}</h5>
                    <p style={{ textAlign: "center", color: "gray", fontSize: "12px"}}>Lorem ipsum</p>
                    <h6 style={{ marginLeft: "80px"}}>$4.99 / kg</h6>
                    <button style={{ width: "80px", color: "green", borderRadius: "20px", marginLeft: "70px", borderColor: "#ffb524", backgroundColor: "white", marginBottom: "20px"}}>Add to cart</button>
                  </div>
                ))}
              </div>
            </Carousel.Item>

            {/* Item 2 - Cards 5-8 */}
            <Carousel.Item>
              <div style={{ display: "flex", gap: "20px", padding: "0 50px" }}>
                {allProducts.slice(4, 8).map(item => (
                  <div style={{ width: "22%", borderColor: "#ffb524" }} className="card" key={item.id}>
                    <div>
                      <img 
                        src={item.img}
                        alt={item.name}
                        width="100%"
                        height="150"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h5 style={{textAlign: "center", padding: "10px 5px"}}>{item.name}</h5>
                    <p style={{ textAlign: "center", color: "gray", fontSize: "12px"}}>Lorem ipsum</p>
                    <h6 style={{ marginLeft: "80px"}}>$4.99 / kg</h6>
                    <button style={{ width: "80px", color: "green", borderRadius: "20px", marginLeft: "70px", borderColor: "#ffb524", backgroundColor: "white", marginBottom: "20px"}}>Add to cart</button>
                  </div>
                ))}
              </div>
            </Carousel.Item>

            {/* Item 3 - Cards 9-11 */}
            <Carousel.Item>
              <div style={{ display: "flex", gap: "20px", padding: "0 50px" }}>
                {allProducts.slice(8, 11).map(item => (
                  <div style={{ width: "22%", borderColor: "#ffb524" }} className="card" key={item.id}>
                    <div>
                      <img 
                        src={item.img}
                        alt={item.name}
                        width="100%"
                        height="150"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h5 style={{textAlign: "center", padding: "10px 5px"}}>{item.name}</h5>
                    <p style={{ textAlign: "center", color: "gray", fontSize: "12px"}}>Lorem ipsum</p>
                    <h6 style={{ marginLeft: "80px"}}>$4.99 / kg</h6>
                    <button style={{ width: "80px", color: "green", borderRadius: "20px", marginLeft: "70px", borderColor: "#ffb524", backgroundColor: "white", marginBottom: "20px"}}>Add to cart</button>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
  
      </div>

  );
}

