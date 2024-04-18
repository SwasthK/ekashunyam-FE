// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkAuthentication = async () => {
//       const jwtToken = Cookies.get("access-token");
//       if (jwtToken) {
//         try {
//           const response = await axios.post("/api/verifyToken", {
//             token: jwtToken,
//           });
//           setIsAuthenticated(response.data.authorized);
//         } catch (error) {
//           console.error("Error in authorizing:", error);
//           setIsAuthenticated(false);
//         }
//       } else {
//         setIsAuthenticated(false);
//       }
//     };
//     checkAuthentication();
//   }, []);

//   return (
//     <div>
//       <h1>Home Page</h1>
//       {isAuthenticated ? (
//         <button>Edit</button>
//       ) : (
//         <button onClick={() => navigate("/register")}>Register</button>
//       )}
//     </div>
//   );
// };

// export default Home;

import React, { useRef, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Marquee from "@/components/Additional/Marquee/Marquee";
import Brochure from "@/components/Additional/Brochure/Brochure";
import Footer from "@/components/Additional/Footer/Footer";
// import ImgRender from "@/components/Additional/ImageRender/ImageRender";
import Glass from "@/components/Additional/Glassmorphism/Glass";
import Developers from "@/components/Additional/Developers/Developers";
import Landing from "@/components/Additional/Landing/Landing";
import Navbar from "@/components/Additional/Navbar/Navbar";
import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";
// import MyComponent from "@/components/Additional/Parralax/MyComponent";
// import locomotiveScroll from "locomotive-scroll";
const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  // const scrollRef = useRef();
  // useEffect(() => {
  //   const scroll = new locomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });
  // });
  // //-------------- if needed to check authentication---------------------

  // useEffect(() => {
  //   const checkAuthentication = async () => {
  //     try {
  //       const response = await axios.get("/user/verifyToken", {
  //         validateStatus: function (status) {
  //           return status < 500;
  //         },
  //       });
  //       if (!response.data.authorized ) {
  //         console.log(response.data.message);
  //         setIsAuthenticated(false);
  //       } else {
  //         setIsAuthenticated(true);
  //       }
  //     } catch (error) {
  //       console.error("Error in authorizing:", error.message);
  //       setIsAuthenticated(false);
  //     } finally {
  //       setloading(false);
  //     }
  //   };
  //   checkAuthentication();
  // }, []);

  return (
    <div
      // ref={scrollRef}
      // data-scroll-container
      // data-scroll-speed="3"
      // data-scroll-position="top"
      className="overflow-hidden"
    >
      {/* <MyComponent /> */}
      {/* <div className="bg-blue-500 w-screen h-screen"></div>  */}
      <Navbar></Navbar>
      <Landing></Landing>

      {/* ---------------just for the testing purpose------------ */}

      {/* {loading ? (
          <p>Loading...</p>
        ) : isAuthenticated ? (
          <Button text={"Edit"} click={"/register"}></Button>
        ) : (
          <Button text={"Register"} click={"/login"}></Button>
        )} */}

      {/* --------------------------------- ------------------------*/}
      {/* <ImgRender /> */}

      <Glass />
      <HorizontalScroll />
      <Brochure />
      {/* <Marquee /> */}
      <Developers />
      <Footer />
    </div>
  );
};

export default Home;
