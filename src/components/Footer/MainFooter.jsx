// import React from "react";
import "./MainFooter.css";
import { Link } from "react-router-dom";
// import Home from "../Home/Home";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';



import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  // useColorModeValue,
} from "@chakra-ui/react";

const ListHeader = ({ children }) => (
  <Text fontWeight="bold" fontSize="md" mb={2}>
    {children}
  </Text>
);

const Logo = (props) => {
  return (
    <svg
      height={32}
      viewBox="0 0 120 28"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Your SVG path code here */}
    </svg>
  );
};

const MainFooter = () => (
  <>
    <Box
      bg="black"
      color="white"
 
      // color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Link className="logo" to="/">
              <img src="../../../images/logo.png" alt="logo" />
            </Link>
            {/* <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box> */}

            <Text fontSize={"sm"}>
              Autocar is the most trusted way of buying and selling used cars.
              Choose from over 5000 fully inspected second-hand car models.
              Select online and book a test drive at your home or at a autocar
              Hub near you. Get a no-questions-asked 5-day money back guarantee
              and a free one-year comprehensive service warranty with Assured
              Resale Value on every autocar Assured® car.
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>About</Link>
            {/* <Link href={'#'}>Press</Link> */}
            {/* <Link href={'#'}>Careers</Link> */}
            <Link href={"#"}>Contact</Link>
            {/* <Link href={'#'}>Partners</Link> */}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Product</ListHeader>
            <Link href={"#"}>Overview</Link>
            <Link href={"#"}>Features</Link>
            <Link href={"#"}>Tutorials</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Releases</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Status</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>

            <Link href={'#'}> <FaFacebook size={24} /></Link>
            <Link href={'#'}> <FaTwitter size={24}/></Link>
            {/* <Link href={'#'}>Dribbble</Link> */}
            <Link href={'#'}> <FaInstagram size={24}/></Link>
            <Link href={'#'}> <FaLinkedin size={24}/></Link>

          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
    <div
      className="copyright"
      style={{ height: "55px", display: "flex", alignItems: "center" }}
    >
      <div className="container">
        <div className="bttxt">
          Copyright &copy; 2023 Optical Arc. All Rights Reserved. Design by :
          Optical Arc Team
        </div>
      </div>
    </div>
  </>
);

export default MainFooter;
