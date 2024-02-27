import AvtarModal from "../Navbar/AvtarModal";
import HomeCarousel from "../carousel/HomeCarousel";
import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect, useRef, useState } from "react";
import {
  SimpleGrid,
  Box,
  Card,
  // CardHeader,
  // Heading,
  CardBody,
  // Text,
  CardFooter,
   Button,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Cookies from "js-cookie";

const Home = () => {
  const username = localStorage.getItem("userInfo");
  const user = JSON.parse(username)?.roles || "";

  const lastScrollTop = useRef(0);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var pageYOffset = window.scrollY
        if (pageYOffset > lastScrollTop.current) {
          // downward scroll
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          // upward scroll
          setIsNavbarVisible(true);
        } // else was horizontal scroll
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);

  
  return (
    <div>
      <div
        className={`header ${isNavbarVisible ? "visible" : ""}`}
        // style={{ position: "sticky", top: "0", zIndex: "1000" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-3 col-xs-12">
              <Link className="logo" to="/">
                <img src="../../../images/logo.png" alt="logo" />
              </Link>


              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>

              <div className="clearfix"></div>
            </div>
            <div className="col-md-10  col-sm-12 col-xs-12">
              <div className="navbar navbar-default" role="navigation">
                <div className="navbar-collapse collapse" id="nav-main">
                  <ul className="nav navbar-nav">
                    <li className="dropdown active ">
                      <Link to="/">Home</Link>
                    </li>
                    <li >
                      <Link to="/carlist"> Buy Cars </Link>
                    </li>
                    <li>
                      <Link to="/Contact">Contact Us</Link>
                    </li>

                    {user.includes("ADMIN") ? (
                      <li>
                        <Link to="/adddealer">
                          <button>Add Dealer</button>
                        </Link>
                      </li>
                    ) : (
                      ""
                    )}

                    {user.includes("DEALER") ? (
                      <>
                        <li>
                          <Link to="/dealer">
                            <button>
                              <span>Dealer Manegment</span>
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/dealer/userrequestlist">
                            <button>
                              <span>User Request</span>
                            </button>
                          </Link>
                        </li>
                      </>
                    ) : (
                      ""
                    )}

                    {username ? (
                      <>
                        {/* <li>
                          <Link to="/carlist"> My Booking </Link>
                        </li> */}
                        <li>
                          <AvtarModal />
                        </li>
                      </>
                    ) : (
                      <li>
                        <Link to="/signin">
                          <p> Sign In</p>{" "}
                        </Link>
                      </li>
                    )}

                    {/* 
                      <li className="postad"></li>

                      <li className="postad"></li> */}
                  </ul>
                </div>
                {/* <div className="clearfix"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{paddingBottom : "20px", paddingTop: "35px"}}>
      <div class="image-container">
        <img
            src="images/finalcar.jpg"
              style={{
                width:  "500%",
                height: "598px",
         }}/>
            <div class="text-overlay">
            



               <p>"Unlock Your Journey : <span className="break-span" style={{paddingTop:"30px"}}> Find Your Perfect Ride Today ! "</span> </p>
            </div>
            <button class="my-button">View All</button>
           

            
          
      </div>
      </div>
      
      
      {/* <div
        className="searchwrap"
        style={{ border: "2px solid white", backgroundColor: "white" }}
      >
        <div className="container">

          <h3
            className="heading-animation "
            style={{
              color: "#5dc302",
              transition: "transform 0.3s",
              fontSize: "60px",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1.1)")}
            onTouchStart={(e) => (e.target.style.transform = "scale(1)")}
            onTouchEnd={(e) => (e.target.style.transform = "scale(1.1)")}
          >
            Buy Cars with Ease!
          </h3>
        </div>
      </div> */}
       
           

      <HomeCarousel />
      
      <div style={{paddingTop : "20px"}}>
      <div className="about-wrap" >
        
        <div 
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div className="aboutinfo">
            <div className="title">
              {/* <span>World&apos;s Leading Used Cars</span> */}
              <h1>
                <span>Why</span> AutoCar?
              </h1>
            </div>
            
            <ul style={{display:"flex",gap:"20px", justifyContent:"center", height:"150px"}}>
              
            <Box

                  bg="white"              // Set background color to white
                  boxShadow="md"          // Add a shadow for depth
                  borderRadius="md"       // Add border radius for rounded corners
                  p={4}                   // Add padding to create space inside the card
            >
                  <li>
                    Revolutionize your car buying experience with ease!
                  </li>
            </Box>
            <Box
                  bg="white"              // Set background color to white
                  boxShadow="md"          // Add a shadow for depth
                  borderRadius="md"       // Add border radius for rounded corners
                  p={4}                   // Add padding to create space inside the card
            >
                  <li>
                    Access to a wide range of cars and potential buyers/sellers.
                  </li>
            </Box>
            <Box
                  bg="white"              // Set background color to white
                  boxShadow="md"          // Add a shadow for depth
                  borderRadius="md"       // Add border radius for rounded corners
                  p={4}                   // Add padding to create space inside the card
            >
                  <li>
                    Sellers can create detailed listings for their cars, including
                    high-resolution images, specifications, and pricing information.
                  </li> 
            </Box>  
            <Box
                  bg="white"              // Set background color to white
                  boxShadow="md"          // Add a shadow for depth
                  borderRadius="md"       // Add border radius for rounded corners
                  p={4}                   // Add padding to create space inside the card
            >
                  <li>
                    By eliminating the need for physical showrooms and extensive
                    paperwork, our platform saves valuable time and resources for
                    both buyers and sellers.
                  </li> 
            </Box> 
                  
              
              {/* <li>Duis non massa id nisl imperdiet iaculis.</li> */}
            </ul>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
      </div>
      {/* <Car Logos> */}
      <div className="section whitebg">
        <div className="container">
          <div className="titleTop">
            <h3>
              Available <span>Brand</span>
            </h3>
            <h1 style={{ fontSize: "20px" }}>
              we pride ourselves on offering a wide selection of vehicles from
              renowned car brands. We have established strong partnerships with
              top manufacturers in the industry, ensuring that our customers
              have access to the best and most reliable vehicles on the market.
            </h1>
          </div>
          <div className="topsearchwrap">
            <ul
              className="row makelist"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
                flexDirection: "row",

                // border: "2px solid black",
              }}
            >
              <li
                className="col-md-2 col-sm-3 col-xs-6 "
                style={{ cursor: "pointer" }}
              >
                <img
                  className="transition-300ms"
                  src="../../../images/logo/new car logos/converted_image__10_-min-removebg-preview (1).png"
                  alt=""
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                />
                <strong>Tata Motors</strong>
              </li>
              <li
                className="col-md-2 col-sm-3 col-xs-6 "
                style={{ cursor: "pointer", flexDirection: "column" }}
              >
                <img
                  className="transition-300ms"
                  src="../../../images/logo/new car logos/converted_image__11_-min-removebg-preview (1).png"
                  alt=""
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                />
                <strong>Maruti Suzuki</strong>
              </li>
              <li
                className="col-md-2 col-sm-3 col-xs-6 "
                style={{ cursor: "pointer" }}
              >
                <img
                  className="transition-300ms"
                  src="../../../images/logo/new car logos/converted_image__8_-min-removebg-preview (1).png"
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  alt=""
                />
                <strong>Hyundai</strong>
              </li>
              <li
                className="col-md-2 col-sm-3 col-xs-6 "
                style={{ cursor: "pointer" }}
              >
                <img
                  className="transition-300ms"
                  src="../../../images/logo/new car logos/converted_image__9_-min-removebg-preview (1).png"
                  alt=""
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                />
                <strong>Mahindra</strong>
              </li>
              <li
                className="col-md-2 col-sm-3 col-xs-6 "
                style={{ cursor: "pointer" }}
              >
                <img
                  className="transition-300ms"
                  src="../../../images/logo/new car logos/remove 1 (1).png"
                  alt=""
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                />
                <strong>Honda</strong>
              </li>
              <li
                className="col-md-2 col-sm-3 col-xs-6 "
                style={{ cursor: "pointer" }}
              >
                <img
                  className="transition-300ms"
                  src="../../../images/logo/new car logos/remove 2 (2).png"
                  alt=""
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                />
                <strong>Toyota</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>

      
      {/* <Explore by lifestylr cards> */}
      <div className="section whitebg howitwrap">
        <div className="container">
          <div className="titleTop">
            <h3>
              Explore by <span>Lifestyle</span>
            </h3>
          </div>
          <div className="parent">
            <div className="div1" >
              <img
                onMouseOver={(a) => (a.target.style.transform = "scale(1.05)")}
                onMouseOut={(a) => (a.target.style.transform = "scale(1)")}
                className="transition-300ms cursor-pointer"
                src="../../../images/Cards/cards1.jpg"
                alt="Image description"
              />
            </div>
            <div className="div2">
              <img
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                className="transition-300ms cursor-pointer"
                src="../../../images/Cards/cards2.jpg"
                alt="Image description"
              />
            </div>
            <div className="div3">
              <img
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                className="transition-300ms cursor-pointer"
                src="../../../images/Cards/cards3.jpg"
                alt="Image description"
              />
            </div>
            <div className="div4">
              <img
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                className="transition-300ms cursor-pointer"
                src="../../../images/Cards/cards5.jpg"
                alt="Image description"
              />{" "}
            </div>
            <div className="div5">
              <img
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                className="transition-300ms cursor-pointer"
                src="../../../images/Cards/cards6.jpg"
                alt="Image description"
              />
            </div>
            <div className="div6">
              <img
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                className="transition-300ms cursor-pointer"
                src="../../../images/Cards/cards4.jpg"
                alt="Image description"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <Insight Cards> */}
      <div className="section whitebg howitwrap">
        <div className="container">
          <div className="titleTop">
            <h3>
              Insights That <span> Drive Us</span>
            </h3>
          </div>
                
          <ul
            className="howlist"
            style={{
              display: "flex",
              listStyle: "none",
              padding: 0,
              justifyContent: "center",
            }}
          >
            
            <li className="col-md-4 col-sm-4">
              <img
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                className="transition-300ms cursor-pointer"
                src="../../../images/Cards/Insight/GREEN CARD 2 25_15 PX-01-min.jpg"
                alt=""
                style={{ width: "100%", height: "auto", maxWidth: "400px" }}
              />
            </li>

            <li className="col-md-4 col-sm-4">
              <img
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                className="transition-300ms cursor-pointer"
                src="../../../images/Cards/Insight/GREEN CARD 25_15 PX-01-min (1).jpg"
                alt=""
              />
            </li>

            <li className="col-md-4 col-sm-4">
              <img
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                className="transition-300ms cursor-pointer"
                src="../../../images/Cards/Insight/GREEN CARD 25_15 PX-01-min.jpg"
                alt=""
                style={{ width: "100%", height: "auto", maxWidth: "400px" }}
              />
            </li>
            <li className="col-md-4 col-sm-4">
              <img
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                className="transition-300ms cursor-pointer"
                src="../../../images/Cards/Insight/GREEN CARD 3 25_15 PX-01-min.jpg"
                alt=""
                style={{ width: "100%", height: "auto", maxWidth: "400px" }}
              />
            </li>
          </ul>
        </div>
      </div>

      {/* <Create account scetion> */}
      <div className="section whitebg howitwrap">
        <div className="container">
          <ul className="howlist row">
            <li className="col-md-4 col-sm-4 ">
              <div className="iconcircle">
                <Link to="/signup">
                  <div
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  >
                    <img
                      className="transition-300ms cursor-pointer"
                      src="images/avatar.png"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <h4>Create a Free Account</h4>
              <p>
                Get started on your car buying journey by creating a free
                account. Discover a tailored experience, expert guidance, and
                the tools you need to make informed decisions with ease.
              </p>
            </li>

            <li className="col-md-4 col-sm-4">
              <div className="iconcircle">
                <div
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                >
                  <img
                    className="transition-300ms cursor-pointer"
                    src="images/car.png"
                    alt=""
                  />
                </div>
              </div>
              <h4>Post your Free Car</h4>
              <p>
                Sell with Ease and Reach a Wide Audience!say goodbye to
                traditional selling methods and embrace the convenience of our
                digital car marketplace
              </p>
            </li>

            <li className="col-md-4 col-sm-4">
              <div className="iconcircle">
                <div
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                >
                  <img
                    className="transition-300ms cursor-pointer"
                    src="images/sell-icon.png"
                    alt=""
                  />
                </div>
              </div>
              <h4>Sold or Buy</h4>
              <p>
                Maximize Your Car&apos;s Value with Easy Selling & Find Your
                Dream Car in Just a Few Clicks! Sell with Ease, Buy with
                Confidence. Unlock a World of Possibilities: Sell, Buy, and
                Drive!
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* <FAQ'S> */}
      <div className="section whitebg howitwrap">
        <div className="container">
          <div className="titleTop">
            <h3>
              Frequently Asked <span> Questions</span>
            </h3>
          </div>
          <ul className="howlist row">
            <li className="col-md-12 col-sm-12 ">
              <div>
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Q. When and where can I take a test drive?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} style={{ color: '#888' }}>
                      You can schedule a home test drive for this Autocar
                      assured car at any date and time you find convenient using
                      our test drive booking form.Your assigned Autocar
                      Relationship Manager will then reach out to you and make
                      sure all the details of your preferred car are made
                      available to you before arriving at your home on the
                      selected date & time for the test drive.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Q. How do I book a car of my choice?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} style={{ color: '#888' }}>
                      You can book a car. If you complete the purchase of the
                      vehicle within the holding period, the deposit will be
                      applied towards the purchase otherwise the booking amount
                      will be refunded back to you and the booking cancelled.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Q. Will Autocar help me with car finance?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} style={{ color: '#888' }}> 
                      Absolutely, buyers can choose to avail financing through
                      Autocar wherein we would get the loan processed through
                      our finance partners. Our established partnerships help us
                      process loans faster and get our customers better interest
                      rates. Depending on your credit worthiness, you can avail
                      used car loans through Autocar at interest rates as low as
                      12.99% compared to the market rates of 14-16%.{" "}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Link to="/contact">
                <Button
                  colorScheme="teal"
                  variant="outline"
                  size="sm"
                  w="150px"
                >
                  <span style={{ marginRight: "2px", padding: "5px" }}>
                  VISIT HELP CENTER
                  </span>
               
                </Button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Home;
